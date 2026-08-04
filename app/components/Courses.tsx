import FadeIn from "./FadeIn";

import {
  FaAws,
  FaServer,
  FaShieldAlt,
  FaTools,
  FaSyncAlt,
} from "react-icons/fa";

const courses = [
  {
    title: "DevOps / SRE Engineer",
    duration: "45 Days",
    icon: <FaAws size={40} className="text-yellow-500" />,
    features: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Placement Support",
    ],
  },
  {
    title: "Production Support",
    duration: "30 Days",
    icon: <FaServer size={40} className="text-yellow-500" />,
    features: [
      "Linux",
      "SQL",
      "Application Support",
      "Monitoring",
      "Ticket Handling",
      "Interview Preparation",
    ],
  },
  {
    title: "Incident Management",
    duration: "15 Days",
    icon: <FaShieldAlt size={40} className="text-yellow-500" />,
    features: [
      "P1/P2 Incidents",
      "SLA",
      "RCA",
      "Escalation",
      "Bridge Calls",
      "Communication",
    ],
  },
  {
    title: "Major Incident Management",
    duration: "10 Days",
    icon: <FaTools size={40} className="text-yellow-500" />,
    features: [
      "Major Incidents",
      "War Room",
      "Stakeholders",
      "Service Restoration",
      "RCA",
      "Leadership",
    ],
  },
  {
    title: "Change & Problem Management",
    duration: "15 Days",
    icon: <FaSyncAlt size={40} className="text-yellow-500" />,
    features: [
      "ITIL",
      "CAB",
      "Risk Assessment",
      "Problem Management",
      "Change Planning",
      "Documentation",
    ],
  },
];

export default function Courses() {
  return (
    <FadeIn>
      <section id="courses" className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-extrabold text-gray-900">
            Our Programs
          </h2>

          <p className="mb-12 mt-4 text-center text-gray-600">
            Industry-focused training programs designed to make you job-ready.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <div
                key={course.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5">{course.icon}</div>

                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {course.title}
                </h3>

                <p className="mb-6 font-semibold text-yellow-600">
                  Duration: {course.duration}
                </p>

                <ul className="mb-8 flex-1 space-y-3">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="font-bold text-green-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#demo"
                  className="block w-full rounded-lg bg-yellow-500 py-3 text-center font-semibold text-white transition hover:bg-yellow-600"
                >
                  Book Free Demo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}