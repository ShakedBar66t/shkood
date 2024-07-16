import React from "react";
import BrandPage from "@/components/BrandPage";
import { useTranslations } from "next-intl";

const Bape: React.FC = () => {
  const t = useTranslations();
  const images = [
    '../bape-clothing/bape-t-2.png',
    '../bape-clothing/bape-shorts-1.png',
    '../bape-clothing/bape-t-1.png',
    '../bape-clothing/bape-t-2.png',
    '../bape-clothing/bape-cap.png',
    '../bape-clothing/bape-t-3.png',
    '../bape-clothing/bape-shorts-1.png',
    '../bape-clothing/bape-kicks.png',
    '../bape-clothing/bape-t-3.png',
    '../bape-clothing/bape-cap.png',
    '../bape-clothing/bape-shorts-1.png',
    '../bape-clothing/bape-t-3.png',
    '../bape-clothing/bape-jean-jacket.png',
    '../bape-clothing/bape-cap.png',
    '../bape-clothing/bape-hoodie.png',
  ];


  const materialText = t("bape-material");
  const handlingText = [
    t("clothing-handling.part1"),
    t("clothing-handling.part2"),
    t("clothing-handling.part3"),
    t("clothing-handling.part4"),
    t("clothing-handling.part5"),
  ];
  const fittingText = t("bape-fitting");
  const description = t("bape-description");
  const logoUrl = "/bape-clothing/BAPE-Symbol.png";

  return (
    <BrandPage
      brand="bape"
      images={images}
      materialText={materialText}
      handlingText={handlingText}
      fittingText={fittingText}
      description={description}
      logoUrl={logoUrl}
    />
  );
};

export default Bape;
