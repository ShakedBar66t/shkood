"use client";
import React, { useRef, useState, useEffect } from "react";
import { Icons } from "./Icons";
import emailjs from "@emailjs/browser";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import OtpInput from "otp-input-react";
import { Loader2 } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config"; // Adjust the import path as needed
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const ContactForm: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [ph, setPh] = useState<string>("");
  const [showOTP, setShowOTP] = useState<boolean>(false);
  const [otpVerified, setOtpVerified] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  const [isUserNameValid, setIsUserNameValid] = useState<boolean>(true);
  const [isUserEmailValid, setIsUserEmailValid] = useState<boolean>(true);
  const [isUserMessageValid, setIsUserMessageValid] = useState<boolean>(true);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);

  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response: any) => {
            console.log("reCAPTCHA solved");
          },
          "expired-callback": () => {
            console.log("reCAPTCHA expired");
          },
        }
      );

      window.recaptchaVerifier.render().then((widgetId: any) => {
        window.recaptchaWidgetId = widgetId;
      });
    }
  }, []);

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
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const verifyPhoneNumber = () => {
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    const phoneNumber = `+${ph}`;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOTP(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error during signInWithPhoneNumber", error);
        setLoading(false);
      });
  };

  const verifyOTP = () => {
    setLoading(true);
    if (otp) {
      window.confirmationResult
        .confirm(otp)
        .then((result: any) => {
          setUser(result.user);
          setOtpVerified(true);
          setLoading(false);
        })
        .catch((error: any) => {
          console.error("Error confirming OTP", error);
          setLoading(false);
        });
    }
  };

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
                  <p className="text-white mt-2 text-sm">* required field</p>
                )}
              </div>
              <div id="recaptcha-container"></div>
              {showOTP && !otpVerified && (
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autofocus
                  className="mx-auto "
                />
              )}
              {otpVerified ? (
                <button
                  type="submit"
                  className={buttonVariants({
                    size: "lg",
                    className: "mx-auto border",
                  })}
                >
                  Send Message
                </button>
              ) : showOTP ? (
                <button
                  type="button"
                  onClick={verifyOTP}
                  className={buttonVariants({
                    size: "lg",
                    className: "mx-auto border",
                  })}
                >
                  Verify OTP
                  {loading && <Loader2 className="animate-spin m-2" />}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={verifyPhoneNumber}
                  className={buttonVariants({
                    size: "lg",
                    className: "mx-auto border",
                  })}
                >
                  Send a Code
                  {loading && <Loader2 className="animate-spin m-2" />}
                </button>
              )}
            </form>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default ContactForm;
