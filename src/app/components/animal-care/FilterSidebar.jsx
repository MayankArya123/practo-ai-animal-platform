"use client";

export default function FilterSidebar({ filters, setFilters }) {
  return (
    <aside className="space-y-5 rounded-2xl border bg-white p-5">
      <h3 className="font-bold text-gray-900">Refine your search</h3>

      <div>
        <label className="text-sm font-semibold">Provider type</label>
        <select
          value={filters.category}
          onChange={(e) =>
            setFilters({ ...filters, category: e.target.value })
          }
          className="mt-2 w-full rounded-lg border p-3 text-sm"
        >
          <option value="All">All providers</option>
          <option value="Veterinary Clinic">Veterinary Clinic</option>
          <option value="Animal Hospital">Animal Hospital</option>
          <option value="Pet Boarding">Pet Boarding</option>
        </select>
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={filters.verified}
          onChange={(e) =>
            setFilters({ ...filters, verified: e.target.checked })
          }
        />
        Verified providers only
      </label>

      <button
        onClick={() => setFilters({ category: "All", verified: false })}
        className="text-sm font-semibold text-green-700"
      >
        Clear filters
      </button>
    </aside>
  );
}
