import FadeIn from "./FadeIn";

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
    <FadeIn>
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-4xl font-extrabold text-black">
            Why Choose Success IT Academy?
          </h2>

          <p className="mb-12 text-center text-gray-600">
            We help you become job-ready with practical training and placement
            support.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5">{item.icon}</div>

                <h3 className="mb-3 text-xl font-bold text-black">
                  {item.title}
                </h3>

                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}