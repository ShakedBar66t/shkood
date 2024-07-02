import ClothingHandling from "@/components/ClothingHandling";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Balenciaga() {
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

  const materialText =
  "Balenciaga is noted for using only the finest materials including Italian leather, 3D printed rubber, 3D knit and rubber with “no memory” technology.";
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText =
    "Many pieces are highly individual in their sizing, precisely because this is a label that goes its own way, and in streetwear-influenced pieces that are designed to fit large, consider going down a size if you'd like a more fitted look";

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col text-center items-center">
          <img
            src="/balenciaga-clothing/balenciaga-logo.png"
            alt="balenciaga-logo"
            className="w-full sm:w-1/2 mt-10"
          />
          <p className="text-center mt-10 text-md md:text-lg lg:text-xl">
            Balenciaga is a Spanish luxury fashion line that was founded in 1919
            by courtier Cristóbal Balenciaga in Sab Sebastian.
            <br />
            Balenciaga&lsquo;s heritage is deeply rooted in the groundbreaking designs
            of its founder, Cristóbal Balenciaga. Renowned for his innovative
            approach to fashion, Balenciaga revolutionized the industry with his
            avant-garde silhouettes, architectural designs, and pioneering
            techniques.
          </p>
          <h2 className="mt-10 font-bold !leading-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl mb-10">
            Some of the Balenciaga clothing:
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
