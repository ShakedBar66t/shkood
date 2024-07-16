import React from "react";
import BrandPage from "@/components/BrandPage";
import { useTranslations } from "next-intl";

const Balenciaga: React.FC = () => {
  const t = useTranslations();
  const images = [
    "../balenciaga-clothing/balenciaga-slides.png",
    "../balenciaga-clothing/balenciaga-tank-top.png",
    "../balenciaga-clothing/balenciaga-trainers.png",
    "../balenciaga-clothing/balenciaga-t-2.png",
    "../balenciaga-clothing/balenciaga-hoodie.png",
    "../balenciaga-clothing/balenciaga-slides.png",
    "../balenciaga-clothing/balenciaga-jeans.png",
    "../balenciaga-clothing/balenciaga-tank-top.png",
    "../balenciaga-clothing/balenciaga-boots.png",
    "../balenciaga-clothing/balenciaga-hoodie.png",
    "../balenciaga-clothing/balenciaga-slides.png",
    "../balenciaga-clothing/balenciaga-tank-top.png",
    "../balenciaga-clothing/balenciaga-trainers.png",
    "../balenciaga-clothing/balenciaga-t-2.png",
  ];

  const materialText = t("balenciaga-material");
  const handlingText = [
    t("clothing-handling.part1"),
    t("clothing-handling.part2"),
    t("clothing-handling.part3"),
    t("clothing-handling.part4"),
    t("clothing-handling.part5"),
  ];
  const fittingText =
    t("balenciaga-fitting");
  const description =
    t("balenciaga-description");
  const logoUrl = "/balenciaga-clothing/balenciaga-logo.png";

  return (
    <BrandPage
      brand="balenciaga"
      images={images}
      materialText={materialText}
      handlingText={handlingText}
      fittingText={fittingText}
      description={description}
      logoUrl={logoUrl}
    />
  );
};

export default Balenciaga;
