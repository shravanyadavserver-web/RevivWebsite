import Image from "next/image";
import ivTherapies from "@/data/iv-therapies.json";

export default function IVTherapiesSection() {
  return (
    <section id="iv-therapies" className="bg-section-bg py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-[48px] font-normal leading-none tracking-normal capitalize text-primary mb-12">
          IV Therapies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ivTherapies.map((therapy) => (
            <div
              key={therapy.id}
              className="card-container"
            >
              <div className="pt-6 flex items-center justify-center bg-white">
                <Image
                  src={therapy.image}
                  alt={`${therapy.name} IV therapy bag by REVIV`}
                  width={400}
                  height={250}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain w-full h-52"
                />
              </div>
              <div className="p-6 pt-3 flex-1 flex flex-col">
                <h3 className="text-[25px] font-normal text-primary leading-none tracking-normal capitalize mb-1">
                  {therapy.name}
                </h3>
                <p className="text-[16px] font-normal text-black leading-none tracking-normal mb-3">
                  {therapy.tagline}
                </p>
                <ul className="space-y-1 mb-6 flex-1">
                  {therapy.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-1.5 text-[14px] font-normal text-[#5D5D5D] leading-none tracking-normal">
                      <span className="text-primary mt-0.5">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book-appointment"
                  className="block text-center py-2.5 bg-primary text-white text-[16px] font-bold leading-none tracking-normal rounded-full hover:bg-primary-dark transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
