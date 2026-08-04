const companies = [
  "Amazon",
  "Microsoft",
  "Google",
  "Capgemini",
  "Accenture",
  "TCS",
  "Infosys",
  "Cognizant",
  "Wipro",
  "IBM",
  "HCLTech",
  "Deloitte",
];

export default function HiringCompanies() {
  const repeatedCompanies = [...companies, ...companies];

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-extrabold text-gray-900">
          Career Opportunities Across Leading IT Companies
        </h2>

        <p className="mx-auto mb-12 mt-4 max-w-3xl text-center text-gray-600">
          We prepare candidates with practical skills and interview readiness
          for opportunities across the IT industry.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="company-slider flex w-max gap-6">
          {repeatedCompanies.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex min-w-[190px] items-center justify-center rounded-2xl border border-gray-200 bg-slate-50 px-8 py-6 shadow-sm"
            >
              <span className="text-lg font-bold text-gray-800">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-4xl px-6 text-center text-xs text-gray-500">
        Company names are shown only to represent potential career
        opportunities and do not imply an official recruitment partnership.
      </p>
    </section>
  );
}