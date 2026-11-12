
import { Laptop, Lightbulb, BriefcaseBusiness, Users } from "lucide-react";

const benefits = [
  { icon: Laptop, title: "Hands-on learning", text: "Learn through practical exercises and projects." },
  { icon: Lightbulb, title: "Real-world AI tools", text: "Explore tools used in modern digital workflows." },
  { icon: BriefcaseBusiness, title: "Career-focused skills", text: "Build skills relevant to emerging opportunities." },
  { icon: Users, title: "Mentor guidance", text: "Get guidance throughout your learning journey." },
];

export default function Benefits() {
  return (
    <section className="bg-[#F8F7FC] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Why learn with us?
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white p-7 shadow-sm">
              <Icon size={32} className="text-purple-600" />
              <h3 className="mt-5 font-bold text-gray-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
