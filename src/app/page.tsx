import ContactForm from "@/components/ContactForm";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg: gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-5 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="aboslute w-28 left-0 -top-20 hidden lg:block">
                <img src="/logo.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Wardrobe on a{" "}
                <span className="bg-green-600 px-2 text-white">Different</span>{" "}
                Level
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Transform your wardrobe with personalized styling that{" "}
                <span className="font-semibold">enchances</span> your comfort,
                appearance, and confidence.
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Complete Wardrobe Refresh
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Feel Comfortable & Confident Always
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Personalized Styling Advice
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
                    <span className="font-semibold">1,250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fil">
            <div className="relative md:max-w-xl rounded-lg">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                alt=""
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt=""
              />
              <Phone
                className="w-64"
                mediaSrc="/testimonials/elon-unboxing.mp4"
                isVideo
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:6xl text-gray-900">
              What our{" "}
              <span className="relative px-2">
                customers{" "}
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              say
            </h2>
            <img src="logo-2.png" className="w-24 order-0 lg:order-2" />
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
                  "I had an amazing experience working with Shko
                  <span className="text-green-600">od!</span> He completely
                  transformed my wardrobe, and now{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    I feel more comfortable
                  </span>{" "}
                  and stylish."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/models/model-1.jpeg"
                  alt="model"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Elon</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Customer</p>
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
                  "Working with Shko
                  <span className="text-green-600">od!</span> was the best
                  decision for my style. He made the whole experience fun and
                  stress-free, and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    I love my new look
                  </span>
                  ."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/models/model-3.jpeg"
                  alt="model"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Tamar</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:6xl text-gray-900">
                What{" "}
                <span className="relative px-2 bg-green-600 text-white">
                  brands
                </span>{" "}
                do you like?
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-6 lg:px-8 md:gap-6 md:items-center md:flex-col">
            <div className="relative flex flex-col items-center w-full">
              <div className="w-full mt-10">
                <img
                  src="fucking-awesome-arrow.png"
                  className="w-60 h-60 sticky"
                />
                <img
                  src="FA-PANTS-REMOVED.png"
                  className="mx-auto w-50 h-50 md:w-80"
                />
                <img src="plus-sign.png" className="rotate-[10deg] mx-auto" />
              </div>
              <div className="w-full md:flex md:flex-col items-end">
                <img
                  src="solomon-arrow.png"
                  className="w-60 h-60 float-end mt-10 -mb-24"
                />
                <img
                  src="solomon-shoe.webp"
                  className="mx-auto w-50 h-50 md:w-80"
                />
              </div>
              <div className="w-full md:flex md:flex-col">
                <img src="plus-sign.png" className="rotate-[10deg] mx-auto" />
                <img
                  src="boston-jersey-arrow.png"
                  className="sticky w-60 h-60 mt-10"
                />
              </div>
              <img src="BOSTON-JERSEY-REMOVED.png" className="w-80" />
            </div>
            <img src="arrow.png" className="w-20 h-30 mx-auto mb-10" />
            <div className="flex flex-col mx-auto">
              <img src="models/guy-natan.jpeg" className="w-96 mx-auto" />
              <div className="flex gap-1.5 items-center text-zinc-600 mx-auto">
                    <Check className="h-10 w-10 stroke-[3px] text-green-600" />
                    <img src="happy-customer.png" className="w-96"/>
                  </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <ContactForm />
    </div>
  );
}
