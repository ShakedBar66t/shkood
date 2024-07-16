import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="bg-white h-20 mt-auto relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />

        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-md text-muted-foreground p-2">
               {t("rights")} {new Date().getFullYear()} &copy;
            </p>
          </div>
          <div className="flex items-center justify-between"></div>
          <div className="flex items-center justify-center">
            <div className="flex gap-10">
              <div className="transition-transform transform hover:scale-150">
                <Link href="https://www.instagram.com/shk00d">
                  <img src="/ig-logo.webp" alt="Instagram Logo" className="w-6" />
                </Link>
              </div>
              <div className="transition-transform transform hover:scale-150">
                <Link href="https://www.facebook.com/BarsheshetShaked/">
                  <img src="/facebook-logo.png" alt="Facebook Logo" className="w-6 rounded-sm" />
                </Link>
              </div>
              <div className="transition-transform transform hover:scale-150">
                <Link href="https://www.tiktok.com/@shakedbar66t">
                  <img src="/tiktok-logo.png" alt="TikTok Logo" className="w-6 rounded-sm" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
0