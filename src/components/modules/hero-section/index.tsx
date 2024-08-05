import { Spotlight } from "app/components/lib/spotlight";
import React from "react";

export default function HeroSection() {
  return (
    <div className="h-[100vh] w-full relative flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-4xl mx-auto p-4">
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-lg text-center relative z-10">
          Hello
        </p>
        <p></p>
        <h1 className="relative z-10 text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          I'm Ahmad Noveliansyah
        </h1>
        <p className="text-neutral-500 max-w-xl mx-auto my-4 text-base text-center relative z-10">
          I can transform caffeine into stunning websites. <br /> Let’s brew
          some code magic together!
        </p>

        <div className="mt-8 flex justify-center text-center">
          <a
            href="mailto:ahmadnoveli@gmail.com"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Contact Me
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
