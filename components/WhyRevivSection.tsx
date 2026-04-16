import Image from "next/image";
import whyRevivData from "@/data/why-reviv.json";

export default function WhyRevivSection() {
  return (
    <section id="why-reviv" className="bg-section-bg py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-stretch">
          <div>
            <p className="text-[20px] font-normal text-navy leading-none tracking-normal uppercase mb-2">
              EMPOWERING PREVENTIVE HEALTHCARE
            </p>
            <h2 className="text-[48px] font-normal leading-none tracking-normal capitalize text-primary mb-6">
              Why Choose
              <br />
              IV Therapies From REVIV
            </h2>
            <p className="text-[16px] font-normal text-[#5D5D5D] leading-[22px] tracking-normal text-justify mb-4">
              IV drip therapy allows essential vitamins, minerals, and nutrients to be
              delivered directly into the bloodstream, enabling optimal absorption and
              efficient utilization.
            </p>
            <p className="text-[16px] font-normal text-[#5D5D5D] leading-[22px] tracking-normal text-justify">
              REVIV follows globally established medical protocols developed over more
              than a decade. All IV therapies are administered under professional
              supervision to ensure safety, consistency, and clinical integrity.
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/images/why-reviv.jpg"
              alt="Couple enjoying IV therapy at REVIV Hyderabad"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th scope="col" className="text-left p-4 bg-white text-gray-900 font-semibold text-base">
                  Parameter
                </th>
                <th scope="col" className="text-left p-4 bg-primary text-white font-semibold text-base">
                  REVIV
                </th>
                <th scope="col" className="text-left p-4 bg-white text-gray-900 font-semibold text-base">
                  Others
                </th>
              </tr>
            </thead>
            <tbody>
              {whyRevivData.map((row, i) => (
                <tr key={row.parameter} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td scope="row" className="p-4 text-sm font-medium text-gray-900">
                    {row.parameter}
                  </td>
                  <td className="p-4 text-sm text-primary bg-primary/5">
                    {row.reviv}
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {row.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
