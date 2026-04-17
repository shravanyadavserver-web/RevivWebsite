import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-primary">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-normal text-white leading-none tracking-normal capitalize mb-6">
              Globally Trusted IV Therapy,
              <br />
              Now in Hyderabad
            </h1>

            <ul className="space-y-3 mb-8">
              {[
                "Backed by international medical standards, with 10+ years of proven protocols",
                "Strict safety and clinical standards",
                "Administered by trained medical professionals",
                "Operating across 47 countries with 108 clinics worldwide",
                "Trusted by celebrities, athletes, global leaders & health-conscious individuals",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/90 text-base lg:text-[18px] font-light leading-snug tracking-normal">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#iv-therapies"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border-2 border-white font-normal rounded-full hover:bg-white/90 transition-colors text-base lg:text-[20px] leading-none tracking-normal capitalize text-center"
              >
                Explore Our IV Therapies
              </a>
              <a
                href="#book-appointment"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border-2 border-white font-normal rounded-full hover:bg-white/90 transition-colors text-base lg:text-[20px] leading-none tracking-normal capitalize text-center"
              >
                Book Your Consultation Now
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl lg:text-[55px] font-black text-white leading-[50px] tracking-normal capitalize">3M+</span>
              <span className="text-base lg:text-[18px] font-normal text-white/90 leading-none tracking-normal capitalize">
                IV Therapies Delivered Globally
                <br />
                —And Counting.
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <Image
              src="/images/hero-section.png"
              alt="REVIV Hyderabad IV therapy patients enjoying wellness treatments"
              width={600}
              height={500}
              priority
              className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
