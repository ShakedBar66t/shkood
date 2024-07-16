import React from "react";
import BrandPage from "@/components/BrandPage";
import { useTranslations } from "next-intl";

const Carhartt: React.FC = () => {
  const t = useTranslations();
  const images = [
    "../carhartt-clothing/carhartt-pants.png",
    "../carhartt-clothing/carhartt-pink-jacket.png",
    "../carhartt-clothing/carhartt-hoodie.png",
    "../carhartt-clothing/carhartt-t.png",
    "../carhartt-clothing/carhartt-detroit-jacket.png",
    "../carhartt-clothing/carhartt-detroit-jacket-2.webp",
    "../carhartt-clothing/carhartt-pants.png",
    "../carhartt-clothing/carhartt-jeans.png",
    "../carhartt-clothing/carhartt-jacket.png",
    "../carhartt-clothing/carhartt-blue-jacket.png",
    "../carhartt-clothing/carhartt-pink-jacket.png",
    "../carhartt-clothing/carhartt-t.png",
    "../carhartt-clothing/carhartt-grey-jacket.png",
    "../carhartt-clothing/carhartt-detroit-jacket.png",
    "../carhartt-clothing/carhartt-blue-jacket.png",
  ];

  const materialText = t("carhartt-material");
  const handlingText = [
    t("clothing-handling.part1"),
    t("clothing-handling.part2"),
    t("clothing-handling.part3"),
    t("clothing-handling.part4"),
    t("clothing-handling.part5"),
  ];
  const fittingText = t("carhartt-fitting");
  const description = t("carhartt-description");
  const logoUrl = "/carhartt-clothing/carhartt-logo-2.png";

  return (
    <BrandPage
      brand="carhartt"
      images={images}
      materialText={materialText}
      handlingText={handlingText}
      fittingText={fittingText}
      description={description}
      logoUrl={logoUrl}
    />
  );
};

export default Carhartt;
