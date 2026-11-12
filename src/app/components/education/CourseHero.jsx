import Link from "next/link";
import { ArrowRight, BrainCircuit, Sparkles } from "lucide-react";

export default function CourseHero() {
  return (
    <section className="overflow-hidden bg-[#17132D] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-purple-200">
            <Sparkles size={16} /> Learn skills for the future
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight md:text-6xl">
            Build your future with
            <span className="text-purple-400"> Artificial Intelligence.</span>
          </h1>

          <p className="mt-6 max-w-xl leading-8 text-gray-300">
            Practical AI and digital-skills programmes designed for
            students and young professionals who want to turn knowledge
            into real-world skills.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="#register" className="rounded-xl bg-purple-500 px-7 py-4 font-bold hover:bg-purple-600">
              Explore programmes <ArrowRight className="ml-2 inline" size={18} />
            </Link>
            <Link href="#courses" className="rounded-xl border border-white/30 px-7 py-4 font-semibold hover:bg-white/10">
              View courses
            </Link>
          </div>
        </div>

        <div className="flex min-h-[330px] items-center justify-center rounded-[2rem] border border-purple-300/20 bg-gradient-to-br from-purple-600/40 to-blue-500/20">
          <div className="text-center">
            <BrainCircuit size={115} strokeWidth={1} className="mx-auto text-purple-300" />
            <p className="mt-6 text-xl font-bold">Learn. Create. Innovate.</p>
            <p className="mt-2 text-sm text-purple-200">Practical AI learning ecosystem</p>
          </div>
        </div>
      </div>
    </section>
  );
}
