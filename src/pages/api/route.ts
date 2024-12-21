import axios from 'axios';
import { sendEmail } from '@/services/emailService';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { token, email, message } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    return res.status(400).json({ message: 'Token not found' });
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );

    if (response.data.success) {
      const emailRes = await sendEmail(email, 'New Contact Form Submission', `Email: ${email}\nMessage: ${message}`);
      try {
        if (emailRes.status === 200) {
          return res.status(200).json({ message: 'Success' });
        } else {
          return res.status(400).json({ message: 'Failed to send email' });
        }
      } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
  
    } else {
      return res.status(400).json({ message: 'Failed to verify' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}