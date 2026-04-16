import Image from "next/image";
import aboutFeatures from "@/data/about-features.json";

export default function AboutSection() {
  return (
    <section className="bg-section-bg py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {aboutFeatures.map((feature) => (
            <div key={feature.title} className="flex items-center gap-3">
              <Image
                src={feature.icon}
                alt={`${feature.title} ${feature.description}`}
                width={40}
                height={40}
              />
              <div>
                <p className="text-[18px] font-normal text-primary leading-none tracking-normal">{feature.title}</p>
                <p className="text-[18px] font-normal text-primary leading-none tracking-normal">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
