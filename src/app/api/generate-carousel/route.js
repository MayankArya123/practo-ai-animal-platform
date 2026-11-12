
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const carouselSchema = {
  type: Type.OBJECT,
  properties: {
    headline: { type: Type.STRING },
    slides: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          body: { type: Type.STRING },
          visual: { type: Type.STRING },
          layout: {
            type: Type.STRING,
            enum: ["cover", "content", "list", "quote", "cta"],
          },
        },
        required: ["title", "body", "visual", "layout"],
      },
    },
    design: {
      type: Type.OBJECT,
      properties: {
        theme: { type: Type.STRING },
        primaryColor: { type: Type.STRING },
        secondaryColor: { type: Type.STRING },
        backgroundColor: { type: Type.STRING },
        fontStyle: { type: Type.STRING },
        direction: { type: Type.STRING },
      },
      required: [
        "theme",
        "primaryColor",
        "secondaryColor",
        "backgroundColor",
        "fontStyle",
        "direction",
      ],
    },
    caption: { type: Type.STRING },
    hashtags: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    researchNotes: { type: Type.STRING },
  },
  required: [
    "headline",
    "slides",
    "design",
    "caption",
    "hashtags",
    "researchNotes",
  ],
};

export async function POST(request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return Response.json(
        { error: "Gemini API key is missing." },
        { status: 500 }
      );
    }

    const {
      idea,
      platform = "Instagram",
      tone = "Professional",
      audience = "General audience",
    } = await request.json();

    if (!idea?.trim()) {
      return Response.json(
        { error: "Please enter a content idea." },
        { status: 400 }
      );
    }

    if (!["Instagram", "LinkedIn"].includes(platform)) {
      return Response.json(
        { error: "Invalid platform." },
        { status: 400 }
      );
    }

    const prompt = `
You are an expert social media strategist, content writer,
researcher and graphic designer.

Create a professional ${platform} carousel.

TOPIC: ${idea}
TARGET AUDIENCE: ${audience}
TONE: ${tone}

REQUIREMENTS:

1. Generate exactly 7 slides.
2. Slide 1 must have a powerful hook.
3. Slides 2-6 must provide useful educational information.
4. Slide 7 must have a strong call to action.
5. Titles should be short and engaging.
6. Body text should be concise and easy to read.
7. Every slide must have a visual design direction.
8. Use different appropriate layouts.
9. Maintain a consistent color palette.
10. Avoid generic AI language.
11. Never invent statistics or sources.
12. Include an engaging social media caption.
13. Generate 5-8 relevant hashtags.
14. Explain the research basis and limitations in researchNotes.

Use these layout types:
cover, content, list, quote, cta.

Return only content matching the requested JSON schema.
`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: carouselSchema,
        temperature: 0.7,
        maxOutputTokens: 5000,
      },
    });

    if (!response.text) {
      throw new Error("Gemini returned an empty response.");
    }

    const result = JSON.parse(response.text);

    if (
      !Array.isArray(result.slides) ||
      result.slides.length !== 7
    ) {
      throw new Error("Invalid carousel generated.");
    }

    return Response.json(result);

  } catch (error) {
    console.error("Carousel generation error:", error);

    return Response.json(
      {
        error: error.message || "Unable to generate carousel.",
      },
      { status: 500 }
    );
  }
}
