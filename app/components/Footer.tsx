const programs = [
  "Production Support",
  "Incident Management",
  "Major Incident Management",
  "Change & Problem Management",
  "DevOps / SRE Engineer",
];

export default function Footer() {
  return (
    <footer className="bg-[#07182f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-2xl font-extrabold text-yellow-400">
            Success IT Academy
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Skills Today. Success Tomorrow.
          </p>

          <p className="mt-5 leading-7 text-slate-300">
            Practical, job-oriented IT training with interview preparation and
            career support.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-300">
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-400">
              About
            </a>
            <a href="#courses" className="hover:text-yellow-400">
              Courses
            </a>
            <a href="#placements" className="hover:text-yellow-400">
              Placements
            </a>
            <a href="#faq" className="hover:text-yellow-400">
              FAQ
            </a>
            <a href="#demo" className="hover:text-yellow-400">
              Book Free Demo
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Our Programs</h3>

          <div className="mt-5 flex flex-col gap-3 text-slate-300">
            {programs.map((program) => (
              <a
                key={program}
                href="#courses"
                className="hover:text-yellow-400"
              >
                {program}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Contact</h3>

          <div className="mt-5 space-y-3 text-slate-300">
            <p>Pune, Maharashtra, India</p>

            <a
              href="tel:+918329345893"
              className="block hover:text-yellow-400"
            >
              +91 8329345893
            </a>

            <a
              href="mailto:successitacademy@gmail.com"
              className="block break-all hover:text-yellow-400"
            >
              successitacademy@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Success IT Academy. All rights
            reserved.
          </p>

          <p>
            Placement, package and pay-after-placement terms are subject to
            eligibility and academy policies.
          </p>
        </div>
      </div>
    </footer>
  );
}