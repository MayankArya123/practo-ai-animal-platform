"use client";
import { useState } from "react";
import {
    Sparkles,
    Instagram,
    Linkedin,
    Lightbulb,
    Users,
    Palette,
} from "lucide-react";

export default function IdeaInput({ onGenerate, loading }) {
   
 return (
        <div
            id="carousel-export-slides"
            className="fixed top-0 pointer-events-none"
            style={{
                left: "-12000px",
                width: "1080px",
            }}
        >
            {data.slides.map((item, index) => (
                <div key={index} style={{ width: "1080px" }}>
                    <SlideDesign
                        slide={item}
                        index={index}
                        total={data.slides.length}
                        design={data.design}
                        platform={platform}
                    />
                </div>
            ))}
        </div>
    );
}
