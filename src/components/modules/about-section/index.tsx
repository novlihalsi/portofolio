import { Card, Carousel } from "app/components/lib/apple-cards-carousel";
import Image from "next/image";
import React from "react";

export function AboutSection() {
  return (
    <div
      id="about-section"
      className="py-48 w-full bg-black  bg-grid-white/[0.1] relative flex items-center justify-center"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="max-w-4xl text-center px-4">
        <h2 className="text-2xl">About Me</h2>

        <p className="text-lg relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
          I'm a Frontend developer with extensive experience creating,
          developing, and maintaining web applications tailored to company
          requirements. Proficient in frontend web development using React.js,
          Vue.js, AngularJS, Ant Design, Sass, and various supporting libraries.
          Additionally, I have limited experience with hybrid mobile application
          frameworks such as React Native and Flutter.
        </p>
      </div>
    </div>
  );
}
