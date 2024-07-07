import React from "react";
import BrandPage from "@/components/BrandPage";

const Carhartt: React.FC = () => {
  const images = [
    "carhartt-clothing/carhartt-pants.png",
    "carhartt-clothing/carhartt-pink-jacket.png",
    "carhartt-clothing/carhartt-hoodie.png",
    "carhartt-clothing/carhartt-t.png",
    "carhartt-clothing/carhartt-detroit-jacket.png",
    "carhartt-clothing/carhartt-detroit-jacket-2.webp",
    "carhartt-clothing/carhartt-pants.png",
    "carhartt-clothing/carhartt-jeans.png",
    "carhartt-clothing/carhartt-jacket.png",
    "carhartt-clothing/carhartt-blue-jacket.png",
    "carhartt-clothing/carhartt-pink-jacket.png",
    "carhartt-clothing/carhartt-t.png",
    "carhartt-clothing/carhartt-grey-jacket.png",
    "carhartt-clothing/carhartt-detroit-jacket.png",
    "carhartt-clothing/carhartt-blue-jacket.png",
  ];

  const materialText = "Cotton duck is the most popular and versatile shell fabric for Carhartt outerwear. The cotton-poly blend of the QuickDuck canvas is a lightweight option. Most are made from relatively stiff 12-ounce cotton canvas with triple-stitched seams.";
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText = "Carhartt clothing typically fits generously, with a focus on durability and room for movement, especially in their workwear lines. For a more fitted look, consider sizing down, but expect the material to be heavy-duty and sturdy.";
  const description = "Carhartt, Inc. is an American clothing company founded in 1889, known for heavy-duty work wear such as jackets, coats, overalls, coveralls, vests, shirts, jeans, dungarees, fire-resistant clothing and hunting apparel. The brand gained popularity in subcultures, including skateboarding, graffiti, and hip-hop communities, embracing Carhartt's rugged and utilitarian aesthetic.";
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
