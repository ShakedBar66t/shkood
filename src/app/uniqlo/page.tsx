import ClothingHandling from "@/components/ClothingHandling";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Uniqlo() {
  const images = [
    "uniqlo-clothing/uniqlo-t.png",
    "uniqlo-clothing/uniqlo-cross-bag.png",
    "uniqlo-clothing/uniqlo-jeans.png",
    "uniqlo-clothing/uniqlo-pants-brown.png",
    "uniqlo-clothing/uniqlo-t-white.png",
    "uniqlo-clothing/uniqlo-t.png",
    "uniqlo-clothing/uniqlo-joggers.png",
    "uniqlo-clothing/uniqlo-trousers.png",
    "uniqlo-clothing/uniqlo-jeans.png",
    "uniqlo-clothing/uniqlo-cross-bag.png",
    "uniqlo-clothing/uniqlo-pants-brown.png",
    "uniqlo-clothing/uniqlo-t-white.png",

  ];

  const materialText =
    "UNIQLO is known for its use of innovative materials in casual and functional clothing. Their products often feature advanced fabrics like HeatTech for warmth without bulk and AIRism for moisture-wicking and breathability. For everyday apparel, UNIQLO frequently uses a blend of cotton and synthetic fibers to ensure comfort, durability, and a sleek appearance.";
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText =
    "UNIQLO clothing generally fits true to size, offering a clean and comfortable silhouette ideal for everyday wear. Their garments are designed with a focus on practicality and ease, with some items providing a more relaxed fit to enhance comfort. If you prefer a more oversized look, consider sizing up, particularly for outerwear and their more casual lines.";

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col text-center items-center">
          <img
            src="testimonials/uniqlo-logo.png"
            alt="nike-logo"
            className="w-full sm:w-1/2 mt-10"
          />
          <p className="text-center mt-10 text-md md:text-lg lg:text-xl">
            UNIQLO Co., Ltd. is a Japanese multinational retail company founded
            in 1949, renowned for its high-quality, affordable casual wear. The
            brand's minimalist designs and commitment to functionality have made
            it a global leader in everyday apparel.
            <br /> UNIQLO's LifeWear concept
            and innovative fabrics like HeatTech and AIRism cater to diverse
            lifestyles, emphasizing comfort and versatility. The brand has
            gained popularity in various subcultures, including streetwear and
            tech enthusiasts, for its sleek, practical aesthetic.
          </p>
          <h2 className="mt-10 font-bold !leading-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl">
            Some of the UNIQLO clothing:
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
