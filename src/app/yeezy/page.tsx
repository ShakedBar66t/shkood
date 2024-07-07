import React from "react";
import BrandPage from "@/components/BrandPage";

const Yeezy: React.FC = () => {
  const images = [
    "yeezy-clothing/yeezy-shoes-1.png",
    "yeezy-clothing/yeezy-hat.png",
    "yeezy-clothing/yeezy-shoes-2.png",
    "yeezy-clothing/yeezy-shoes-3.png",
    "yeezy-clothing/yeezy-foam-runners.png",
    "yeezy-clothing/yeezy-hoodie.png",
    "yeezy-clothing/yeezy-shoes-2.png",
    "yeezy-clothing/yeezy-pants.png",
    "yeezy-clothing/yeezy-slides.png",
    "yeezy-clothing/yeezy-t.png",
    "yeezy-clothing/yeezy-shoes-1.png",
    "yeezy-clothing/yeezy-pants.png",
    "yeezy-clothing/yeezy-hat.png",
    "yeezy-clothing/yeezy-shoes-3.png",
    "yeezy-clothing/yeezy-t.png",
  ];

  const materialText = "The brand places high importance on sustainability and quality products; hence, they utilize premium fabrics such as French terry cotton and nylon blends for jackets and outerwear, along with other innovative textiles to ensure durability and comfort throughout the ownership experience.";
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText = "Go half a size up for Yeezy sneakers: Yeezy sneakers generally run slightly small, so it's often recommended to choose a size that is half a size larger than your true size.";
  const description = "Adidas Yeezy 'or just Yeezy' was a fashion collaboration between American rapper, designer, and entrepreneur Kayne West's Yeezy and German sportswear company Adidas. It offered sneakers in limited edition colorways, as well as shirts, jackets, track pants, socks, slides, lingerie and slippers. Yeezy influenced and inspired a multitude of other fashion brands.";
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
