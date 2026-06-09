"use client";

import HeroSection from "@/components/Hero/HeroSection";

import LoveLetter from "@/components/LoveLetter/LoveLetter";

import ReasonsSlider from "@/components/Reasons/ReasonsSlider";

import LoveCounter from "@/components/Counter/LoveCounter";

import MusicPlayer from "@/components/Music/MusicPlayer";

import SectionDivider
  from "@/components/Effects/SectionDivider";

import MemoryGallery
  from "@/components/Memories/MemoryGallery";

import LoveTimeline
  from "@/components/Timeline/LoveTimeline";

import SpaceBackground
  from "@/components/Effects/SpaceBackground";

import ShootingStars
  from "@/components/Effects/ShootingStars";

import GlowCursor
  from "@/components/Effects/GlowCursor";

import { useEffect, useState }
  from "react";

import FinalMessage
  from "@/components/Ending/FinalMessage";

import LoveLoader
  from "@/components/Loader/LoveLoader";

import ParallaxBackground
  from "@/components/Effects/ParallaxBackground";

import AuroraBackground
  from "@/components/Effects/AuroraBackground";

import FloatingHearts
  from "@/components/Effects/FloatingHearts";

import ScrollProgress
  from "@/components/Effects/ScrollProgress";

export default function Home() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <main className="overflow-hidden">

      <AuroraBackground />

      <ScrollProgress />

      <LoveLoader isLoading={loading} />

      <SpaceBackground />

      <ParallaxBackground />

      <FloatingHearts />

      <ShootingStars />

      <GlowCursor />

      <MusicPlayer />

      <HeroSection />

      <SectionDivider />

      <LoveLetter />

      <SectionDivider />

      <ReasonsSlider />

      <SectionDivider />

      <LoveTimeline />

      <SectionDivider />

      <MemoryGallery />

      <SectionDivider />

      <LoveCounter />

      <SectionDivider />

      <FinalMessage />

    </main>
  );
}