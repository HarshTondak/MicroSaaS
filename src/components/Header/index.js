"use client";
import Link from "next/link";
import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../Icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-5 sm:px-8 flex items-center justify-between mt-2">
      <Logo />

      <button
        className="inline-block sm:hidden z-50 cursor-pointer pr-4"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark 
              dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark 
              dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark 
              dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className="py-3 px-6 sm:px-8 border border-solid border-dark 
        rounded-full font-bold capitalize items-center flex sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300 gap-8 dark:border-white"
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link
          href="/"
          className={`hover:scale-105 transition-all duration-300 ${
            path === "/" ? "underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/blog"
          className={`hover:scale-105 transition-all duration-300 ${
            path === "/blog" ? "underline" : ""
          }`}
        >
          Blog
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`w-6 h-6 ease flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <nav
        className="py-3 px-8 border border-solid border-dark rounded-full 
        font-bold capitalize items-center hidden sm:flex fixed top-6 right-1/2 
        translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 sm:gap-4 md:gap-8 lg:gap-10"
      >
        <Link
          href="/"
          className={`hover:scale-105 transition-all duration-300 ${
            path === "/" ? "underline" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/blog"
          className={`hover:scale-105 transition-all duration-300 ${
            path === "/blog" ? "underline" : ""
          }`}
        >
          Blog
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`w-6 h-6 ease flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <div className="hidden sm:flex items-center">
        <a
          href="mailto:hello@microsaascapital.com"
          className="w-fit flex items-stretch bg-dark font-bold
        dark:bg-light py-2 px-4 rounded-full mx04 text-white dark:text-black
        hover:scale-105 transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>
    </header>
  );
};

export default Header;
