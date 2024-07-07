import React from "react";
import ClothingHandling from "@/components/ClothingHandling";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

interface BrandPageProps {
  brand: string;
  images: string[];
  materialText: string;
  handlingText: string[];
  fittingText: string;
  description: string;
  logoUrl: string;
}

const BrandPage: React.FC<BrandPageProps> = ({ brand, images, materialText, handlingText, fittingText, description, logoUrl }) => {
  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col text-center items-center">
          <img
            src={logoUrl}
            alt={`${brand}-logo`}
            className="w-full sm:w-1/2 mt-10"
          />
          <p className="text-center mt-10 text-md md:text-lg lg:text-xl">
            {description}
          </p>
          <h2 className="mt-10 font-bold !leading-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl">
            Some of the {brand} clothing:
          </h2>
        </div>
        <ImageSlider images={images} />
        <ClothingHandling handlingText={handlingText} fittingText={fittingText} materialText={materialText} />
      </MaxWidthWrapper>
    </section>
  );
};

export default BrandPage;
