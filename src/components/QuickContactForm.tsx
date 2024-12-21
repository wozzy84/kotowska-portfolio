import React, { useState } from "react";
import classNames from "classnames";
import QuickContactStyle from "./QuickContactStyle.module.css";
import Button from "./Button";
import ErrorChip from "./ErrorChip";
import ContactIcon from "/public/svgs/contact.svg";
import CheckIcon from "/public/svgs/check_24.svg";
import ErrorIcon from "/public/svgs/close.svg";

const {
  inputsStyle,
  error,
  valid,
  emailInputContainer,
  contactIconStyle,
  checkIconStyle,
  errorIconStyle,
  submitButton,
} = QuickContactStyle;

interface QuickContactFormProps {
  handleSubmitForm: (email: string, message: string) => void;
}

const QuickContactForm: React.FC<QuickContactFormProps> = ({
  handleSubmitForm,
}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      handleSubmitForm(email, message);
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
    <form onSubmit={handleSubmit} className="w-full relative">
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
          [valid]: hasSubmitted && !emailError,
        })}
      >
        <textarea
          placeholder=" "
          value={message}
          onChange={handleMessageChange}
          className="w-full h-24 px-4 rounded-lg"
        />
        <label>Message</label>
        {messageError && (
          <ErrorChip message="Please enter a message"></ErrorChip>
        )}
      </div>
      <Button
        label="Send"
        className={submitButton}
        solid
        block
        type="submit"
        name="submit-quick-contact"
        onClick={() => {}}
      />
    </form>
  );
};

export default QuickContactForm;
