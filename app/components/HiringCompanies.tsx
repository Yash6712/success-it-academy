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
  "HCL",
  "Deloitte",
];

export default function HiringCompanies() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-4">
          Companies Our Students Aim For
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We prepare students for opportunities at leading technology companies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {companies.map((company) => (
            <div
              key={company}
              className="bg-white rounded-xl border border-gray-200 shadow-md p-6 text-center"
            >
              <h3 className="font-semibold text-gray-800">{company}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}