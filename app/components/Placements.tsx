import FadeIn from "./FadeIn";

const placements = [
  {
    name: "Aditya T",
    role: "SRE Engineer",
    package: "8 LPA",
    course: "DevOps / SRE Engineer",
    initials: "AT",
  },
];

export default function Placements() {
  return (
    <FadeIn>
      <section id="placements" className="bg-[#0B1F3A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-extrabold">
            Placement Success
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-300">
            Real student outcomes powered by practical learning, interview
            preparation and career support.
          </p>

          <div className="mx-auto mt-12 max-w-3xl">
            {placements.map((student) => (
              <div
                key={student.name}
                className="grid gap-8 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur md:grid-cols-[140px_1fr] md:items-center"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-yellow-400 text-4xl font-extrabold text-[#0B1F3A]">
                  {student.initials}
                </div>

                <div>
                  <span className="inline-block rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-300">
                    Recently Placed
                  </span>

                  <h3 className="mt-5 text-3xl font-extrabold">
                    {student.name}
                  </h3>

                  <p className="mt-2 text-xl text-slate-200">
                    Placed as <strong>{student.role}</strong>
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-sm text-slate-300">Package</p>
                      <p className="mt-1 text-3xl font-extrabold text-yellow-400">
                        {student.package}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-sm text-slate-300">Program</p>
                      <p className="mt-1 font-bold">{student.course}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-slate-400">
                    Placement outcomes vary based on skills, experience,
                    interview performance, employer requirements and market
                    conditions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}