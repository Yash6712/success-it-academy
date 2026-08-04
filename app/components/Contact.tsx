import {
  Mail,
  MapPin,
  Phone,
  Clock3,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              Contact Us
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
              Start Your IT Career Journey Today
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              Contact Success IT Academy for course details, free demo
              registration and career guidance.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:+918329345893"
                className="flex items-start gap-4 rounded-2xl border border-gray-200 p-5 transition hover:border-yellow-400 hover:shadow-lg"
              >
                <div className="rounded-xl bg-yellow-100 p-3 text-yellow-700">
                  <Phone className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="mt-1 text-gray-600">
                    +91 8329345893
                  </p>
                </div>
              </a>

              <a
                href="mailto:successitacademy@gmail.com"
                className="flex items-start gap-4 rounded-2xl border border-gray-200 p-5 transition hover:border-yellow-400 hover:shadow-lg"
              >
                <div className="rounded-xl bg-yellow-100 p-3 text-yellow-700">
                  <Mail className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Email Us
                  </p>

                  <p className="mt-1 text-gray-600">
                    successitacademy@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 p-5">
                <div className="rounded-xl bg-yellow-100 p-3 text-yellow-700">
                  <MapPin className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Location
                  </p>

                  <p className="mt-1 text-gray-600">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 p-5">
                <div className="rounded-xl bg-yellow-100 p-3 text-yellow-700">
                  <Clock3 className="h-6 w-6" />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Support Hours
                  </p>

                  <p className="mt-1 text-gray-600">
                    Monday - Sunday
                    <br />
                    9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl bg-[#0B1F3A] p-8 text-white shadow-2xl sm:p-10">
            <h3 className="text-2xl font-bold">
              Connect With Us
            </h3>

            <p className="mt-3 text-slate-300">
              Follow our social media pages for career guidance,
              interview tips and batch updates.
            </p>

            <div className="mt-8 grid gap-4">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
              >
                <FaInstagram className="text-2xl text-yellow-400" />
                <span>Instagram</span>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
              >
                <FaLinkedin className="text-2xl text-yellow-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
              >
                <FaYoutube className="text-2xl text-yellow-400" />
                <span>YouTube</span>
              </a>
            </div>

            <div className="mt-10 rounded-2xl bg-yellow-400 p-6 text-[#0B1F3A]">
              <p className="text-sm font-semibold">
                Need Course Details?
              </p>

              <p className="mt-2 text-2xl font-extrabold">
                +91 8329345893
              </p>

              <a
                href="https://wa.me/918329345893"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-lg bg-[#0B1F3A] px-5 py-3 font-bold text-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}