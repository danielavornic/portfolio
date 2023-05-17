"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Header = dynamic(() => import("@/components/layout/Header"), { ssr: false });
const Socials = dynamic(() => import("@/components/homepage/Socials"), { ssr: false });
const Email = dynamic(() => import("@/components/homepage/Email"), { ssr: false });
const Hero = dynamic(() => import("@/components/homepage/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/homepage/About"), { ssr: false });
const Experience = dynamic(() => import("@/components/homepage/Experience"), { ssr: false });

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Socials />
      <Email />
      <main className="container sm:px-24 md:px-28 lg:px-32 text-lavender min-h-screen">
        <Hero />
        <About />
        <Experience />
        <div className="h-96 bg-dark" />
      </main>
    </>
  );
}
