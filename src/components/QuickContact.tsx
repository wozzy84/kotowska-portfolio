import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import QuickContactStyle from "./QuickContactStyle.module.css";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import QuickContactForm from "./QuickContactForm";
import QuickContactSuccess from "./QuickContactSuccess";
import QuickContactError from "./QuickContactError";

const {
  cardStyle,
  headerTextStyle,
  descriptionTextStyle,
  envelopeStyle,
  envelopeStyleSent,
  formContainerStyle,
} = QuickContactStyle;

const imageSources = {
  light: { src: "/images/envelope_light_closed.webp", width: 122, height: 102 },
  lightOpen: {
    src: "/images/envelope_light_open.webp",
    width: 121,
    height: 129,
  },
  dark: { src: "/images/envelope_dark_closed.webp", width: 122, height: 99 },
  darkOpen: { src: "/images/envelope_dark_open.webp", width: 121, height: 127 },
};

const quickContactDescription = {
  defaultDescription:
    "You can also drop me a line and I promise to get back to you ASAP",
  reCaptchaDescription:
    "Almost there... Could you just check the capcha for me please",
  thankYouDescription: "Thank you for reaching out!",
  somethingWentWrongDescription: "Oops, something went wrong!",
};

const QuickContact: React.FC = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [envelopeSrc, setEnvelopeSrc] = useState(imageSources.light);
  const [messageSent, setMessageSent] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const imageSourceLight = messageSent
      ? imageSources.lightOpen
      : imageSources.light;
    const imageSourceDark = messageSent
      ? imageSources.darkOpen
      : imageSources.dark;

    const updateEnvelopeSrc = (e: MediaQueryListEvent) => {
      setEnvelopeSrc(e.matches ? imageSourceLight : imageSourceDark);
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setEnvelopeSrc(
      darkModeMediaQuery.matches ? imageSourceDark : imageSourceLight
    );
    darkModeMediaQuery.addEventListener("change", updateEnvelopeSrc);

    return () => {
      darkModeMediaQuery.removeEventListener("change", updateEnvelopeSrc);
    };
  }, [messageSent]);

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        const response = await fetch("/api/route", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, email, message }),
        });
        const data = await response.json();
        if (data.success) {
          setIsVerified(true);
        } else {
          setIsVerified(false);
          setError(true);
        }
      }
    } catch (e) {
      console.log("Error sending email:", e);
      setIsVerified(false);
      setError(true);
    }
    setMessageSent(true);
  }

  const handleSubmitForm = async (email: string, message: string) => {
    setFormIsValid(true);
    setEmail(email);
    setMessage(message);
  };

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  const handleDescription = () => {
    if (error) return quickContactDescription.somethingWentWrongDescription;
    if (formIsValid && !isVerified)
      return quickContactDescription.reCaptchaDescription;
    if (formIsValid && isVerified)
      return quickContactDescription.thankYouDescription;
    return quickContactDescription.defaultDescription;
  };

  return (
    <div className="max-w-[512px] w-full pb-16 flex-col justify-start items-end inline-flex lg:text-start relative">
      <Image
        className={classNames({
          [envelopeStyle]: true,
          [envelopeStyleSent]: messageSent,
        })}
        alt="envelope"
        src={envelopeSrc}
        width={envelopeSrc.width}
        height={envelopeSrc.height}
      />
      <div
        className={classNames(
          cardStyle,
          "self-stretch px-3 lg:px-9 py-8 rounded-2xl flex-col justify-center lg:justify-start items-center flex"
        )}
      >
        <h3 className={headerTextStyle}>Quick contact</h3>
        <p className={classNames("w-full", descriptionTextStyle)}>
          {handleDescription()}
        </p>
        <div className={formContainerStyle}>
          {error ? (
            <QuickContactError />
          ) : formIsValid && !isVerified ? (
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ""}
              ref={recaptchaRef}
              onChange={handleChange}
              onExpired={handleExpired}
            />
          ) : formIsValid && isVerified ? (
            <QuickContactSuccess email={email} />
          ) : (
            <QuickContactForm handleSubmitForm={handleSubmitForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickContact;
