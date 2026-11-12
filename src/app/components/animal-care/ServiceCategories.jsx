import {
  Stethoscope, Hospital, House, TestTube,
  Ambulance, HeartHandshake
} from "lucide-react";

const services = [
  { name: "Veterinary Clinics", icon: Stethoscope },
  { name: "Animal Hospitals", icon: Hospital },
  { name: "Pet Boarding", icon: House },
  { name: "Diagnostics", icon: TestTube },
  { name: "Animal Ambulance", icon: Ambulance },
  { name: "Animal NGOs", icon: HeartHandshake },
];

export default function ServiceCategories() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20">
      <div className="mb-10">
        <p className="font-bold tracking-widest text-sm text-green-700">OUR SERVICES</p>
        <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
          Everything your pet needs
        </h2>
        <p className="mt-3 text-gray-500">
          Explore animal-care services available in your area.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {services.map(({ name, icon: Icon }) => (
          <a
            key={name}
            href="#providers"
            className="group rounded-2xl border border-gray-100 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700 transition group-hover:bg-green-700 group-hover:text-white">
              <Icon size={27} />
            </div>
            <h3 className="mt-4 text-sm font-bold text-gray-800">{name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
