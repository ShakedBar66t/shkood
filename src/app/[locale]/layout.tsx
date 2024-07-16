import { Inter, Playfair_Display, Noto_Sans_Hebrew } from "next/font/google"; // Import Noto Sans Hebrew
import "../globals.css"; // Adjust the path if necessary
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsAppLogo from "@/components/WhatsappLogo"; // Import the new component
import BringThemHome from "@/components/BringThemHome";
import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { getMessages } from "next-intl/server";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({ subsets: ["latin"] });

const notoSansHebrew = Noto_Sans_Hebrew({ // Define Noto Sans Hebrew
  subsets: ["hebrew"],
  weight: ["400", "700"],
});

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  const fontClass = locale === "he" ? notoSansHebrew.className : playfair.className;

  return (
    <html lang={locale} dir={locale === "he" ? "rtl" : "ltr"}>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-2.png" />
      </head>
      <body className={`flex flex-col min-h-screen ${fontClass}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppLogo />
          <BringThemHome />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
