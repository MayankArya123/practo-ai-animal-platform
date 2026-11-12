import { Clock, ArrowUpRight } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
        {course.level}
      </span>

      <h3 className="mt-5 text-xl font-bold text-gray-900">
        {course.title}
      </h3>

      <p className="mt-3 min-h-16 leading-7 text-gray-600">
        {course.description}
      </p>

      <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
        <Clock size={17} /> {course.duration}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {course.skills.map((skill) => (
          <span key={skill} className="rounded-lg bg-gray-100 px-3 py-2 text-xs text-gray-700">
            {skill}
          </span>
        ))}
      </div>

      <a href="#register" className="mt-7 flex items-center justify-between border-t pt-5 font-bold text-purple-700">
        Enquire now <ArrowUpRight size={19} />
      </a>
    </article>
  );
}
