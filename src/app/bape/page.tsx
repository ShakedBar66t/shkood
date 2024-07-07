import React from "react";
import BrandPage from "@/components/BrandPage";

const Bape: React.FC = () => {
  const images = [
    'bape-clothing/bape-t-2.png',
    'bape-clothing/bape-shorts-1.png',
    'bape-clothing/bape-t-1.png',
    'bape-clothing/bape-t-2.png',
    'bape-clothing/bape-cap.png',
    'bape-clothing/bape-t-3.png',
    'bape-clothing/bape-shorts-1.png',
    'bape-clothing/bape-kicks.png',
    'bape-clothing/bape-t-3.png',
    'bape-clothing/bape-cap.png',
    'bape-clothing/bape-shorts-1.png',
    'bape-clothing/bape-t-3.png',
    'bape-clothing/bape-jean-jacket.png',
    'bape-clothing/bape-cap.png',
    'bape-clothing/bape-hoodie.png',
  ];

  const materialText = "Bape is primarily made of a high-quality cotton blend fabric. The fabric used in Bape hoodies is known for its softness and durability. Some Bape hoodies may also incorporate other materials like polyester or nylon.";
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText = "Bape clothing is designed to have a slim fit. If you prefer a looser fit, consider sizing up.";
  const description = "Japanese fashion brand founded by Nigo (Tomoaki Nagao) in Ura-Harajuku in 1993. BAPE is a name that resonates deeply within the exclusive street fashion culture, crafting a unique fashion of Hip-Hop and fashion that captivated the youth of Shibuya long before it gained mainstream recognition.";
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
