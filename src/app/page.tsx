"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-base text-lavender">
        <h1 className="text-6xl font-bold">Hello, world!</h1>
      </main>
    </>
  );
}
