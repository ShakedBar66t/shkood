import React from "react";
import BrandPage from "@/components/BrandPage";
import { useTranslations } from "next-intl";

const Yeezy: React.FC = () => {
  const t = useTranslations();
  const images = [
    "../yeezy-clothing/yeezy-shoes-1.png",
    "../yeezy-clothing/yeezy-hat.png",
    "../yeezy-clothing/yeezy-shoes-2.png",
    "../yeezy-clothing/yeezy-shoes-3.png",
    "../yeezy-clothing/yeezy-foam-runners.png",
    "../yeezy-clothing/yeezy-hoodie.png",
    "../yeezy-clothing/yeezy-shoes-2.png",
    "../yeezy-clothing/yeezy-pants.png",
    "../yeezy-clothing/yeezy-slides.png",
    "../yeezy-clothing/yeezy-t.png",
    "../yeezy-clothing/yeezy-shoes-1.png",
    "../yeezy-clothing/yeezy-pants.png",
    "../yeezy-clothing/yeezy-hat.png",
    "../yeezy-clothing/yeezy-shoes-3.png",
    "../yeezy-clothing/yeezy-t.png",
  ];

  const materialText = t("yeezy-material")
  const handlingText = [
    t("clothing-handling.part1"),
    t("clothing-handling.part2"),
    t("clothing-handling.part3"),
    t("clothing-handling.part4"),
    t("clothing-handling.part5"),
  ];
  const fittingText = t("yeezy-fitting");
  const description = t("yeezy-description");
  const logoUrl = "/testimonials/yeezy-logo.png";

  return (
    <BrandPage
      brand="yeezy"
      images={images}
      materialText={materialText}
      handlingText={handlingText}
      fittingText={fittingText}
      description={description}
      logoUrl={logoUrl}
    />
  );
};

export default Yeezy;
