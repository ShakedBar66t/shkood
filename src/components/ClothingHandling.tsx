import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

interface ClothingHandlingProps {
  handlingText: string[];
  materialText: string;
  fittingText: string;
}

const isHebrew = (locale: string) => locale === "he";

const ClothingHandling: React.FC<ClothingHandlingProps> = ({
  handlingText,
  materialText,
  fittingText,
}) => {
  const t = useTranslations();
  const locale = useLocale();
  const textDirection = isHebrew(locale) ? "rtl" : "ltr";
  return (
    <div className="p-4 mt-10">
      <div className="rounded-lg">
        <div className="flex flex-col text-center mx-auto justify-between md:flex-row px-4 gap-4">
          <div className="flex flex-col mb-4 md:mb-0 w-full max-w-md mx-auto">
            <div className="text-white text-xl mt-4 md:mt-10 p-5 mx-auto rounded-lg border border-black w-full bg-green-600">
              {t("material")}
            </div>
            <div className="text-black text-md mt-2 bg-white p-4 rounded-lg">
              <div className="text-center" style={{ direction: textDirection }}>
                {materialText}
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-4 md:mb-0 w-full max-w-md mx-auto">
            <div className="text-white text-xl mt-4 md:mt-10 p-5 mx-auto rounded-lg border border-black w-full bg-green-600">
              {t("handling")}
            </div>
            <div className="text-black text-md bg-white p-4 rounded-lg">
              <div
                className={clsx("font-bold text-xs", {
                  "text-left": locale === "en",
                  "text-right": locale === "he",
                })}
                style={{ direction: textDirection }}
              >
                * {t("recommendation")}
              </div>
              <ul
                className={clsx("list-disc list-inside mt-2", {
                  "text-left": locale === "en",
                  "text-right": locale === "he",
                })}
                style={{ direction: textDirection }}
              >
                {handlingText.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col mb-4 md:mb-0 w-full max-w-md mx-auto">
            <div className="text-white text-xl mt-4 md:mt-10 p-5 mx-auto rounded-lg border border-black w-full bg-green-600">
              {t("fitting")}
            </div>
            <div className="text-black text-md bg-white p-4 rounded-lg">
              <div
                className={clsx("font-bold text-xs", {
                  "text-left": locale === "en",
                  "text-right": locale === "he",
                })}
                style={{ direction: textDirection }}
              >
                * {t("recommendation")}
              </div>
              <div className="text-center mt-2" style={{ direction: textDirection }}>
                {fittingText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingHandling;
