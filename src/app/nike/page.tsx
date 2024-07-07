import React from "react";
import BrandPage from "@/components/BrandPage";

const Nike: React.FC = () => {
  const images = [
    "nike-clothing/nike-crewneck.png",
    "nike-clothing/nike-acg-pants.png",
    "nike-clothing/nike-stussy.png",
    "nike-clothing/nike-supreme-kicks.webp",
    "nike-clothing/nike-t.webp",
    "nike-clothing/nike-crewneck.png",
    "nike-clothing/nike-supreme-jorts.png",
    "nike-clothing/nike-sweatpants.png",
    "nike-clothing/nike-hoodie.webp",
    "nike-clothing/nike-t.webp",
    "nike-clothing/nike-acg-pants.png",
    "nike-clothing/nike-sweatpants.png",
    "nike-clothing/nike-hoodie.webp",
    "nike-clothing/nike-supreme-jorts.png",
    "nike-clothing/nike-supreme-kicks.webp",
    "nike-clothing/nike-stussy.png",
    "nike-clothing/nike-silverbullet.webp",
  ];

  const materialText = "Nike is renowned for its innovative use of materials in sportswear and lifestyle clothing. Their products often feature advanced fabrics such as Dri-FIT for moisture-wicking and comfort, and Flyknit for lightweight, breathable footwear. For apparel, Nike frequently uses a blend of polyester and cotton to ensure durability, flexibility, and a premium feel.";
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText = "Nike clothing generally fits true to size, offering a tailored yet comfortable feel suitable for athletic activities and casual wear. However, specific items like their performance gear may have a slightly more fitted design to enhance functionality. If you prefer a looser fit, consider sizing up, especially for outerwear and relaxed-fit items.";
  const description = "Nike, Inc. is an American multinational corporation founded in 1964, renowned for its athletic footwear, apparel, and equipment. The brand's innovative designs and marketing have made it a global leader in sportswear, endorsed by top athletes and teams worldwide. Nike's iconic 'Just Do It' slogan and the Swoosh logo have permeated various subcultures, including streetwear, hip-hop, and fitness communities, reflecting a blend of performance and style.";
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
