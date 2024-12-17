import React, { useState } from "react";
import classNames from "classnames";
import QuickContactStyle from "./QuickContactStyle.module.css";
import Button from "./Button";

const { cardStyle, headerTextStyle, descriptionTextStyle, inputsStyle, error } =
  QuickContactStyle;

const QuickContact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
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
          className={classNames(inputsStyle, "w-full", { [error]: emailError })}
        >
          <input
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4"
          />
          <label>Contact email</label>
          {emailError && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a valid email address.
            </p>
          )}
        </div>
        <div
          className={classNames(inputsStyle, "w-full", {
            [error]: messageError,
          })}
        >
          <textarea
            placeholder=" "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-24 px-4 bg-[#f2f5f7] rounded-lg"
          />
          <label>Message</label>
          {messageError && (
            <p className="text-red-500 text-sm mt-1">Please enter a message.</p>
          )}
        </div>
        <Button label="Send" solid block onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default QuickContact;
