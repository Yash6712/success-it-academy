import FadeIn from "./FadeIn";

const testimonials = [
  {
    name: "Student Review",
    role: "DevOps / SRE Program",
    review:
      "The practical sessions, interview preparation and resume guidance helped me understand the role and prepare with more confidence.",
  },
  {
    name: "Student Review",
    role: "Production Support Program",
    review:
      "The course covered real-time support scenarios, incident handling and interview questions in a simple and structured way.",
  },
  {
    name: "Student Review",
    role: "Incident Management Program",
    review:
      "The mock interviews and career guidance helped me improve my communication and understand how production incidents are managed.",
  },
];

export default function Testimonials() {
  return (
    <FadeIn>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-extrabold text-gray-900">
            Student Feedback
          </h2>

          <p className="mx-auto mb-12 mt-4 max-w-3xl text-center text-gray-600">
            Feedback from learners about practical training, interview
            preparation and career support.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((student, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-slate-50 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-xl font-extrabold text-[#0B1F3A]">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {student.name}
                </h3>

                <p className="mt-1 font-semibold text-yellow-700">
                  {student.role}
                </p>

                <div className="mt-4 text-yellow-500">★★★★★</div>

                <p className="mt-5 leading-7 text-gray-700">
                  “{student.review}”
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-gray-500">
            Replace these sample reviews with verified student feedback before
            publishing the website.
          </p>
        </div>
      </section>
    </FadeIn>
  );
}