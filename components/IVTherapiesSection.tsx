import Image from "next/image";
import ivTherapies from "@/data/iv-therapies.json";

export default function IVTherapiesSection() {
  return (
    <section id="iv-therapies" className="bg-[#EDF2FA] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          IV Therapies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ivTherapies.map((therapy) => (
            <div
              key={therapy.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="p-6 flex items-center justify-center bg-white">
                <Image
                  src={therapy.image}
                  alt={`${therapy.name} IV therapy bag by REVIV`}
                  width={200}
                  height={250}
                  className="object-contain h-52"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-primary mb-1">
                  {therapy.name}
                </h3>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  {therapy.tagline}
                </p>
                <ul className="space-y-1 mb-6 flex-1">
                  {therapy.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <span className="text-primary mt-0.5">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book-appointment"
                  className="block text-center py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
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
