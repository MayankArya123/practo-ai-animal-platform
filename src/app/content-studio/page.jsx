"use client";
import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import IdeaInput from "./IdeaInput";
import CarouselPreview from "./CarouselPreview";
import WorkFlowSteps from "./WorkFlow";

import {
  Sparkles,
  WandSparkles,
  RotateCcw,
  AlertCircle,
} from "lucide-react";

export default function ContentStudio() {
  const [carousel, setCarousel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [lastIdea, setLastIdea] = useState(null);

  const generateCarousel = async (formData) => {
    try {
      setLoading(true);
      setError("");

      setPlatform(formData.platform);
      setLastIdea(formData);

      const response = await fetch("/api/generate-carousel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to generate carousel."
        );
      }

      setCarousel(result);

    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const regenerateCarousel = () => {
    if (lastIdea) {
      generateCarousel(lastIdea);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Sparkles size={14} />
            AI POWERED CONTENT STUDIO
          </div>

          <div className="flex flex-wrap justify-between items-start gap-4">

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Create engaging carousels
              </h1>

              <p className="text-gray-500 mt-3 max-w-2xl">
                Turn your raw ideas into professional Instagram
                and LinkedIn carousels with AI-generated content,
                visual direction and editable designs.
              </p>
            </div>

            {carousel && (
              <button
                onClick={() => {
                  setCarousel(null);
                  setError("");
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium hover:bg-gray-100"
              >
                <RotateCcw size={16} />
                New carousel
              </button>
            )}

          </div>
        </div>

        {/* Workflow */}
        <div className="mb-8">
          <WorkFlowSteps currentStep={carousel ? 4 : 1} />
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 flex gap-3 items-start bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
            <AlertCircle size={20} className="shrink-0 mt-0.5" />

            <div>
              <p className="font-semibold text-sm">
                Carousel generation failed
              </p>

              <p className="text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="mb-8">
          <IdeaInput
            onGenerate={generateCarousel}
            loading={loading}
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="bg-white border rounded-2xl p-10 text-center mb-8">
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center animate-pulse">
                <WandSparkles
                  size={28}
                  className="text-violet-600"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900">
              Creating your carousel...
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              AI is developing headlines, slide content,
              layouts and visual directions.
            </p>

            <div className="w-full max-w-sm h-2 bg-gray-100 rounded-full mx-auto mt-6 overflow-hidden">
              <div className="h-full w-1/2 bg-violet-600 rounded-full animate-pulse" />
            </div>
          </div>
        )}

        {/* Generated Carousel */}
        {carousel && !loading && (
          <div className="space-y-6">

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex flex-wrap justify-between items-center gap-3">
              <div>
                <p className="font-semibold text-green-800">
                  Your carousel is ready!
                </p>

                <p className="text-sm text-green-700 mt-1">
                  {carousel.slides.length} slides generated for {platform}.
                </p>
              </div>

              <button
                onClick={regenerateCarousel}
                className="flex items-center gap-2 bg-white border border-green-300 rounded-lg px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-100"
              >
                <RotateCcw size={16} />
                Regenerate
              </button>
            </div>

            <CarouselPreview
              data={carousel}
              onUpdate={setCarousel}
              platform={platform}
            />

          </div>
        )}

      </main>

      <Footer />

    </div>
  );
}
