import Navbar from "../app/components/shared/Navbar";
import Footer from "../app/components/shared/Footer";
import Hero from "../app/components/animal-care/Hero";
import ServiceCategories from "../app/components/animal-care/ServiceCategories";
import ProviderList from "../app/components/animal-care/ProviderList";
import HowItWorks from "../app/components/animal-care/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceCategories />
        <ProviderList />
        <HowItWorks />
        <section
          id="list-business"
          className="mx-auto max-w-7xl px-5 py-20"
        >
          <div className="rounded-3xl bg-green-800 p-10 text-white md:p-16">
            <h2 className="text-3xl font-extrabold">
              Are you an animal-care provider?
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-green-100">
              Help pet parents discover your clinic, hospital or animal-care
              service. Register your business on our platform.
            </p>
            <a
              href="mailto:hello@example.com?subject=Business%20Listing"
              className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-bold text-green-800"
            >
              List your business
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
