import React from "react";
import BrandPage from "@/components/BrandPage";

const Balenciaga: React.FC = () => {
  const images = [
    "balenciaga-clothing/balenciaga-slides.png",
    "balenciaga-clothing/balenciaga-hoodie.png",
    "balenciaga-clothing/balenciaga-tank-top.png",
    "balenciaga-clothing/balenciaga-trainers.png",
    "balenciaga-clothing/balenciaga-t-2.png",
    "balenciaga-clothing/balenciaga-slides.png",
    "balenciaga-clothing/balenciaga-jeans.png",
    "balenciaga-clothing/balenciaga-tank-top.png",
    "balenciaga-clothing/balenciaga-boots.png",
    "balenciaga-clothing/balenciaga-hoodie.png",
    "balenciaga-clothing/balenciaga-slides.png",
    "balenciaga-clothing/balenciaga-tank-top.png",
    "balenciaga-clothing/balenciaga-trainers.png",
    "balenciaga-clothing/balenciaga-t-2.png",
  ];

  const materialText = "Balenciaga is noted for using only the finest materials including Italian leather, 3D printed rubber, 3D knit and rubber with 'no memory' technology.";
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText = "Many pieces are highly individual in their sizing, precisely because this is a label that goes its own way, and in streetwear-influenced pieces that are designed to fit large, consider going down a size if you'd like a more fitted look.";
  const description = "Balenciaga is a Spanish luxury fashion line that was founded in 1919 by courtier Cristóbal Balenciaga in Sab Sebastian. Balenciaga's heritage is deeply rooted in the groundbreaking designs of its founder, Cristóbal Balenciaga. Renowned for his innovative approach to fashion, Balenciaga revolutionized the industry with his avant-garde silhouettes, architectural designs, and pioneering techniques.";
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
