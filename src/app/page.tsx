"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Socials = dynamic(() => import("@/components/Socials"), { ssr: false });
const Email = dynamic(() => import("@/components/Email"), { ssr: false });

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Socials />
      <Email />
      <main className="container flex min-h-[120vh] py-24 text-lavender">
        <h1 className="text-6xl font-bold">Hello, world!</h1>
      </main>
    </>
  );
}
