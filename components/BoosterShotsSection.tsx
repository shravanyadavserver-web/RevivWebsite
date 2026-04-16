import Image from "next/image";
import boosterShots from "@/data/booster-shots.json";

export default function BoosterShotsSection() {
  return (
    <section id="booster-shots" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2 className="text-[48px] font-normal leading-none tracking-normal capitalize text-primary mb-12">
          Booster Shots (IM)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boosterShots.map((shot) => (
            <div
              key={shot.id}
              className="card-container"
            >
              <div className="p-6 flex items-center justify-center">
                <Image
                  src={shot.image}
                  alt={`${shot.name} booster shot by REVIV`}
                  width={200}
                  height={200}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain h-44"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-[25px] font-normal text-primary leading-none tracking-normal capitalize mb-2">
                  {shot.name}
                </h3>
                <p className="text-[14px] font-normal text-gray-600 mb-6 flex-1 leading-none tracking-normal">
                  {shot.description}
                </p>
                <a
                  href="#book-appointment"
                  className="btn-book"
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
