import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
    port: 587,
    secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const sendEmail = async (from: string, subject: string, text: string) => {
  const mailOptions = {
    from,
    to: process.env.GMAIL_USER,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return { status: 200 };
  } catch (error) {
    console.error('Error sending email:', error);
    return { status: 500 };
  }
};