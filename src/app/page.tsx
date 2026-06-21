"use client";

import { useState } from "react";

import LandingHero from "../components/sections/LandingHero";
import MainInvitation from "../components/sections/MainInvitation";

import FloatingPetals from "../components/effects/FloatingPetals";
import FloatingDaisies from "../components/effects/FloatingDaisies";
import Butterfly from "../components/effects/Butterfly";

import MusicPlayer from "../components/comman/MusicPlayer";

export default function Home() {
  const [opened, setOpened] =
    useState(false);

  return (
    <>
      <FloatingPetals />
      <FloatingDaisies />
      <Butterfly />

      <MusicPlayer />

      {!opened ? (
        <LandingHero
          onOpen={() =>
            setOpened(true)
          }
        />
      ) : (
        <MainInvitation />
      )}
    </>
  );
}
