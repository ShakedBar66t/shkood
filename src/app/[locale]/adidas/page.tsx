import React from "react";
import BrandPage from "@/components/BrandPage";
import { useTranslations } from "next-intl";

const Adidas: React.FC = () => {
  const t = useTranslations();
  const images = [
    "../adidas-clothing/adidas-korn.png",
    "../adidas-clothing/adidas-forum.webp",
    "../adidas-clothing/adidas-korn-t.png",
    "../adidas-clothing/adidas-women-pants.png",
    "../adidas-clothing/adidas-vintage.webp",
    "../adidas-clothing/adidas-forum.webp",
    "../adidas-clothing/adidas-ivy-cargo.png",
    "../adidas-clothing/adidas-football-t.png",
    "../adidas-clothing/adidas-korn.png",
    "../adidas-clothing/adidas-women-pants.png",
    "../adidas-clothing/adidas-korn-t.png",
    "../adidas-clothing/adidas-samba.png",
    "../adidas-clothing/adidas-football-t.png",
    "../adidas-clothing/adidas-vintage.webp",
    "../adidas-clothing/adidas-ivy-cargo.png",
  ];

  const materialText = t("adidas-material");
  const handlingText = [
    t("clothing-handling.part1"),
    t("clothing-handling.part2"),
    t("clothing-handling.part3"),
    t("clothing-handling.part4"),
    t("clothing-handling.part5"),
  ];
  const fittingText = t("adidas-fitting")
  const description = t("adidas-description")
  const logoUrl = "/adidas-clothing/Adidas-Logo-2.png";

  return (
    <BrandPage
      brand="adidas"
      images={images}
      materialText={materialText}
      handlingText={handlingText}
      fittingText={fittingText}
      description={description}
      logoUrl={logoUrl}
    />
  );
};

export default Adidas;
