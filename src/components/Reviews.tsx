"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Phone from "./Phone";
import clsx from "clsx";

// Define the available phone logos
const BRANDS = [
  "testimonials/carhartt-logo.png",
  "testimonials/adidas-logo.png",
  "testimonials/nike-logo.png",
  "testimonials/yeezy-logo.png",
  "testimonials/balenciaga-logo.png",
  "testimonials/supreme-logo.png",
  "testimonials/BAPE-Logo.png",
  "testimonials/nike-logo.png",
  "testimonials/uniqlo-logo.png",
];

// Function to split an array into a specified number of parts
function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

// Component for displaying a column of reviews
function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
  locale,
}: {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
  locale: string; // Add locale as a prop
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;
    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });
    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4 mx-auto", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          imgSrc={imgSrc}
          locale={locale}
        />
      ))}
    </div>
  );
}

// Extract brand name from image source
function getBrandFromImgSrc(imgSrc: string): string {
  const parts = imgSrc.split("/");
  const fileName = parts[parts.length - 1];
  return fileName.split("-")[0]; // Extract brand name before '-Logo.png'
}

// Component for displaying a single review
function Review({
  imgSrc,
  className,
  locale,
  ...props
}: { imgSrc: string; locale: string } & HTMLAttributes<HTMLDivElement>) {
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];
  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];
  const brand = getBrandFromImgSrc(imgSrc);
  const href = `/${locale}/${brand.toLowerCase()}`; // Include locale in href

  return (
    <Link href={href}>
      <div
        className={cn(
          "flex items-center justify-center animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5 w-52 h-52 mt-10",
          className
        )}
        style={{ animationDelay }}
        {...props}
      >
        <img src={imgSrc} className="" alt={brand} />
      </div>
    </Link>
  );
}

// Component for displaying the grid of reviews
function ReviewGrid({ locale }: { locale: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(BRANDS, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView ? (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= column1.length + column3[0].length,
                "lg:hidden": reviewIndex >= column1.length,
              })
            }
            msPerPixel={10}
            locale={locale} // Pass locale to ReviewColumn
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
            locale={locale} // Pass locale to ReviewColumn
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden md:block"
            msPerPixel={12}
            locale={locale} // Pass locale to ReviewColumn
          />
        </>
      ) : null}
    </div>
  );
}

// Component for displaying the reviews section
export function Reviews({ locale }: { locale: string }) {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        className={clsx("absolute hidden xl:block select-none -left-32 top-1/3", {
          "xl:hidden": locale === "he",
        })}
        alt="what-are-people-buying"
      />

      <ReviewGrid locale={locale} />
      <img
        aria-hidden="true"
        src="/what-people-are-buying-he.png"
        className={clsx("absolute hidden xl:block select-none w-56 -right-32 top-1/3", {
          "xl:hidden": locale === "en"
        })}
        alt="what-are-people-buying"
      />
    </MaxWidthWrapper>
  );
}
