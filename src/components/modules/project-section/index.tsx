import { PinContainer } from "app/components/lib/3d-pin";
import { Card, Carousel } from "app/components/lib/apple-cards-carousel";
import { HoverEffect } from "app/components/lib/card-hover-effect";
import Image from "next/image";
import React from "react";

export function ProjectSection() {
  return (
    <div
      id="project-section"
      className="w-full h-full py-20 text-center bg-black"
    >
      <h2 className="max-w-7xl mx-auto text-xl md:text-2xl font-bold text-neutral-200 font-sans">
        Recent Works
      </h2>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Travelino",
    description:
      "Travelino is a luxury travel agency that has earned a reputation as a top provider of destinations, both domestically and internationally.",
    link: "https://travellinotour.com",
    image: "/images/projects/travelino.png",
  },
  {
    title: "Personal Growth",
    description:
      "Personal Growth aims to develop a platform that serves not just as an online site but as a caring partner in each individual’s personal development.",
    link: "https://personalgrowth.co.id",
    image: "/images/projects/personal-growth.png",
  },
  {
    title: "Charm Girls Talk",
    description:
      "The website hosts a variety of beneficial articles targeted towards women, and the objective is to create a more engaging and interactive user experience.",
    link: "https://www.charmgirlstalk.com",
    image: "/images/projects/charm.png",
  },
  {
    title: "Jakarta Vet",
    description:
      "Develop a system that allows patient medical records from all branches to be integrated into one application, making data access easy and fast.",
    link: "https://pos.jakartavet.com",
    image: "/images/projects/jakvet.png",
  },
  {
    title: "Halo Hermina",
    description:
      "Developing a mobile app to streamline access to doctor schedules, appointment booking, prescription medication, and self check-in, while providing easy access to medical history, all aimed at enhancing healthcare services.",
    link: "https://play.google.com/store/apps/details?id=com.megahmuliamandiritama.bluespider.hermina&hl=en",
    image: "/images/projects/halo-hermina.png",
  },
  {
    title: "Erafos (Erajaya for Sales)",
    description:
      "A sales monitory app is designed to monitor the quantity and quality of the day-to-day activities used by sales people",
    link: "https://play.google.com/store/apps/details?id=com.eraspace.erafos&hl=en",
    image: "/images/projects/erafos.png",
  },
];
