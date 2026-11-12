import { Search, ClipboardCheck, Heart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover services",
    description: "Search for animal-care providers and explore available services.",
  },
  {
    icon: ClipboardCheck,
    title: "Compare providers",
    description: "Review service information, ratings and provider details.",
  },
  {
    icon: Heart,
    title: "Choose with confidence",
    description: "Contact the provider and arrange the care your animal needs.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20">
      <div className="text-center">
        <p className="text-sm font-bold tracking-widest text-green-700">SIMPLE PROCESS</p>
        <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
          Animal care made easier
        </h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div key={title} className="rounded-2xl bg-[#F5F8F3] p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <Icon size={30} />
            </div>
            <p className="mt-5 text-xs font-bold tracking-widest text-green-700">
              STEP 0{index + 1}
            </p>
            <h3 className="mt-2 text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-3 leading-7 text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
