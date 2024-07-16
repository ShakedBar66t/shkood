import React from "react";
import BrandPage from "@/components/BrandPage";
import { useTranslations } from "next-intl";

const Nike: React.FC = () => {
  const t = useTranslations();
  const images = [
    "../nike-clothing/nike-crewneck.png",
    "../nike-clothing/nike-acg-pants.png",
    "../nike-clothing/nike-stussy.png",
    "../nike-clothing/nike-supreme-kicks.webp",
    "../nike-clothing/nike-t.webp",
    "../nike-clothing/nike-crewneck.png",
    "../nike-clothing/nike-supreme-jorts.png",
    "../nike-clothing/nike-sweatpants.png",
    "../nike-clothing/nike-hoodie.webp",
    "../nike-clothing/nike-t.webp",
    "../nike-clothing/nike-acg-pants.png",
    "../nike-clothing/nike-sweatpants.png",
    "../nike-clothing/nike-hoodie.webp",
    "../nike-clothing/nike-supreme-jorts.png",
    "../nike-clothing/nike-supreme-kicks.webp",
    "../nike-clothing/nike-stussy.png",
    "../nike-clothing/nike-silverbullet.webp",
  ];

  const materialText = t("nike-material");
  const handlingText = [
    t("clothing-handling.part1"),
    t("clothing-handling.part2"),
    t("clothing-handling.part3"),
    t("clothing-handling.part4"),
    t("clothing-handling.part5"),
  ];
  const fittingText = t("nike-fitting");
  const description = t("nike-description");
  const logoUrl = "/nike-clothing/nike-logo.png";

  return (
    <BrandPage
      brand="nike"
      images={images}
      materialText={materialText}
      handlingText={handlingText}
      fittingText={fittingText}
      description={description}
      logoUrl={logoUrl}
    />
  );
};

export default Nike;
