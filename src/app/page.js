import Accordian, { AccordianItem } from "@/components/Accordian";
import Image from "next/image";

export const metadata = {
  title: "Micro SaaS Capital",
};

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center mt-8 rounded-2xl m-2
    sm:m-10 text-dark dark:text-white"
    >
      <div className="my-10 md:my-20 font-light flex flex-col items-center text-center">
        <div className="text-5xl md:text-6xl lg:text-7xl w-full lg:w-3/4 px-2">
          We <span className="font-medium">acquire</span>,{" "}
          <span className="font-medium">build</span>, and{" "}
          <span className="font-medium">grow</span> amazing software businesses.
        </div>
        <div className="text-5xl"></div>

        <div className="text-2xl md:text-3xl mt-12 w-full lg:w-3/5">
          We give founders wonderful exits with simple and fair terms, a fast
          and stress-free process, and an awesome new home where your business
          will continue to thrive.
        </div>
      </div>

      <div className="my-10 flex flex-col items-center text-center">
        <div className="text-5xl sm:text-6xl lg:text-7xl font-medium">
          What We Like
        </div>

        <div className="h-fit flex flex-col items-center justify-center my-8">
          <Accordian className="max-w-lg">
            <AccordianItem value="1" trigger="Valuable Products">
              Like mission-critical tools or anything customers really value and
              pay for directly.
            </AccordianItem>
            <AccordianItem value="2" trigger="Happy Customers">
              Our single best measure of product quality and the raison
              d&apos;être of any business.
            </AccordianItem>
            <AccordianItem value="3" trigger="Sustainable Growth">
              Driven by a strong brand or community or other genuine organic
              channels.
            </AccordianItem>
            <AccordianItem value="4" trigger="Recurring Revenues">
              Like SaaS or similar subscription models built on long-term
              customer relationships.
            </AccordianItem>
            <AccordianItem value="5" trigger="High Margins">
              Like software or similar services with high automation,
              efficiency, and productivity.
            </AccordianItem>
          </Accordian>
        </div>

        <div className="text-lg md:text-xl w-full md:w-3/4">
          We typically focus on small, underappreciated SaaS businesses that
          don&apos;t fit the criteria of traditional venture capital or private
          equity.
        </div>
      </div>

      <div className="my-16 flex flex-col items-center text-center">
        <div className="text-5xl sm:text-6xl lg:text-7xl font-medium">
          Our Simple Process
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col sm:flex-row mt-8 sm:mt-16 gap-4 sm:gap-10 items-center justify-center">
            <div className="flex flex-row sm:flex-col justify-center items-center gap-2">
              <div className="text-2xl sm:text-3xl">Response</div>
              <div className="text-2xl sm:text-xl">
                in <span className="font-medium sm:font-bold">24-48 hours</span>
              </div>
            </div>
            <div>
              <Image
                src="/svgs/right.svg"
                alt=""
                width="32"
                height="32"
                className="rotate-90 sm:rotate-0 bg-white rounded-full border"
              />
            </div>
            <div className="flex flex-row sm:flex-col justify-center items-center gap-2">
              <div className="text-2xl sm:text-3xl">Offer</div>
              <div className="text-2xl sm:text-xl">
                in <span className="font-medium sm:font-bold">3-5 days</span>
              </div>
            </div>
            <div>
              <Image
                src="/svgs/right.svg"
                alt=""
                width="32"
                height="32"
                className="rotate-90 sm:rotate-0 bg-white rounded-full border"
              />
            </div>
            <div className="flex flex-row sm:flex-col justify-center items-center gap-2">
              <div className="text-2xl sm:text-3xl">Closing</div>
              <div className="text-2xl sm:text-xl">
                in <span className="font-medium sm:font-bold">15-30 days</span>
              </div>
            </div>
          </div>

          <div className="text-lg sm:text-xl text-start w-full tracking-widest px-10 mt-5">
            <div>
              &#x2022; Efficient due-diligence process that respects
              founders&apos; time.
            </div>
            <div className="mt-5">
              &#x2022; Cash-upfront offers without complex terms.
            </div>
            <div className="mt-5">&#x2022; No in-person meetings.</div>
          </div>
        </div>
      </div>

      <div className="my-16 flex flex-col items-center text-center">
        <div className="text-5xl sm:text-6xl lg:text-7xl font-medium">
          Our Promise
        </div>
        <div className="my-6 text-2xl sm:text-3xl capitalize">
          The <span className="font-bold">best</span> founder experience,
          period!
        </div>
        <div className="w-4/5 sm:w-3/5 tracking-wider">
          <p className="mt-2 text-lg sm:text-xl border-b pb-2 rounded-xl">
            We are <span className="font-semibold">prompt</span> and{" "}
            <span className="font-semibold">focused</span> - we never waste
            founders&apos; time.
          </p>
          <p className="mt-10 text-lg sm:text-xl border-b pb-2 rounded-xl">
            We are <span className="font-semibold">honest</span>,{" "}
            <span className="font-semibold">upfront</span>, and{" "}
            <span className="font-semibold">transparent</span> with our offers -
            we mean what we say and are committed to following through.
          </p>
          <p className="mt-10 text-lg sm:text-xl border-b pb-2 rounded-xl">
            We build for the <span className="font-semibold">long-term</span>{" "}
            with permanent capital - our holding period is forever (we do not
            &quot;flip&quot;).
          </p>
        </div>
      </div>
    </main>
  );
}
