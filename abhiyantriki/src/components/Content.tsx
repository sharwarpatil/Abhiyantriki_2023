import { Component, createEffect } from "solid-js";
import Navbar from "./Navbar";
import Home from "./Home";
import Events from "./Events/Events";
import Expos from "./Expos/Expos";
import Involve from "./Involve";
import Sponsors from "./Sponsors";
import Contact from "./Contact";

const Content: Component = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>
      entry.target.classList.toggle("show", entry.isIntersecting),
    );
  });

  createEffect(() => {
    const els = document.querySelectorAll(".hide");
    els.forEach((el) => observer.observe(el));
  });

  return (
    <div class="overflow-hidden bg-slate-900 text-white">
      <Navbar />

      <main>
        <Home />
        <Events />
        <Expos />
        <Involve />
        <Sponsors />
      </main>

      <Contact />
    </div>
  );
};

export default Content;
