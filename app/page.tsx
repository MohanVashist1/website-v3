"use client";

import About from "./about";
import Landing from "./landing-page";
import Projects from "./projects";

export default function Home() {
  return (
    <div>
      <section id="main">
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
