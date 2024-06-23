import ContactForm from "@/components/ContactForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";

export default function About() {
  return (
    <main>
      <section>
        <div className="relative w-full">
          <img src="clothing-rack.jpg" alt="Clothing rack full of stylish clothes" className="w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-3xl sm:text-5xl">Shkood!</h1>
            <p className="text-white text-xl sm:text-3xl mt-6">
              Empowering you to look better, feel better, and express your true self through elevated style.
            </p>
          </div>
        </div>
      </section>
      <MaxWidthWrapper>
        <section className="flex flex-col lg:flex-row mt-10 sm:mt-20 gap-10">
          <img
            src="models/shkood-model.JPG"
            alt="Shaked, the fashion stylist"
            className="w-full max-w-sm mx-auto lg:mx-0"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Hey, I'm Shaked.</h2>
            <p className="mt-4 text-base sm:text-lg">
              I'm a 25-year-old fashion stylist from Haifa, Israel. My passion lies in helping people discover and embrace their unique style. I believe that fashion is more than just clothing—
              <span className="text-green-600"> it's a way to express your true self.</span> Through personalized consultations, I guide my clients to understand what they genuinely want to wear and how to achieve their desired looks.
            </p>
            <p className="mt-6 text-base sm:text-lg">
              I don't just suggest clothes; I help you uncover your authentic style by asking the right questions and offering insightful guidance. Whether you're overwhelmed by shopping, unsure of what suits you, or need help creating outfits from your existing wardrobe, I'm here to support you.
            </p>
            <p className="mt-6 text-base sm:text-lg">
              Together, we'll explore your preferences, break free from societal expectations, and build a wardrobe that makes you feel <span className="text-green-600">confident</span> and <span className="text-green-600">comfortable</span>. If you're ready to transform your style and feel more secure about your clothing choices, let's work together to elevate your taste and boost your confidence.
            </p>
          </div>
        </section>
        <div className="border-t border-gray-300 my-10"></div> {/* grey line */}
        <section className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 mt-20">
          <div className="flex gap-0.5 mb-2">
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
            <Star className="h-5 w-5 text-green-600 fill-green-600" />
          </div>
          <div className="text-lg leading-8">
            <p>
              &quot;Working with Shaked was an incredible experience. Shaked
              helped me find my unique style and now{" "}
              <span className="p-0.5 bg-slate-800 text-white">
                I feel more confident
              </span>{" "}
              and stylish every day. His personalized approach made all the
              difference. Highly recommend!&quot;
            </p>
          </div>
          <div className="flex gap-4 mt-2">
            <img
              className="rounded-full h-12 w-12 object-cover"
              src="/models/guy-headshot.jpg"
              alt="Guy, a satisfied customer"
            />
            <div className="flex flex-col">
              <p className="font-semibold">Guy</p>
              <div className="flex gap-1.5 items-center text-zinc-600">
                <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                <p className="text-sm">Verified Customer</p>
              </div>
            </div>
          </div>
        </section>
        <div className="border-t border-gray-300 my-10"></div> {/* grey line */}
        <section>
          <ContactForm />
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
