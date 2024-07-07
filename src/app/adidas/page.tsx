import React from "react";
import BrandPage from "@/components/BrandPage";

const Adidas: React.FC = () => {
  const images = [
    "adidas-clothing/adidas-korn.png",
    "adidas-clothing/adidas-forum.webp",
    "adidas-clothing/adidas-korn-t.png",
    "adidas-clothing/adidas-women-pants.png",
    "adidas-clothing/adidas-vintage.webp",
    "adidas-clothing/adidas-forum.webp",
    "adidas-clothing/adidas-ivy-cargo.png",
    "adidas-clothing/adidas-football-t.png",
    "adidas-clothing/adidas-korn.png",
    "adidas-clothing/adidas-women-pants.png",
    "adidas-clothing/adidas-korn-t.png",
    "adidas-clothing/adidas-samba.png",
    "adidas-clothing/adidas-football-t.png",
    "adidas-clothing/adidas-vintage.webp",
    "adidas-clothing/adidas-ivy-cargo.png",
  ];

  const materialText = "Adidas is celebrated for its advanced material technology in both sportswear and lifestyle clothing. Their products often incorporate fabrics like Climalite for moisture management and Primeknit for lightweight, adaptive fit. For apparel, Adidas frequently utilizes a blend of recycled polyester and cotton, ensuring durability, sustainability, and comfort.";
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText = "Adidas clothing generally fits true to size, providing a balanced fit suitable for both athletic performance and casual wear. Performance gear often features a more streamlined design to enhance movement and functionality. For a more relaxed fit, consider sizing up, particularly with outerwear and lifestyle pieces.";
  const description = "Adidas is a German multinational corporation founded in 1949, famous for its sports footwear, apparel, and accessories. Known for its innovative designs and performance-driven products, Adidas has become a global powerhouse in the sportswear industry, endorsed by numerous top athletes and sports teams. The brand's iconic three stripes and 'Impossible is Nothing' slogan resonate across various subcultures, including streetwear, skateboarding, and hip-hop, symbolizing a fusion of athletic performance and urban style.";
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
