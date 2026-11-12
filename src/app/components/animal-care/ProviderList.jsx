
"use client";
import { useMemo, useState } from "react";
import { providers } from "../../data/provider";
import ProviderCard from "../animal-care/ProviderCard";
import { Search } from "lucide-react";

export default function ProviderList() {
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("");

  const filteredProviders = useMemo(() => {
    return providers.filter((provider) => {
      const matchesCategory =
        category === "All" || provider.category === category;

      const matchesLocation =
        provider.location.toLowerCase().includes(location.toLowerCase());

      return matchesCategory && matchesLocation;
    });
  }, [category, location]);

  return (
    <section id="providers" className="bg-[#F8FAF7] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-sm font-bold tracking-widest text-green-700">DISCOVER CARE</p>
        <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
          Popular animal-care providers
        </h2>
        <p className="mt-3 text-gray-500">
          Explore sample providers and find services for your animal.
        </p>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          <div className="flex items-center gap-3 rounded-xl border bg-white px-4">
            <Search className="text-green-700" size={20} />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Filter by city"
              className="w-full py-3 outline-none"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border bg-white px-4 py-3 text-sm"
          >
            <option>All</option>
            <option>Veterinary Clinic</option>
            <option>Animal Hospital</option>
            <option>Pet Boarding</option>
          </select>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>

        {filteredProviders.length === 0 && (
          <p className="mt-10 text-center text-gray-500">
            No matching providers found. Try changing your filters.
          </p>
        )}
      </div>
    </section>
  );
}
