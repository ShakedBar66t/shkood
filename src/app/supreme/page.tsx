import React from "react";
import BrandPage from "@/components/BrandPage";

const Supreme: React.FC = () => {
  const images = [
    "supreme-clothing/supreme-hoodie.png",
    "supreme-clothing/supreme-bogo.png",
    "supreme-clothing/supreme-pants.png",
    "supreme-clothing/supreme-t-1.png",
    "supreme-clothing/supreme-nike-shoes.png",
    "supreme-clothing/supreme-t-2.png",
    "supreme-clothing/supreme-boxers.png",
    "supreme-clothing/supreme-hoodie.png",
    "supreme-clothing/supreme-cap.png",
    "supreme-clothing/supreme-nike-shoes.png",
    "supreme-clothing/supreme-boxers.png",
    "supreme-clothing/supreme-cap.png",
  ];

  const materialText = "Supreme is known for using high-quality hoodies made from premium materials. They often use heavyweight cotton or fleece fabrics, ensuring durability and comfort. For the t-shirts, Supreme utilizes different materials and blends ranging from 100% cotton to polyester.";
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText = "All Supreme pieces are true to the skater heritage of this unique brand. In practice, that means you'll find that whatever you choose, it's likely to run large to achieve Supreme's signature baggy fit. If you'd like a slimmer feel, a size down might be the way to go.";
  const description = "Supreme is an American clothing and skateboarding lifestyle brand established in New York City in April 1994. The brand was founded by James Jebbia. Supreme is recognized for its influence on streetwear culture, with products that cater to skateboarding and urban fashion trends.";
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
