"use client";

import { FormEvent, useState } from "react";

const courses = [
  "Production Support",
  "Incident Management",
  "Major Incident Management",
  "Change & Problem Management",
  "DevOps / SRE Engineer",
];

export default function DemoForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const course = formData.get("course");
    const experience = formData.get("experience");

    const message = encodeURIComponent(
      `Hi Success IT Academy,

I want to book a free demo.

Name: ${name}
Phone: ${phone}
Email: ${email}
Course: ${course}
Background: ${experience}`
    );

    setStatus("Opening WhatsApp with your enquiry...");
    window.open(`https://wa.me/918329345893?text=${message}`, "_blank");

    form.reset();
  }

  return (
    <section id="demo" className="bg-[#0B1F3A] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            Free Live Demo
          </span>

          <h2 className="mt-6 text-4xl font-extrabold">
            Experience Our Training Before You Enroll
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Attend a live demo, understand our teaching approach and discuss
            the right career path for your background.
          </p>

          <div className="mt-8 space-y-4 text-slate-200">
            <p>✓ Live practical demonstration</p>
            <p>✓ Course and career guidance</p>
            <p>✓ Resume and interview support overview</p>
            <p>✓ Freshers, professionals and career-gap candidates welcome</p>
            <p>✓ 24×7 learning support</p>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Pay-after-placement options and package claims are subject to
            eligibility, performance and academy terms.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-7 text-gray-900 shadow-2xl sm:p-9"
        >
          <h3 className="text-2xl font-bold">Book Your Free Demo</h3>

          <p className="mt-2 text-sm text-gray-600">
            Fill in your details. Your enquiry will open in WhatsApp.
          </p>

          <div className="mt-7 grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block font-semibold">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-semibold">
                Mobile Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                pattern="[0-9]{10}"
                placeholder="10-digit mobile number"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-semibold">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
              />
            </div>

            <div>
              <label htmlFor="course" className="mb-2 block font-semibold">
                Interested Program
              </label>
              <select
                id="course"
                name="course"
                required
                defaultValue=""
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
              >
                <option value="" disabled>
                  Select a program
                </option>

                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="experience" className="mb-2 block font-semibold">
                Your Background
              </label>
              <select
                id="experience"
                name="experience"
                required
                defaultValue=""
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200"
              >
                <option value="" disabled>
                  Select your background
                </option>
                <option value="Fresher">Fresher</option>
                <option value="Working Professional">
                  Working Professional
                </option>
                <option value="Career Gap">Career Gap</option>
                <option value="Non-IT to IT">Non-IT to IT</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-[#0B1F3A] transition hover:bg-yellow-300"
            >
              Book Free Demo
            </button>

            {status && (
              <p className="text-center text-sm font-medium text-green-700">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}