import {
  FaLaptopCode,
  FaBriefcase,
  FaUserTie,
  FaProjectDiagram,
  FaFileAlt,
  FaComments,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode size={35} className="text-yellow-500" />,
    title: "Real-Time Production Training",
    description:
      "Learn using real production scenarios and enterprise-level projects.",
  },
  {
    icon: <FaBriefcase size={35} className="text-yellow-500" />,
    title: "Placement Assistance",
    description:
      "Get interview calls, resume support, and placement guidance.",
  },
  {
    icon: <FaUserTie size={35} className="text-yellow-500" />,
    title: "Industry Mentors",
    description:
      "Learn directly from experienced DevOps and SRE professionals.",
  },
  {
    icon: <FaProjectDiagram size={35} className="text-yellow-500" />,
    title: "Hands-on Projects",
    description:
      "Work on AWS, Kubernetes, Jenkins, Docker and Linux projects.",
  },
  {
    icon: <FaFileAlt size={35} className="text-yellow-500" />,
    title: "Resume Optimization",
    description:
      "Build an ATS-friendly resume with recruiter-focused guidance.",
  },
  {
    icon: <FaComments size={35} className="text-yellow-500" />,
    title: "Mock Interviews",
    description:
      "Prepare through technical and HR mock interviews with feedback.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-black">
          Why Choose Success IT Academy?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We help you become job-ready with practical training and placement support.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">
  {item.title}
</h3>
              <p className="text-gray-700">
  {item.description}
</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}