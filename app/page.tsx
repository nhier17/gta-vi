"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "@/components/features/Hero";
import FirstVideo from "@/components/features/FirstVideo";
import Jason from "@/components/features/Jason";
import SecondVideo from "@/components/features/SecondVideo";
import Lucia from "@/components/features/Lucia";
import Postcard from "@/components/features/Postcard";
import Outro from "@/components/features/Outro";
import Final from "@/components/features/Final";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
      <Postcard />
      <Final />
      <Outro />
    </main>
  );
}
