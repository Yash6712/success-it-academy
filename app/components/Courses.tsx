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
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Our Programs
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Industry-focused training programs designed to make you job-ready.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <div className="mb-4">{course.icon}</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {course.title}
              </h3>

              <p className="text-yellow-600 font-semibold mb-6">
                Duration: {course.duration}
              </p>

              <ul className="space-y-2 mb-6">
                {course.features.map((feature, i) => (
                  <li
  key={i}
  className="text-gray-700 flex items-center gap-2"
>
  ✅ {feature}
</li>
                ))}
              </ul>

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 