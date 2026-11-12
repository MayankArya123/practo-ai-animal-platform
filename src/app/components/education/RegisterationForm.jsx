
"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const lead = Object.fromEntries(formData.entries());

    // Prototype only: replace with a secure backend/API integration.
    console.log("Course enquiry:", lead);
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <section id="register" className="bg-[#17132D] px-5 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <p className="font-bold tracking-widest text-purple-300">START YOUR JOURNEY</p>
          <h2 className="mt-4 text-4xl font-extrabold">
            Ready to build your AI skills?
          </h2>
          <p className="mt-5 leading-8 text-gray-300">
            Share your details and our programme team can contact you
            with course information and the next steps.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-7 text-gray-900">
          {submitted ? (
            <div className="py-10 text-center">
              <CheckCircle size={45} className="mx-auto text-green-600" />
              <h3 className="mt-4 text-xl font-bold">Enquiry received!</h3>
              <p className="mt-2 text-sm text-gray-500">
                This is a prototype confirmation. No data has been sent to a server.
              </p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-5 font-bold text-purple-700">
                Submit another enquiry
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold">Get programme details</h3>

              <input name="name" required placeholder="Your full name" className="w-full rounded-xl border p-3 outline-purple-500" />
              <input name="email" type="email" required placeholder="Email address" className="w-full rounded-xl border p-3 outline-purple-500" />
              <input name="phone" type="tel" required pattern="[0-9+() -]{7,20}" placeholder="Phone number" className="w-full rounded-xl border p-3 outline-purple-500" />

              <select name="programme" required defaultValue="" className="w-full rounded-xl border bg-white p-3">
                <option value="" disabled>Select a programme</option>
                <option>Generative AI Fundamentals</option>
                <option>AI for Digital Productivity</option>
                <option>AI & Web Development</option>
              </select>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 p-4 font-bold text-white hover:bg-purple-700">
                Submit enquiry <Send size={17} />
              </button>
              <p className="text-xs text-gray-500">
                Your information should only be used to respond to your enquiry.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
