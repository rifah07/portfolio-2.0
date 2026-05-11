import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Resume from "@/components/sections/resume";
import Contact from "@/components/sections/contact";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <div className="gradient-mesh">
      <Hero />
      <About />
      <Skills />
      <Projects projects={featuredProjects} showAll={false} />
      <Resume />
      <Contact />
    </div>
  );
}
