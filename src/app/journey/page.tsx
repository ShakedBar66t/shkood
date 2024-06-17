import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";

export default function Journey() {
  return (
    <div>
      <MaxWidthWrapper>
        <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
          The{" "}
          <span className="relative px-2">
            Jour<span className="text-green-600">ney!{" "}</span>
            <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
          </span>
        </h2>
        <img
          src="/models/guy-dont.png"
          className="mx-auto mt-10 w-full max-w-xs"
          alt="Guy Don't"
        />
        <img
          src="/models/journey.png"
          className="mx-auto mt-10 w-full max-w-xs hidden sm:hidden md:block md:max-w-4xl lg:max-w-7xl"
          alt="Journey"
        />
        <img
          src="/models/journey-mobile.png"
          className="mx-auto mt-10 w-full max-w-xs sm:block md:hidden"
          alt="Journey"
        />
      </MaxWidthWrapper>
    </div>
  );
}
