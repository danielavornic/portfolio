"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link as ScrollLink } from "react-scroll";
import cn from "classnames";

import { useScrollDirection } from "@/hooks/useScrollDirection";

const Button = dynamic(() => import("@/components/common/Button"), { ssr: false });

const links = [
  { label: "About", sectionName: "about" },
  { label: "Experience", sectionName: "experience" },
  { label: "Projects", sectionName: "projects" },
  { label: "Contact", sectionName: "contact" },
];

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "sticky w-full bg-base text-text font-mono py-6 transition-all duration-500 z-20",
        {
          "-top-24": scrollDirection === "down",
          "shadow-header top-0": scrollDirection === "up",
          "shadow-none": scrollDirection === null,
        },
      )}
    >
      <div className="px-6 sm:px-10 lg:px-12 flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-2xl bg-lavender border border-lavender text-dark w-10 h-10 flex items-center justify-center hover:bg-transparent hover:text-lavender transition z-20"
        >
          DV
        </Link>

        <nav className="flex space-x-8 items-center">
          <ul className="space-x-6 hidden md:flex">
            {links.map(({ label, sectionName }, idx) => (
              <li key={label}>
                <ScrollLink
                  to={sectionName}
                  activeClass="text-lavender"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="transition-colors duration-200 cursor-default hover:text-lavender"
                >
                  <span className="text-lavender">0{idx}.</span>
                  <span className="ml-1">{label}</span>
                </ScrollLink>
              </li>
            ))}
          </ul>

          <Button
            size="sm"
            as="a"
            href="/Daniela_Vornic_Resume.pdf"
            target="_blank"
            className="hidden md:flex"
          >
            Resume
          </Button>

          <div className="block md:hidden">
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
                  {links.map(({ label, sectionName }, idx) => (
                    <li key={label}>
                      <ScrollLink
                        to={sectionName}
                        activeClass="text-lavender"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="transition-colors duration-200 cursor-default hover:text-lavender"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="text-lavender">0{idx}.</div>
                        <span className="ml-1">{label}</span>
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
                <Button className="mt-10" as="a" href="/Daniela_Vornic_Resume.pdf" target="_blank">
                  Resume
                </Button>
              </nav>
            </aside>
          </div>
        </nav>
      </div>
      {createPortal(
        <div
          className={cn(
            "fixed top-0 bottom-0 left-0 right-0 bg-base transition-opacity duration-300 opacity-0",
            { "opacity-70 z-10": isMenuOpen, "-z-10": !isMenuOpen },
          )}
          onClick={() => setIsMenuOpen(false)}
        />,
        document.body,
      )}
    </header>
  );
};

export default Header;
