"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Server,
  Cloud,
  Activity,
} from "lucide-react";

const programs = [
  "Production Support",
  "Incident Management",
  "Major Incident Management",
  "Change & Problem Management",
  "DevOps / SRE Engineer",
];

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hi Success IT Academy, I am interested in your training programs. Please share the course details."
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#071a33] via-[#0b2b53] to-[#123e72] text-white"
    >
      {/* Decorative background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
            Job-Oriented IT Training
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Build a Job-Ready
            <span className="block text-yellow-400">IT Career</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            Learn practical industry skills, prepare for interviews and build
            confidence with structured career support.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program}
                className="flex items-center gap-2 text-sm text-slate-100"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-400" />
                <span>{program}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-[#071a33] transition hover:bg-yellow-300"
            >
              Book Free Demo
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href={`https://wa.me/918329345893?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-5 text-sm text-slate-300">
            Packages starting from 5+ LPA* · Pay after placement options*
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Career Support Program</p>
                <h2 className="mt-1 text-2xl font-bold">
                  Success IT Academy - CI/CD Demo
                </h2>
              </div>

              <div className="rounded-2xl bg-yellow-400 p-3 text-[#071a33]">
                <Cloud className="h-8 w-8" />
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5">
                <Server className="h-7 w-7 text-yellow-400" />
                <h3 className="mt-3 font-bold">Practical Training</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Real-time scenarios and hands-on learning.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5">
                <Activity className="h-7 w-7 text-yellow-400" />
                <h3 className="mt-3 font-bold">Interview Support</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Resume, mock interview and profile optimization.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-white p-5 text-[#071a33]">
              <p className="text-sm font-semibold text-slate-500">
                Who can join?
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3 text-sm font-semibold">
                <span>✓ Freshers</span>
                <span>✓ Working Professionals</span>
                <span>✓ Career Gap</span>
                <span>✓ Non-IT to IT</span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5">
              <div>
                <p className="text-sm text-yellow-200">Call / WhatsApp</p>
                <p className="text-2xl font-extrabold text-yellow-400">
                  8329345893
                </p>
              </div>

              <MessageCircle className="h-9 w-9 text-yellow-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}