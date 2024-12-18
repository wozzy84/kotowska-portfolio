import React, { useState } from "react";
import classNames from "classnames";
import QuickContactStyle from "./QuickContactStyle.module.css";
import Button from "./Button";
import ErrorChip from "./ErrorChip";
import ContactIcon from "/public/svgs/contact.svg";
import CheckIcon from "/public/svgs/check_24.svg";
import ErrorIcon from "/public/svgs/close.svg";

const {
  cardStyle,
  headerTextStyle,
  descriptionTextStyle,
  inputsStyle,
  error,
  valid,
  submitButton,
  emailInputContainer,
  contactIconStyle,
  checkIconStyle,
  errorIconStyle,
} = QuickContactStyle;

const QuickContact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    setHasSubmitted(true);
    let hasError = false;

    if (!email || !validateEmail(email)) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (!message) {
      setMessageError(true);
      hasError = true;
    } else {
      setMessageError(false);
    }

    if (!hasError) {
      console.log("send");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (hasSubmitted) {
      setEmailError(!validateEmail(e.target.value));
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (hasSubmitted) {
      setMessageError(!e.target.value);
    }
  };

  const handleEmailBlur = () => {
    if (email?.length === 0) return;
    setHasSubmitted(true);
    setEmailError(!validateEmail(email));
  };

  return (
    <div className="max-w-[512px] pb-16 flex-col justify-start items-end inline-flex text-start">
      <div
        className={classNames(
          cardStyle,
          "self-stretch px-9 py-8 rounded-2xl flex-col justify-start items-center flex"
        )}
      >
        <h3 className={headerTextStyle}>Quick contact</h3>
        <p className={descriptionTextStyle}>
          You can also drop me a line and I promise to get back to you ASAP
        </p>
        <div
          className={classNames(inputsStyle, emailInputContainer, "w-full", {
            [error]: emailError,
            [valid]: hasSubmitted && !emailError,
          })}
        >
          <input
            type="email"
            placeholder=" "
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            className="w-full h-12 px-4"
          />
          <label>Contact email</label>
          {!hasSubmitted && (
            <ContactIcon height={24} width={24} className={contactIconStyle} />
          )}
          {hasSubmitted && !emailError && (
            <CheckIcon height={24} width={24} className={checkIconStyle} />
          )}
          {hasSubmitted && emailError && (
            <ErrorIcon height={24} width={24} className={errorIconStyle} />
          )}
          {emailError && (
            <ErrorChip message="Doesn’t look like a valid email address"></ErrorChip>
          )}
        </div>
        <div
          className={classNames(inputsStyle, "w-full", {
            [error]: messageError,
            [valid]: hasSubmitted && !messageError,
          })}
        >
          <textarea
            placeholder=" "
            value={message}
            onChange={handleMessageChange}
            className="w-full h-24 px-4 bg-[#f2f5f7] rounded-lg"
          />
          <label>Message</label>
          {messageError && (
            <ErrorChip message="Doesn’t look like a valid message"></ErrorChip>
          )}
        </div>
        <Button
          label="Send"
          className={submitButton}
          solid
          block
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default QuickContact;
