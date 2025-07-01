"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "@/components/features/Hero";
import FirstVideo from "@/components/features/FirstVideo";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Hero />
      <FirstVideo />
    </main>
  );
}
