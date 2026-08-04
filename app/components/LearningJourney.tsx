import {
  FaCalendarCheck,
  FaUserGraduate,
  FaLaptopCode,
  FaProjectDiagram,
  FaFileAlt,
  FaComments,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  { icon: <FaCalendarCheck />, title: "Book Free Demo" },
  { icon: <FaUserGraduate />, title: "Enroll in Course" },
  { icon: <FaLaptopCode />, title: "Live Practical Training" },
  { icon: <FaProjectDiagram />, title: "Real-Time Projects" },
  { icon: <FaFileAlt />, title: "Resume Optimization" },
  { icon: <FaComments />, title: "Mock Interviews" },
  { icon: <FaBriefcase />, title: "Interview Calls" },
  { icon: <FaCheckCircle />, title: "Get Placed" },
];

export default function LearningJourney() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-4">
          Your Journey with Success IT Academy
        </h2>

        <p className="text-center text-gray-600 mb-12">
          A step-by-step roadmap from learning to getting placed.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-4xl text-yellow-500 flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-black">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}