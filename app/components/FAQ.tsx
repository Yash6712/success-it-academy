"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer comprehensive training in Cloud Engineering, DevOps, Data Engineering, and IT Support, complete with hands-on real-world projects.",
  },
  {
    question: "Is there placement assistance provided?",
    answer: "Yes, we offer 100% placement support, including resume building, mock interviews, and direct referral opportunities.",
  },
  {
    question: "Can beginners with non-IT backgrounds join?",
    answer: "Absolutely! Our courses are structured from the ground up, making them ideal for both beginners and professionals looking to transition into IT.",
  },
  {
    question: "How does the 24×7 mentorship work?",
    answer: "You get continuous access to dedicated mentors and technical support channels to resolve your queries whenever you get stuck.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow mb-4 overflow-hidden border border-slate-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-5 font-semibold text-slate-800 flex justify-between items-center focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-xl text-amber-500 font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-slate-600 border-t border-slate-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}