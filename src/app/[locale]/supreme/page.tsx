import React from "react";
import BrandPage from "@/components/BrandPage";
import { useTranslations } from "next-intl";

const Supreme: React.FC = () => {
  const t = useTranslations();
  const images = [
    "../supreme-clothing/supreme-hoodie.png",
    "../supreme-clothing/supreme-bogo.png",
    "../supreme-clothing/supreme-pants.png",
    "../supreme-clothing/supreme-t-1.png",
    "../supreme-clothing/supreme-nike-shoes.png",
    "../supreme-clothing/supreme-t-2.png",
    "../supreme-clothing/supreme-boxers.png",
    "../supreme-clothing/supreme-hoodie.png",
    "../supreme-clothing/supreme-cap.png",
    "../supreme-clothing/supreme-nike-shoes.png",
    "../supreme-clothing/supreme-boxers.png",
    "../supreme-clothing/supreme-cap.png",
  ];

  const materialText = t("supreme-material")
  const handlingText = [
    t("clothing-handling.part1"),
    t("clothing-handling.part2"),
    t("clothing-handling.part3"),
    t("clothing-handling.part4"),
    t("clothing-handling.part5"),
  ];
  const fittingText = t("supreme-fitting");
  const description = t("supreme-description")
  const logoUrl = "/supreme-clothing/supreme-logo.png";

  return (
    <BrandPage
      brand="supreme"
      images={images}
      materialText={materialText}
      handlingText={handlingText}
      fittingText={fittingText}
      description={description}
      logoUrl={logoUrl}
    />
  );
};

export default Supreme;
