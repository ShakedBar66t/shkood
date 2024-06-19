"use client";
import React, { useRef, useState } from "react";
import { Icons } from "./Icons";
import emailjs from "@emailjs/browser";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  const [ph, setPh] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const [isUserNameValid, setIsUserNameValid] = useState<boolean>(true);
  const [isUserEmailValid, setIsUserEmailValid] = useState<boolean>(true);
  const [isUserMessageValid, setIsUserMessageValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);

  const form = useRef<HTMLFormElement>(null);

  const isFormValid = () => {
    let valid = true;
    if (form.current) {
      const formData = new FormData(form.current);
      const userName = formData.get("user_name") as string;
      const userEmail = formData.get("user_email") as string;
      const userMessage = formData.get("user_message") as string;

      setIsUserNameValid(!!userName);
      setIsUserEmailValid(!!userEmail);
      setIsUserMessageValid(!!userMessage);
      setIsPhoneValid(!!ph);

      valid = !!userName && !!userEmail && !!userMessage && !!ph;
    }
    return valid;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_bk6m5w1", "template_teb6knj", form.current, {
          publicKey: "sgeZZNZEMAyDZ2b7p",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setUser(true);
            setPh("");
            if (form.current) {
              form.current.reset();
            }
            setFormSubmitted(true); // Set formSubmitted to true after successful submission
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <>
      <section id="contact" className="w-full h-full mx-auto pb-10">
        <MaxWidthWrapper>
          <div className="container mx-auto">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              <span className="relative inline-block px-2">
                Contact{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute left-0 w-full -bottom-6 text-green-500" />
              </span>{" "}
              us
            </h2>
            {!formSubmitted ? (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4 mt-10 bg-green-600 p-10 mx-auto rounded-xl max-w-[380px] my-2"
              >
                <Input
                  type="text"
                  placeholder="Full Name"
                  name="user_name"
                  className={`bg-white ${
                    !isUserNameValid ? "border-red-500" : ""
                  }`}
                  required
                />
                {!isUserNameValid && (
                  <p className="text-white -mt-3 text-sm">* required field</p>
                )}
                <Input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  className={`bg-white ${
                    !isUserEmailValid ? "border-red-500" : ""
                  }`}
                  required
                />
                {!isUserEmailValid && (
                  <p className="text-white -mt-3 text-sm">* required field</p>
                )}
                <Textarea
                  placeholder="Any Questions?"
                  name="user_message"
                  className={`bg-white ${
                    !isUserMessageValid ? "border-red-500" : ""
                  }`}
                  required
                />
                {!isUserMessageValid && (
                  <p className="text-white -mt-3 text-sm">* required field</p>
                )}
                <div className="relative">
                  <PhoneInput
                    country={"il"}
                    value={ph}
                    onChange={setPh}
                    inputProps={{
                      name: "user_phone",
                      required: true,
                    }}
                    inputStyle={{
                      background: "white",
                      width: "100%",
                    }}
                    containerClass="relative w-full"
                  />
                  {!isPhoneValid && (
                    <p className="text-white mt-3 text-sm">* required field</p>
                  )}
                </div>
                <button
                  type="submit"
                  className={buttonVariants({
                    size: "lg",
                    className: "mx-auto border",
                  })}
                  onClick={isFormValid}
                >
                  Send Message
                </button>
              </form>
            ) : (
              <h2 className="text-center text-3xl font-bold mt-10">
                Thank you! Your message has been 
                <span className="text-green-600"> successfully </span>
                 sent.
              </h2>
            )}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default ContactForm;
