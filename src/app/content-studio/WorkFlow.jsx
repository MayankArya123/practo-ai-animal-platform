"use client";

import {
  Lightbulb,
  BrainCircuit,
  Palette,
  Layers,
  Download,
  Check,
} from "lucide-react";

const steps = [
  { title: "Idea", description: "Founder enters an idea", icon: Lightbulb },
  { title: "AI Content", description: "AI creates the copy", icon: BrainCircuit },
  { title: "Design", description: "Visual direction and layouts", icon: Palette },
  { title: "Preview", description: "Review and edit slides", icon: Layers },
  { title: "Export", description: "Download ready-to-publish content", icon: Download },
];

export default function WorkFlowSteps({ currentStep = 1 }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <h3 className="font-bold text-gray-900 mb-5">
        Content creation workflow
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const completed = index + 1 < currentStep;
          const active = index + 1 === currentStep;

          return (
            <div key={step.title} className="flex flex-col items-center text-center gap-2">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  completed
                    ? "bg-green-100 text-green-700"
                    : active
                    ? "bg-violet-100 text-violet-700"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {completed ? <Check size={20} /> : <Icon size={20} />}
              </div>

              <p className="text-sm font-semibold text-gray-800">
                {step.title}
              </p>

              <p className="text-xs text-gray-500">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
