import ClothingHandling from "@/components/ClothingHandling";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Adidas() {
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

  const materialText =
    "Adidas is celebrated for its advanced material technology in both sportswear and lifestyle clothing. Their products often incorporate fabrics like Climalite for moisture management and Primeknit for lightweight, adaptive fit. For apparel, Adidas frequently utilizes a blend of recycled polyester and cotton, ensuring durability, sustainability, and comfort..";
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText =
    "Adidas clothing generally fits true to size, providing a balanced fit suitable for both athletic performance and casual wear. Performance gear often features a more streamlined design to enhance movement and functionality. For a more relaxed fit, consider sizing up, particularly with outerwear and lifestyle pieces.";

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col text-center items-center">
          <img
            src="adidas-clothing/Adidas-logo-2.png"
            alt="adidas-logo"
            className="w-full sm:w-1/2 mt-10"
          />
          <p className="text-center mt-10 text-md md:text-lg lg:text-xl">
            Adidas is a German multinational corporation founded in 1949,
            famous for its sports footwear, apparel, and accessories. Known for
            its innovative designs and performance-driven products, Adidas has
            become a global powerhouse in the sportswear industry, endorsed by
            numerous top athletes and sports teams.
            <br /> The brand&lsquo;s iconic three
            stripes and &lsquo;Impossible is Nothing&lsquo; slogan resonate across various
            subcultures, including streetwear, skateboarding, and hip-hop,
            symbolizing a fusion of athletic performance and urban style.
          </p>
          <h2 className="mt-10 font-bold !leading-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl">
            Some of the Adidas clothing:
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
