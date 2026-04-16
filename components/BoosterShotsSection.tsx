import Image from "next/image";
import boosterShots from "@/data/booster-shots.json";

export default function BoosterShotsSection() {
  return (
    <section id="booster-shots" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          Booster Shots (IM)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boosterShots.map((shot) => (
            <div
              key={shot.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="p-6 flex items-center justify-center">
                <Image
                  src={shot.image}
                  alt={`${shot.name} booster shot by REVIV`}
                  width={200}
                  height={200}
                  className="object-contain h-44"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-primary mb-2">
                  {shot.name}
                </h3>
                <p className="text-sm text-gray-600 mb-6 flex-1 leading-relaxed">
                  {shot.description}
                </p>
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
