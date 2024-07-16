import ContactForm from "@/components/ContactForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();
  return (
    <main>
      <section>
        <div className="relative w-full">
          <img
            src="/clothing-rack.jpg"
            alt="Clothing rack full of stylish clothes"
            className="w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-3xl sm:text-5xl">{t("shkood")}!</h1>
            <p className="text-white text-xl sm:text-3xl mt-6">
              {t("wardrobe-level")}
            </p>
          </div>
        </div>
      </section>
      <MaxWidthWrapper>
        <section className="flex flex-col lg:flex-row mt-10 sm:mt-20 gap-10">
          <img
            src="/models/shkood-model.JPG"
            alt="Shaked, the fashion stylist"
            className="w-full max-w-sm mx-auto lg:mx-0"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">{t("hey")}</h2>
            <p className="mt-4 text-base sm:text-lg">
              {t("intro.part1")}
              <span className="text-green-600"> {t("intro.part2")}</span>{" "}
              {t("intro.part3")}
            </p>
            <p className="mt-6 text-base sm:text-lg">{t("intro.part4")}</p>
            <p className="mt-6 text-base sm:text-lg">
              {t("intro.part5")}{" "}
              <span className="text-green-600">{t("intro.part6")}</span>{" "}
              {t("intro.part7")}{" "}
              <span className="text-green-600">{t("intro.part8")}</span>.{" "}
              {t("intro.part9")}
            </p>
          </div>
        </section>
        <div className="border-t border-gray-300 my-10"></div>
        <section className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 mt-20">
          <div className="flex gap-0.5 mb-2">
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
          </div>
          <div className="text-lg leading-8">
            <p>
              &quot;{t("guy-review.part1")}{" "}
              <span className="p-0.5 bg-slate-800 text-white">
                {t("guy-review.part2")}
              </span>{" "}
              {t("guy-review.part3")}&quot;
            </p>
          </div>
          <div className="flex gap-4 mt-2">
            <img
              className="rounded-full h-12 w-12 object-cover"
              src="/models/guy-headshot.jpg"
              alt="Guy, a satisfied customer"
            />
            <div className="flex flex-col">
              <p className="font-semibold">{t("guy")}</p>
              <div className="flex gap-1.5 items-center text-zinc-600">
                <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                <p className="text-sm">{t("verified-customer")}</p>
              </div>
            </div>
          </div>
        </section>
        <div className="border-t border-gray-300 my-10"></div> {/* grey line */}
        <section>
          <ContactForm />
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
