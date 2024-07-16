"use client";
import { GetServerSideProps } from "next";
import ContactForm from "@/components/ContactForm";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { Check, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { getLocaleFromPath } from "@/utils/locale";

export default function Home() {
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    document.documentElement.dir = locale === "he" ? "rtl" : "ltr";
  }, [locale]);

  function useLocale() {
    const [locale, setLocale] = useState("en");

    useEffect(() => {
      if (typeof window !== "undefined") {
        const pathname = window.location.pathname;
        const pathLocale = pathname.split("/")[1];
        setLocale(pathLocale || "en");
      }
    }, []);

    return locale;
  }



  return (
    <div className="bg-slate-50">
      <section id="/">
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg: gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-5 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className={clsx("absolute w-28  -top-20", {
                "lg:left-0": locale === "en",
                "lg:right-0": locale === "he"
              })}>
                <img src="/logo.png" className="w-full my-10" alt="logo" />
              </div>
              <h1
                className={clsx(
                  "relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl lg:text-6xl",
                  {
                    "lg:text-left": locale === "en",
                    "lg:text-right": locale === "he",
                  }
                )}
              >
                {t("heading.part1")}{" "}
                <span className="bg-green-600 px-2 text-white">
                  {t("heading.part2")}
                </span>{" "}
                {t("heading.part3")}
              </h1>
              <p className={clsx("mt-8 text-lg max-w-prose text-center text-balance md:text-wrap", {
                "pr-10 text-center lg:text-left": locale === "en",
                "pl-10 text-center lg:text-right": locale === "he"
              })}>
                {t("opening-paragraph.part1")}{" "}
                <span className="font-semibold">
                  {t("opening-paragraph.part2")}
                </span>{" "}
                {t("opening-paragraph.part3")}
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    {t("check1")}{" "}
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    {t("check2")}{" "}
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    {t("check3")}{" "}
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/models/model-1.jpeg"
                    alt="model image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/models/model-2.jpeg"
                    alt="model image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/models/model-3.jpeg"
                    alt="model image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/models/model-4.jpeg"
                    alt="model image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/models/model-5.jpeg"
                    alt="model image"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1,250</span>{" "}
                    {t("happy-customers")}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fil">
            <div className="relative md:max-w-xl rounded-lg">
              <img
                src="/your-image.png"
                className={clsx("absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block", {
                  "sm:hidden xl:hidden": locale === "he"
                })}
                alt="your image"
              />
              <img
                src="/new-clothes-he.png"
                className={clsx("absolute lg:w-52 right-48 -top-20 select-none hidden sm:block lg:hidden xl:block", {
                  "sm:hidden xl:hidden": locale === "en"
                })}
                alt="your image"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt="line"
              />
              <Phone
                className="w-64"
                mediaSrc="https://res.cloudinary.com/drld1bejg/video/upload/f_auto:video,q_auto/v1/Shkood%20project/ce63zlvyvhmttzzityo8"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition */}
      <section id="reviews" className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              {t("customers-say.part1")}{" "}
              <span className="relative inline-block px-2">
                {t("customers-say.part2")}{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute left-0 w-full -bottom-6 text-green-500" />
              </span>{" "}
              {t("customers-say.part3")}?
            </h2>
            <img
              src="logo-2.png"
              className="w-24 order-0 lg:order-2"
              alt="logo 2"
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;{t("elon-review.part1")}{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    {t("elon-review.part2")}
                  </span>{" "}
                  {t("elon-review.part3")}&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/models/model-1.jpeg"
                  alt="model"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">{t("elon")}</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">{t("verified-customer")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;{t("tamar-review.part1")}{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    {t("tamar-review.part2")}
                  </span>
                  .&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/models/model-3.jpeg"
                  alt="model"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">{t("tamar")}</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">{t("verified-customer")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="gallery">
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:6xl text-gray-900">
                {t("what-brands.part1")}{" "}
                <span className="relative px-2 bg-green-600 text-white">
                  {t("what-brands.part2")}
                </span>{" "}
                {t("what-brands.part3")}
              </h2>
            </div>
          </div>
          <div className="pt-2">
            <Reviews locale={locale} />
          </div>
        </MaxWidthWrapper>
      </section>
      <ContactForm />
    </div>
  );
}
