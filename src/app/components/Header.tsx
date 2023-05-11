"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import cn from "classnames";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import Button from "@/components/Button";

const links = [
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Experience",
    url: "#experience",
  },
  {
    label: "Projects",
    url: "#projects",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [page, setPage] = useState("");
  const scrollDirection = useScrollDirection();

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => setPage("");
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setPage(hash);
      }
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header
      className={cn("sticky bg-base text-text py-6 px-6 lg:px-0 transition-all duration-500", {
        "-top-24": scrollDirection === "down",
        "shadow-header top-0": scrollDirection === "up",
        "shadow-none": scrollDirection === null,
      })}
    >
      <div className="container lg:px-0 mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-2xl bg-lavender text-dark w-10 h-10 flex items-center justify-center hover:bg-mauve transition z-20 "
        >
          DV
        </Link>

        <nav className="flex space-x-8 items-center" ref={headerRef}>
          <ul className="space-x-6 hidden md:flex">
            {links.map((link, idx) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  className={cn("hover:text-lavender transition-colors duration-200", {
                    "text-lavender": page === link.url,
                  })}
                >
                  <span className="text-lavender">0{idx}.</span>
                  <span className="ml-1">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <Button size="sm" as="a" href="#" target="_blank" className="hidden md:flex">
            Resume
          </Button>

          <div className="block md:hidden" id="side-menu">
            <button
              className="text-lavender hover:text-dark transition-colors duration-200 z-30 flex justify-center items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="z-30 relative flex flex-col">
                <span
                  className={cn(
                    "w-8 h-0.5 bg-lavender transition ease transform duration-300 block my-1",
                    { "rotate-45 translate-y-3": isMenuOpen },
                  )}
                />
                <span
                  className={cn(
                    "w-8 h-0.5 bg-lavender transition ease transform duration-300 block my-1.5",
                    { "opacity-0": isMenuOpen },
                  )}
                />
                <span
                  className={cn(
                    "w-8 h-0.5 bg-lavender transition ease transform duration-300 block my-1",
                    { "-rotate-45 -translate-y-3": isMenuOpen },
                  )}
                />
              </div>
            </button>

            <aside
              className={cn(
                "flex fixed justify-center top-0 bottom-0 right-0 px-2 py-12 min-w-[min(75vw,400px)] bg-[#28283e] transition items-center shadow-menu translate-x-0 z-20",
                { "translate-x-[110%]": !isMenuOpen },
              )}
            >
              <nav className="w-full flex justify-between flex-col items-center">
                <ul className="space-y-6 text-center">
                  {links.map((link, idx) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        className={cn("hover:text-lavender transition-colors duration-200", {
                          "text-lavender": page === link.url,
                        })}
                      >
                        <div className="text-lavender">0{idx}.</div>
                        <span className="ml-1">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <Button className="mt-10" as="a" href="#" target="_blank">
                  Resume
                </Button>
              </nav>
            </aside>
          </div>
        </nav>
      </div>
      <div
        className={cn(
          "fixed top-0 bottom-0 left-0 right-0 bg-base transition-opacity duration-300 opacity-0",
          { "opacity-70 z-10": isMenuOpen, "-z-10": !isMenuOpen },
        )}
        onClick={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

export default Header;