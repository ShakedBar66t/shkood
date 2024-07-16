import React from "react";
import BrandPage from "@/components/BrandPage";
import { useTranslations } from "next-intl";

const Uniqlo: React.FC = () => {
  const t = useTranslations();
  const images = [
    "../uniqlo-clothing/uniqlo-t.png",
    "../uniqlo-clothing/uniqlo-cross-bag.png",
    "../uniqlo-clothing/uniqlo-jeans.png",
    "../uniqlo-clothing/uniqlo-pants-brown.png",
    "../uniqlo-clothing/uniqlo-t-white.png",
    "../uniqlo-clothing/uniqlo-t.png",
    "../uniqlo-clothing/uniqlo-joggers.png",
    "../uniqlo-clothing/uniqlo-trousers.png",
    "../uniqlo-clothing/uniqlo-jeans.png",
    "../uniqlo-clothing/uniqlo-cross-bag.png",
    "../uniqlo-clothing/uniqlo-pants-brown.png",
    "../uniqlo-clothing/uniqlo-t-white.png",
  ];

  const materialText = t("uniqlo-material");
  const handlingText = [
    t("clothing-handling.part1"),
    t("clothing-handling.part2"),
    t("clothing-handling.part3"),
    t("clothing-handling.part4"),
    t("clothing-handling.part5"),
  ];
  const fittingText = t("uniqlo-fitting");
  const description = t("uniqlo-description");
  const logoUrl = "/testimonials/uniqlo-logo.png";

  return (
    <BrandPage
      brand="uniqlo"
      images={images}
      materialText={materialText}
      handlingText={handlingText}
      fittingText={fittingText}
      description={description}
      logoUrl={logoUrl}
    />
  );
};

export default Uniqlo;
