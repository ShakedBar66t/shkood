import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";
import { Playfair_Display } from "next/font/google";

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
          </span>
        </h1>
        <section className="w-full">
          <div className="relative mx-auto my-10 max-w-[15rem] md:max-w-[10rem] lg:max-w-[15rem]">
            <img src="https://res.cloudinary.com/drld1bejg/image/upload/v1718793735/Shkood%20project/vtnzeilyszxwt9yl8cei.jpg" className="w-full" alt="guy-ugly" />
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
                    Fucking Awesome PBS Cargo Pants
                    <br />
                    Baggy fit with logo embroidery on the back left pocket.
                    <br />
                    100% cotton
                  </p>
                  <img
                    src="https://res.cloudinary.com/drld1bejg/image/upload/v1718793865/Shkood%20project/oxg96wrrobfazht2wwze.png"
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
                <div className="">
                  <p className="text-xl">Boston Celtics NBA Jersey</p>
                  <ul className="list-disc pl-4">
                    <li>NIKE Dri-Fit technology</li>
                    <li>Breathable mesh</li>
                    <li>100% Polyester</li>
                  </ul>
                  <img
                    src="https://res.cloudinary.com/drld1bejg/image/upload/v1718793862/Shkood%20project/ttdv31roc7mumvbgxc1x.png"
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
              <div className="max-w-2xl text-xl mt-10 mx-auto">
                <p>
                  SALOMON XT-6
                  <br />
                  Weight: 365G
                  <br />
                  Rubber outsole and Synthetic/Textile Upper
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
                src="equals-sign-2.png"
                alt="equals-sign"
                className="w-16 mx-auto rotate-[90deg] lg:rotate-0"
              />
            </div>
            <div className="flex flex-col items-center md:mt-20">
              <img
                src="https://res.cloudinary.com/drld1bejg/image/upload/v1718794010/Shkood%20project/iiieyoh7dd5znshhq5qz.jpg"
                alt="guy-image"
                className="max-w-xs mx-auto"
              />
              <img 
              src="https://res.cloudinary.com/drld1bejg/image/upload/v1718793975/Shkood%20project/zs7vacno2dtz3qyd6q56.png"
              alt="happy-customer"
              className="mx-auto w-96"/>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
}
