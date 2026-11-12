
"use client";
import { Search, MapPin } from "lucide-react";

export default function SearchBar({ onSearch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        onSearch?.({
          location: data.get("location"),
          service: data.get("service"),
        });
      }}
      className="flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm sm:flex-row"
    >
      <div className="flex flex-1 items-center gap-2">
        <MapPin className="text-green-700" size={20} />
        <input name="location" placeholder="Enter location" className="w-full p-2 text-sm outline-none" />
      </div>
      <select name="service" className="flex-1 rounded-lg border p-2 text-sm">
        <option value="">All services</option>
        <option>Veterinary Clinic</option>
        <option>Animal Hospital</option>
        <option>Pet Boarding</option>
        <option>Diagnostics</option>
        <option>Animal Ambulance</option>
        <option>Animal NGO</option>
      </select>
      <button className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white">
        <Search size={18} /> Search
      </button>
    </form>
  );
}
