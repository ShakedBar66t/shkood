import ClothingHandling from "@/components/ClothingHandling";
import ImageSlider from "@/components/ImageSlider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Yeezy() {
  const images = [
    "yeezy-clothing/yeezy-shoes-1.png",
    "yeezy-clothing/yeezy-hat.png",
    "yeezy-clothing/yeezy-shoes-2.png",
    "yeezy-clothing/yeezy-shoes-3.png",
    "yeezy-clothing/yeezy-foam-runners.png",
    "yeezy-clothing/yeezy-hoodie.png",
    "yeezy-clothing/yeezy-shoes-2.png",
    "yeezy-clothing/yeezy-pants.png",
    "yeezy-clothing/yeezy-slides.png",
    "yeezy-clothing/yeezy-t.png",
    "yeezy-clothing/yeezy-shoes-1.png",
    "yeezy-clothing/yeezy-pants.png",
    "yeezy-clothing/yeezy-hat.png",
    "yeezy-clothing/yeezy-shoes-3.png",
    "yeezy-clothing/yeezy-t.png",
  ];

  const materialText =
    "The brand places high importance on sustainability and quality products; hence, they utilize premium fabrics such as French terry cotton and nylon blends for jackets and outerwear, along with other innovative textiles to ensure durability and comfort throughout the ownership experience..";
  const handlingText = [
    "Wash inside out in cold water.",
    "Hang to dry.",
    "Avoid direct sunlight to prevent fading.",
    "Do not bleach.",
    "Iron on low heat if necessary.",
  ];
  const fittingText =
    "Go half a size up for Yeezy sneakers: Yeezy sneakers generally run slightly small, so it's often recommended to choose a size that is half a size larger than your true size.";

  return (
    <section>
      <MaxWidthWrapper>
        <div className="flex flex-col text-center items-center">
          <img
            src="/testimonials/yeezy-logo.png"
            alt="yeezy-logo"
            className="w-full sm:w-1/2 mt-10"
          />
          <p className="text-center mt-10 text-md md:text-lg lg:text-xl">
            Adidas Yeezy &lsquo;or just Yeezy&lsquo; was a fashion collaboration between
            American rapper, designer, and entrepreneur Kayne West&lsquo;s Yeezy and
            German sportswear company Adidas.
            <br />
            It offered sneakers in limited edition colorways, as well as shirts, jackets, track pants, socks, slides, lingerie and slippers.
            <br />
            Yeezy influenced and inspired a multitude of other fashion brands.
          </p>
          <h2 className="mt-10 font-bold !leading-tight text-gray-900 text-2xl md:text-3xl lg:text-4xl">
            Some of the YEEZY clothing:
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
