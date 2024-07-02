import ClothingHandling from "@/components/ClothingHandling";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Carhartt() {
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

  const materialText =
  "Cotton duck is the most popular and versatile shell fabric for Carhartt outerwear. The cotton-poly blend of the QuickDuck canvas is a lightweight option. Most are made from relatively stiff 12-ounce cotton canvas with triple-stitched seams. "
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText =
    "Carhartt clothing typically fits generously, with a focus on durability and room for movement, especially in their workwear lines. For a more fitted look, consider sizing down, but expect the material to be heavy-duty and sturdy.";

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col text-center items-center">
          <img
            src="carhartt-clothing/carhartt-logo-2.png"
            alt="carhartt-logo"
            className="w-full sm:w-1/2 mt-10"
          />
          <p className="text-center mt-10 text-md md:text-lg lg:text-xl">
            Carhartt, Inc. is an American clothing company founded in 1889,
            known for heavy-duty work wear such as jackets, coats, overalls,
            coveralls, vests, shirts, jeans, dungarees, fire-resistant clothing
            and hunting apparel.
            <br />
            The brand gained popularity in subcultures, including skateboarding,
            graffiti, and hip-hop communities, embracing Carhartt&lsquo;s rugged and
            utilitarian aesthetic.
          </p>
          <h2 className="mt-10 font-bold !leading-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl">
            Some of the Carhartt clothing:
          </h2>
        </div>
        <ImageSlider images={images} />
        <ClothingHandling
          handlingText={handlingText}
          fittingText={fittingText}
          materialText={materialText}
        />
      </MaxWidthWrapper>
    </section>
  );
}
