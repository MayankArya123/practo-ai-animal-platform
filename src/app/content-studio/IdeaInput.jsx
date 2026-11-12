"use client";

import { useState } from "react";
import {
  Sparkles,
  Lightbulb,
  Users,
  Palette,
  Instagram,
} from "lucide-react";

export default function IdeaInput({ onGenerate, loading }) {
  const [idea, setIdea] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [audience, setAudience] = useState("Students and professionals");
  const [tone, setTone] = useState("Professional");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!idea.trim()) return;

    onGenerate({
      idea,
      platform,
      audience,
      tone,
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-violet-100 text-violet-700 p-3 rounded-xl">
          <Lightbulb size={23} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Create your carousel
          </h2>
          <p className="text-sm text-gray-500">
            Turn your raw idea into engaging content with AI.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Idea */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            What's your idea?
          </label>

          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Example: How AI is transforming the future of education..."
            rows={5}
            maxLength={1500}
            required
            className="w-full border border-gray-300 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-violet-500 resize-none"
          />

          <p className="text-xs text-gray-400 text-right mt-1">
            {idea.length}/1500 characters
          </p>
        </div>

        {/* Platform */}
        <div>
          <label className="block text-sm font-semibold mb-3 text-gray-700">
            <span className="inline-flex items-center gap-2">
              Publishing platform
            </span>
          </label>

          <div className="grid grid-cols-2 gap-3">

            <button
              type="button"
              onClick={() => setPlatform("Instagram")}
              className={`p-4 rounded-xl border flex items-center justify-center gap-2 font-medium transition ${
                platform === "Instagram"
                  ? "border-violet-600 bg-violet-50 text-violet-700"
                  : "border-gray-200 text-gray-600"
              }`}
            >

              Instagram
            </button>

            <button
              type="button"
              onClick={() => setPlatform("LinkedIn")}
              className={`p-4 rounded-xl border flex items-center justify-center gap-2 font-medium transition ${
                platform === "LinkedIn"
                  ? "border-violet-600 bg-violet-50 text-violet-700"
                  : "border-gray-200 text-gray-600"
              }`}
            >
              LinkedIn
            </button>

          </div>
        </div>

        {/* Audience */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-700">
            <Users size={16} />
            Target audience
          </label>

          <input
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="Students, founders, developers..."
            maxLength={120}
            className="w-full border border-gray-300 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        {/* Tone */}
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-700">
            <Palette size={16} />
            Content tone
          </label>

          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full border border-gray-300 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-violet-500 bg-white"
          >
            <option>Professional</option>
            <option>Educational</option>
            <option>Conversational</option>
            <option>Inspirational</option>
            <option>Creative</option>
            <option>Persuasive</option>
          </select>
        </div>

        {/* Generate */}
        <button
          type="submit"
          disabled={loading || !idea.trim()}
          className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white font-semibold py-4 rounded-xl transition"
        >
          <Sparkles size={19} />

          {loading ? "Generating your carousel..." : "Generate Carousel"}
        </button>

        <p className="text-xs text-gray-400 text-center">
          AI will generate 7 slides with copy and visual directions.
        </p>

      </form>
    </div>
  );
}
