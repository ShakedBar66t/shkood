import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import clsx from "clsx";
import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Journey() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <div className={playfair.className}>
      <MaxWidthWrapper>
        <h1 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
          {t("the-journey")} <span className="text-green-600">! </span>
        </h1>
        <section className="w-full">
          <div className="relative mx-auto my-10 max-w-[15rem] md:max-w-[20rem] lg:max-w-[10rem]">
            <img
              src="https://res.cloudinary.com/drld1bejg/image/upload/v1718793735/Shkood%20project/vtnzeilyszxwt9yl8cei.jpg"
              className="w-full"
              alt="guy-ugly"
            />
            <img
              src="https://res.cloudinary.com/drld1bejg/image/upload/v1718793708/Shkood%20project/bjbaklmjmgacsvmvns9c.png"
              className="absolute top-0 left-0 w-full h-full object-cover overflow-visible"
              alt="prohibited"
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            <div>
              <div className="max-w-2xl flex flex-col mx-auto md:flex-row">
                <div>
                  <p className="-mb-2 text-xl">
                    {t("fucking-awesome-pants.part1")}
                    <br />
                    {t("fucking-awesome-pants.part2")} <br />
                    {t("fucking-awesome-pants.part3")}{" "}
                  </p>
                  <img
                    src="https://res.cloudinary.com/drld1bejg/image/upload/v1718793865/Shkood%20project/oxg96wrrobfazht2wwze.png"
                    alt="fa-pants"
                    className="max-w-[200px] pl-20 mx-auto"
                  />
                </div>
                <div className="flex items-end ">
                  <img
                    src="/plus-sign.png"
                    alt=""
                    className="rotate-[10deg] w-12 mx-auto my-10"
                  />
                </div>
                <div className="">
                  <p className="text-xl">{t("boston-jersey.part1")}</p>
                  <ul className="list-disc pl-4">
                    <li>{t("boston-jersey.part2")}</li>
                    <li>{t("boston-jersey.part3")}</li>
                    <li>{t("boston-jersey.part4")}</li>
                  </ul>
                  <img
                    src="https://res.cloudinary.com/drld1bejg/image/upload/v1718793862/Shkood%20project/ttdv31roc7mumvbgxc1x.png"
                    alt="nba-jersey"
                    className="max-w-[200px] pl-20 mx-auto"
                  />
                  <img
                    src="/plus-sign.png"
                    alt=""
                    className="rotate-[10deg] w-12 mx-auto my-10 md:hidden"
                  />
                </div>
              </div>
              <div className="max-w-2xl text-xl mt-10 mx-auto">
                <p>
                  SALOMON XT-6
                  <br />
                  {t("salomon-shoes.part1")}
                  <br />
                  {t("salomon-shoes.part2")}
                </p>
                <div>
                  <img
                    src="https://res.cloudinary.com/drld1bejg/image/upload/v1718793863/Shkood%20project/t7rmdtcoqmqoyo5ocy0n.webp"
                    alt=""
                    className="w-40 mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/equals-sign-2.png"
                alt="equals-sign"
                className="w-16 mx-auto rotate-[90deg] lg:rotate-0"
              />
            </div>
            <div className={clsx("flex flex-col items-center md:mt-20", {
              "mr-10": locale === "he"
            })}>
              <img
                src="https://res.cloudinary.com/drld1bejg/image/upload/v1718794010/Shkood%20project/iiieyoh7dd5znshhq5qz.jpg"
                alt="guy-image"
                className="max-w-xs mx-auto"
              />
              <img
                src="https://res.cloudinary.com/drld1bejg/image/upload/v1718793975/Shkood%20project/zs7vacno2dtz3qyd6q56.png"
                alt="happy-customer"
                className={clsx("mx-auto w-96", {
                  "hidden": locale === "he",
                })}
              />
              <img
                src="/happy-customer-he.png"
                alt="happy-customer-hebrew"
                className={clsx("mx-auto w-56", {
                  "hidden": locale === "en",
                })}
              />
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
