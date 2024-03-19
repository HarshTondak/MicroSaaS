import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCoverSection = () => {
  return (
    <div className="w-full inline-block">
      <article
        className="flex flex-col items-start justify-end mx-5
                    sm:mx-10 relative h-[60vh] sm:h-[85vh]"
      >
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/60 rounded-3xl z-0"
        />
        <Image
          src="/blogs/blog11.jpg"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAB7AMADASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAgMBBAAF/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECERIDMVH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREC/9oADAMBAAIRAxEAPwCrYxsc7upQoEOHGdOHE4cVGPSkOBDimVOHAhxSMOFBhQAnnngbzK1lBhQp0KDT0npTSegaWk9KaT0RBRpUQQdbKHWysHo2KSnEpTlOIsVhxOU4uMbFIpE4pFM7DikTikNOFCgwoCwnnngePMrRoPBoU6GgeJ6T0ppLQGJ6T0ek9EMCiVAFiPWypeimnPr0bFpTlRlUzVRFi2apmo5qmaqMrFsqZSzVM1TOxWHE5ThlikKBChlhNHreg8eZXujaDxlDRWp6oGDpLR6qeqQxPSej1UtUFg0W2j0hji9FNOaaPO3NOno2OrOlM1zZ0rnS5WdjpzVc1z5quauMrHRmqZqGapmqRYvmqSoZqkplispSpylKBinXuh17oGFaNrLRtB421PVbanqgYzVT1W6qeqBg6qWqWqnqkWMtHrLR6WjHyZtTOnJ08b/rG8vSsduNLZ048aWxopcY9R2Z0tnTkxpbOmkrKurOlc6c2dKZ0pDpzo5pz50pNGS80U0jNNmjGLenvSXpvoBT0NoehugCtDWmXQXQD2qnqva0nrQDNVPVbqpaqdJ60estHpaHxuvdHr3Q7tW+e3RjTil4v89o65T07cbXzpxZ0tjaZcY12Z0rnTkzpXOmkqHVnRzTmmlJpROiaKac80U0YX9PekfTfQCvobpP0y6AO6C6G6C6ALWk9aZdJ60RN1pO161O1NpNtHo3Q+md6D5PW9Hr3W7p0uljXKn1vRh668aWzpx/PS+dMeuWddedq525M6UzpMuJdedHNObOlJppKl0TRTSE0U0rQt6b6R9N9GFPTLpP096AO6C6G6G0E26C6etTtTaTbU9ae1QtZ9UnrWdZazqBr5bWPOxs1rHiVDxeVfNc8/V8I6Kr5qkqOVMsahXNUlSimSlCkpypwo1hH1vRjTDes68wyetG1tGkTLQtKhU0htClRrImVj1Yon//2Q=="
          alt=""
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10
                      border border-dark dark:border-white"
          sizes="100vw"
          priority
        />

        <div
          className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col 
                    items-start justify-center z-0 text-light"
        >
          <Link
            href="#"
            className="inline-block py-2 px-4 bg-dark text-light 
            rounded-full font-semibold border-2 border-solid border-light 
            hover:scale-105 transition-all ease duration-200 text-sm sm:text-base"
          >
            Web Development
          </Link>

          <Link href="#" className="mt-6">
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
              <span
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] 
                bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                Building Responsive Web Apps: Bridging the Gap Between Web and
                Mobile
              </span>
            </h1>
          </Link>
          <p className="hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
            Integrating mindfulness practices helps developers cultivate
            present-moment awareness, fostering focus, problem-solving, and
            work-life balance.
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
