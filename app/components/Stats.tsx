"use client";

import CountUp from "react-countup";

const stats = [
  {
    number: 300,
    suffix: "+",
    label: "Students Trained",
  },
  {
    number: 200,
    suffix: "+",
    label: "Placements",
  },
  {
    number: 15,
    suffix: "+",
    label: "Industry Mentors",
  },
  {
    number: 2,
    suffix: "+",
    label: "Years Experience",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#071a33] py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur"
          >
            <h2 className="text-5xl font-extrabold text-yellow-400">
              <CountUp
                end={stat.number}
                duration={3}
                enableScrollSpy
                scrollSpyOnce
              />
              {stat.suffix}
            </h2>

            <p className="mt-3 text-lg text-white">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}