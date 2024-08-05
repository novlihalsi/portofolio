import { Card, Carousel } from "app/components/lib/apple-cards-carousel";
import { InfiniteMovingCards } from "app/components/lib/infinite-moving-cards";
import Image from "next/image";
import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Next.js",
  "Vue.js",
  "AngularJS",
  "Ant Design",
  "GSAP",
  "Flutter",
  "React Native",
  "Ionic",
];

export function SkillSection() {
  return (
    <div
      id="skill-section"
      className="py-10 w-full bg-black relative flex items-center justify-center"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="text-center px-4">
        {/* <h2 className="text-2xl mb-4">Skill</h2> */}
        <InfiniteMovingCards
          items={skills.map((item) => ({ text: item }))}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
