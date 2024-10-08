"use client";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2
                sm:m-10 flex flex-col items-center text-light dark:text-dark"
    >
      <h3
        className="mt-16 font-medium text-center capitalize 
                  text-xl sm:text-2xl lg:text-3xl px-4"
      >
        Not sure if your business meets our criteria?
      </h3>
      <p
        className="mt-5 px-4 text-center w-full sm:w-3/4 lg:w-2/3
                    font-medium text-sm sm:text-base lg:text-lg"
      >
        Get in touch anyway - we&apos;ll let you know quickly, we&apos;re always
        happy to meet fellow founders, and we may connect you with partners we
        know who can help!
      </p>

      <a
        href="mailto:hello@microsaascapital.com"
        className="mt-6 flex bg-light font-bold py-2 px-4 
        dark:bg-dark rounded-full text-dark dark:text-white
        hover:scale-105 transition-all duration-300"
      >
        Get In Touch
      </a>

      <div
        className="w-full mt-16 relative font-medium border-t border-solid 
         border-light dark:border-dark py-14 px-8 flex flex-col md:flex-row 
         items-center md:items-start justify-evenly gap-10 md:gap-0"
      >
        <div
          className="flex flex-col gap-2 justify-center items-center 
                    md:items-start text-center md:text-start max-w-60"
        >
          <span className="font-bold text-xl">&copy;Micro SaaS Capital</span>
          <span>Made with &hearts;</span>
          <span>Our team is based in Toronto, Canada 🍁</span>
          <span>We invest worldwide.</span>
          <a
            href="mailto:hello@microsaascapital.com"
            className="underline"
            target="_blank"
          >
            Contact Us
          </a>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10">
          <div
            className="flex flex-col gap-2 justify-center items-center 
                    md:items-start text-center md:text-start max-w-80"
          >
            <span className="font-bold text-xl">Founders:</span>
            <a
              href="mailto:hello@microsaascapital.com"
              className="underline"
              target="_blank"
            >
              Say Hello!
            </a>
            <span>
              We love meeting fellow founders and following your journey over
              many years. Send us your blog!
            </span>

            <a
              href="mailto:hello@microsaascapital.com"
              className="underline"
              target="_blank"
            >
              Get Our Newsletter
            </a>
            <span>
              Our best ideas and curated resources for SaaS founders -
              thoughtful and succinct - max 2 emails a year!
            </span>
          </div>

          <div
            className="flex flex-col gap-2 justify-center items-center 
                    md:items-start text-center md:text-start max-w-80"
          >
            <span className="font-bold text-xl">Partners:</span>
            <a
              href="mailto:hello@microsaascapital.com"
              className="underline"
              target="_blank"
            >
              Join Our Scout Program
            </a>
            <span>
              Connect us with awesome SaaS founders and we&apos;ll pay finders
              fees.
            </span>

            <a
              href="mailto:hello@microsaascapital.com"
              className="underline"
              target="_blank"
            >
              Invest With US
            </a>
            <span>
              We partner with founders to compound sustainable (profitable)
              growth over the long-term.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
