import ClothingHandling from "@/components/ClothingHandling";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Bape() {
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

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col text-center items-center">
          <img
            src="/bape-clothing/BAPE-Symbol.png"
            alt="bape-logo"
            className="w-full sm:w-1/2 mt-10"
          />
          <p className="text-center mt-10 text-md md:text-lg lg:text-xl">
            Japanese fashion brand founded by Nigo (Tomoaki Nagao) in
            Ura-Harajuku in 1993.
            <br />
            BAPE is a name that resonates deeply within the exclusive street
            fashion culture,
            <br />
            crafting a unique fashion of Hip-Hop and fasion that captivated the
            youth of Shibuya long before it gained mainstream recognition.
          </p>
          <h2 className="mt-10 font-bold !leading-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl">
            Some of the BAPE clothing:
          </h2>
        </div>
        <ImageSlider images={images} />
        <ClothingHandling handlingText={handlingText} fittingText={fittingText} materialText={materialText} />
      </MaxWidthWrapper>
    </section>
  );
}
