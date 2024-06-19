import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";
import { Playfair_Display } from "@next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Journey() {
  return (
    <div className={playfair.className}>
      <MaxWidthWrapper>
        <h1 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
          The{" "}
          <span className="relative px-2">
            Jour<span className="text-green-600">ney! </span>
            <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
          </span>
        </h1>
        <section className="w-full">
          <div className="relative mx-auto my-10 max-w-[15rem] md:max-w-[10rem] lg:max-w-[15rem]">
            <img src="/guy-ugly.jpeg" className="w-full" alt="guy-ugly" />
            <img
              src="/prohibited.png"
              className="absolute top-0 left-0 w-full h-full object-cover overflow-visible"
              alt="prohibited"
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            <div>
              <div className="max-w-2xl flex flex-col mx-auto md:flex-row">
                <div>
                  <p className="-mb-2 mt-10 text-xl">
                    Fucking Awesome PBS Cargo Pants
                    <br />
                    Baggy fit with logo embroidery on the back left pocket.
                    <br />
                    100% cotton
                  </p>
                  <img
                    src="FA-PANTS-REMOVED.png"
                    alt="fa-pants"
                    className="max-w-[200px] pl-20"
                  />
                </div>
                <div className="flex items-end ">
                  <img
                    src="plus-sign.png"
                    alt=""
                    className="rotate-[10deg] w-12 mx-auto"
                  />
                </div>
                <div className="mt-10">
                  <p className="text-xl">Boston Celtics NBA Jersey</p>
                  <ul className="list-disc pl-4">
                    <li>NIKE Dri-Fit technology</li>
                    <li>Breathable mesh</li>
                    <li>100% Polyester</li>
                  </ul>
                  <img
                    src="BOSTON-JERSEY-REMOVED.png"
                    alt="nba-jersey"
                    className="max-w-[200px] pl-20"
                  />
                  <img
                    src="plus-sign.png"
                    alt=""
                    className="rotate-[10deg] w-12 mx-auto mt-10 md:hidden"
                  />
                </div>
              </div>
              <div className="max-w-3xl text-xl mt-10">
                <p>
                  SALOMON XT-6
                  <br />
                  Weight: 365G
                  <br />
                  Rubber outsole and Synthetic/Textile Upper
                </p>
                <div>
                  <img
                    src="solomon-shoe.webp"
                    alt=""
                    className="w-40 mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="equals-sign-2.png"
                alt="equals-sign"
                className="w-16 mx-auto rotate-[90deg] lg:rotate-0"
              />
            </div>
            <div className="flex flex-col items-center md:mt-20">
              <img
                src="/models/guy-natan.jpeg"
                alt="guy-image"
                className="max-w-xs mx-auto"
              />
              <img 
              src="happy-customer.png"
              alt="happy-customer"
              className="mx-auto w-96"/>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
