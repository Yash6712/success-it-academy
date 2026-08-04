const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Capgemini",
    package: "6.5 LPA",
    course: "DevOps / SRE Engineer",
    review:
      "The training was completely practical. Mock interviews and resume optimization helped me secure my first DevOps role.",
  },
  {
    name: "Priya Patel",
    company: "Accenture",
    package: "7.2 LPA",
    course: "Production Support",
    review:
      "The mentors explained everything with real-world examples. Placement support was excellent.",
  },
  {
    name: "Amit Verma",
    company: "TCS",
    package: "5.8 LPA",
    course: "Incident Management",
    review:
      "The interview preparation sessions boosted my confidence and helped me clear multiple interview rounds.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-4">
          Student Success Stories
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Hear from students who transformed their careers with us.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((student, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold mb-5">
                {student.name.charAt(0)}
              </div>

              <h3 className="text-xl font-bold text-black">
                {student.name}
              </h3>

              <p className="text-blue-600 font-semibold mt-1">
                {student.company}
              </p>

              <p className="text-green-600 font-semibold">
                Package: {student.package}
              </p>

              <p className="text-yellow-600 mb-4">
                {student.course}
              </p>

              <p className="text-gray-600 italic">
                "{student.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}