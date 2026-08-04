import {
  FaFileAlt,
  FaLinkedin,
  FaSearch,
  FaUserTie,
  FaBriefcase,
  FaHandshake,
} from "react-icons/fa";

const supports = [
  {
    icon: <FaFileAlt className="text-yellow-500 text-4xl" />,
    title: "ATS Resume Optimization",
    description:
      "Build a recruiter-friendly resume that passes ATS screening.",
  },
  {
    icon: <FaLinkedin className="text-yellow-500 text-4xl" />,
    title: "LinkedIn Profile Optimization",
    description:
      "Optimize your LinkedIn profile to attract recruiters.",
  },
  {
    icon: <FaSearch className="text-yellow-500 text-4xl" />,
    title: "Naukri Profile Optimization",
    description:
      "Increase recruiter visibility with a professionally optimized Naukri profile.",
  },
  {
    icon: <FaUserTie className="text-yellow-500 text-4xl" />,
    title: "Mock Interviews",
    description:
      "Practice technical and HR interviews with expert feedback.",
  },
  {
    icon: <FaBriefcase className="text-yellow-500 text-4xl" />,
    title: "Interview Calls",
    description:
      "Receive interview opportunities through our placement assistance.",
  },
  {
    icon: <FaHandshake className="text-yellow-500 text-4xl" />,
    title: "Career Guidance",
    description:
      "Personalized guidance from experienced industry mentors.",
  },
];

export default function PlacementSupport() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-4">
          Placement Support
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We don't just teach—you get complete placement preparation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {supports.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-5">{item.icon}</div>

              <h3 className="text-xl font-bold text-black mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}