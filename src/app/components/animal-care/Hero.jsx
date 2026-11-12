
"use client";

import { useState } from "react";
import { Search, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  function searchCare(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (service) params.set("service", service);
    window.location.href = `/?${params.toString()}#providers`;
  }

  return (
    <section className="overflow-hidden bg-[#F1F7EF]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
            A better world for every paw
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Better care.
            <br />
            <span className="text-green-700">Happier paws.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Discover trusted veterinary clinics, animal hospitals,
            boarding facilities and essential pet services near you.
          </p>

          <form onSubmit={searchCare}
            className="mt-9 flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-lg sm:flex-row">
            <div className="flex flex-1 items-center gap-2 px-2">
              <MapPin className="shrink-0 text-green-700" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or location"
                className="min-w-0 w-full py-3 text-sm outline-none"
              />
            </div>

            <div className="flex flex-1 items-center gap-2 px-2">
              <Search className="shrink-0 text-green-700" />
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-white py-3 text-sm text-gray-600 outline-none"
              >
                <option value="">All animal-care services</option>
                <option>Veterinary Clinic</option>
                <option>Animal Hospital</option>
                <option>Pet Boarding</option>
                <option>Diagnostics</option>
                <option>Animal Ambulance</option>
                <option>Animal NGO</option>
              </select>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-green-700 px-7 py-3 font-bold text-white hover:bg-green-800">
              Find care <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
            <ShieldCheck size={18} className="text-green-700" />
            Explore animal-care providers in one place
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1000"
            alt="Happy dog"
            className="h-[360px] w-full rounded-[2rem] object-cover shadow-xl md:h-[490px]"
          />
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-5 shadow-xl md:-left-6">
            <p className="font-bold text-gray-900">Every paw matters</p>
            <p className="mt-1 text-sm text-gray-500">Find the care they deserve.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
