
import { MapPin, Star, Clock, ArrowRight } from "lucide-react";

export default function ProviderCard({ provider }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-full h-full object-cover"
        />

        <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-semibold text-green-700">
          Demo listing
        </span>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start gap-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {provider.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {provider.category}
            </p>
          </div>

          <div className="flex items-center gap-1 text-sm font-semibold text-amber-600">
            <Star size={16} fill="currentColor" />
            {provider.rating}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
          <MapPin size={16} />
          {provider.location}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <Clock size={16} />
          {provider.availability}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {provider.services.map((service) => (
            <span
              key={service}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs"
            >
              {service}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="w-full mt-5 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-colors"
        >
          View Details
          <ArrowRight size={16} />
        </button>

        <p className="text-xs text-gray-400 mt-3">
          Sample data for prototype demonstration. Ratings and availability are illustrative.
        </p>
      </div>
    </div>
  );
}
