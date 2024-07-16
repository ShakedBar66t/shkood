"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "@/components/Icons";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={`/${locale}/`} className="flex z-40 font-semibold">
            {t("shkood")}<span className="text-green-600">!</span>
          </Link>
          <div className="flex flex-row gap-4">
            <Link href={`/${locale}/journey`}>
              {t("journey")}<span className="text-green-600">!</span>
            </Link>
            <Link href={`/${locale}/about`}>
              {t("about")}<span className="text-green-600">!</span>
            </Link>
            <LanguageSwitcher /> {/* Add the LanguageSwitcher component */}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
