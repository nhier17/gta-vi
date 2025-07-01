"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "@/components/features/Hero";
import FirstVideo from "@/components/features/FirstVideo";
import Jason from "@/components/features/Jason";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Hero />
      <FirstVideo />
      <Jason />
    </main>
  );
}
