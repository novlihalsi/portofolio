import { ReactElement } from "react";
import BaseLayout from "app/components/templates/base-layout";
import HeroSection from "app/components/modules/hero-section";
import { ProjectSection } from "app/components/modules/project-section";
import { AboutSection } from "app/components/modules/about-section";
import { SkillSection } from "app/components/modules/skill-section";

export default function Home() {
  return (
    <div id="home-page">
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
