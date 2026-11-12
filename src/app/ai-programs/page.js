import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import CourseHero from "../components/education/CourseHero";
import CourseCard from "../components/education/CourseCard";
import Benefits from "../components/education/Benefits";
import RegistrationForm from "../components/education/RegisterationForm";
import { courses } from "../data/courses";

export default function AIProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <CourseHero />
        <section id="courses" className="mx-auto max-w-7xl px-5 py-20">
          <p className="text-sm font-bold tracking-widest text-purple-700">
            OUR PROGRAMMES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
            Learn skills that move you forward
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
        <Benefits />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
}
