import Image from "next/image";

export default function DoorstepSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[20px] font-normal text-navy leading-none tracking-normal uppercase mb-2">
              REVIVED AT HOME
            </p>
            <h2 className="text-[48px] font-normal leading-none tracking-normal text-primary mb-6">
              Wellness Delivered
              <br />
              to Your Doorstep
            </h2>
            <div className="space-y-4 text-[16px] font-normal text-[#8D8D8D] leading-[22px] tracking-normal text-justify mb-8">
              <p>
                Hyderabad&apos;s fast-paced lifestyle often leaves little time to
                prioritise your health. At REVIV Hyderabad, we bring advanced wellness
                solutions directly to you—so you can focus on feeling your best without
                disrupting your routine.
              </p>
              <p>
                Our at-home IV therapy service in Hyderabad delivers doctor-led IV drips
                and vitamin injections to your preferred location. Whether you&apos;re at
                home, staying in a hotel, or working from your office, each session is
                administered by trained medical professionals under strict clinical
                protocols, ensuring safety, comfort, and complete privacy.
              </p>
              <p>
                With REVIV, you receive the same premium IV therapy experience at home as
                you would in our clinic—featuring globally trusted formulations,
                personalized care, and medical-grade standards. Currently, mobile IV
                therapy services are available exclusively within Hyderabad, maintaining
                consistency, quality, and clinical excellence at every step.
              </p>
            </div>
            <a
              href="#book-appointment"
              className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors text-sm"
            >
              Book Appointment
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/doorstep.jpg"
              alt="Woman receiving IV therapy at home from REVIV Hyderabad"
              width={500}
              height={600}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
