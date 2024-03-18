import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const FeaturedPosts = () => {
  return (
    <section
      className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 
                  sxl:px-32 flex flex-col items-center justify-center"
    >
      <h2
        className="w-full inline-block font-bold capitalize text-2xl 
                    md:text-4xl text-dark dark:text-light"
      >
        Featured Posts
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-10 sm:mt-16">
        <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
          <div className="group inline-block overflow-hidden rounded-xl">
            <div
              className="absolute top-0 left-0 bottom-0 right-0 h-full
                        bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10"
            />
            <Image
              src="/blogs/blog1.jpg"
              placeholder="blur"
              alt=""
              blurDataURL="data:image/webp;base64,UklGRlADAABXRUJQVlA4WAoAAAAgAAAAHwEAvwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggYgEAALAUAJ0BKiABwAA+7XawVimnJCOgKREwHYlpbt307IQbS3PkAUA4wbhSigCD1wyvQgdv2e0LYL24T5I1n/MGairDv99mhbLD3AgtuzqZv/kQxwxl4t4hfubPFUyrStt/ySg8GtYubKcHEhjZkClotPWDGMtb3FbAdWztjt/LxgSIeFM8qzUXRK3CuRKzMMySADcGSwZhDLTvEIRhmLP7Tmf2M3L8eu5M/ak2hjEWAAD+8NbGba+0vo+5peBavegKi0y3KY44oLKGqiU3Jf5UkLtr70o9eMdnSZ3y25RFHBtvphQovsBEmDBfLkDgef/LPBZa2Zeyy3c2adBsfUbCmLYih/ZG4Aym0WLpo8pRnJKssopjhvMzWqOQGl+ISphb8VqD69NVyJFVPmGOCkBYpDIDPBuQDYEY2FsYZeyLqQ9ruSbUqIMah+gO1QbGy4HlTQ+o14NKq0tNYUfBW4q9RkAAAA=="
              width="718"
              height="404"
              className="w-full h-full object-center object-cover rounded-xl 
                          group-hover:scale-105 transition-all ease duration-300"
              sizes="(max-width: 1180px) 100vw, 50vw"
            />

            <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
              <Link
                href="#"
                className="inline-block px-6 sm:px-10  bg-dark text-light 
                  rounded-full capitalize font-semibold border-solid border-light 
                  hover:scale-105 transition-all ease duration-200 text-xs 
                  sm:text-sm py-1 sm:py-2 !border"
              >
                Productivity
              </Link>

              <Link href="#" className="mt-6">
                <h2
                  className="font-bold capitalize text-sm xs:text-base 
                            sm:text-xl md:text-2xl text-light mt-2 sm:mt-4"
                >
                  <span
                    className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
                    dark:from-accentDark/50 dark:to-accentDark/50 group-hover:bg-[length:100%_6px] 
                    bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
                  >
                    Techniques for Improving Focus and Clarity Developers
                  </span>
                </h2>
              </Link>
            </div>
          </div>
        </article>

        <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
          <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
            <Link
              href="#"
              className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
            >
              <Image
                src="/blogs/blog2.jpg"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAMADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAaEAEBAQEBAQEAAAAAAAAAAAAAAQIREgNB/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREx/9oADAMBAAIRAxEAPwBmwvWytIeHicPEDw0JDQU4YAaWtLUC6S0ppLQJ6Q2tpHYI7R2rtHYJaJTaJUGw8JDQFYeJ5Ugp40sMDu62VPrZW2VZTyoynlBaU0qUppUFOt6TreittLaOltBmqnqmtT1UCaqO6pqo7oJbqG6ruoboE1U7W6pLUDynlRlPmoq+aeVLNPKCspupym6Dq9NmkfRpp0ZXlPKhNHmgXlNKjNGmkFpW9Smm+gP1lpeltBtqeq21PVFJqo7p9VHdQT3UN1Tdc+9AXWkrpm9o3bLUjomlM6ck2tjSLjqzVJXPnSmdKi8repSm6It6bNOf2aadWXTNKTTmzpTOkHRNHmnPNHmgXmm+kppvpBT0y6J6LdAa1PVF0nrQM1UN6PrSG9Ck3pzfTfFPppx/XfbxlYXeu0nWALTSnzriTZSxZXXja2dOLGuL52xxXTNG9IzRvSoJs024p9VM/Tr0Yw7c7Vzpx52tnTI6s6PNOfOjzSDomm+kZpvoFfTLpP0y6QNdJ60LpPWgZrSG9G3pz/TYqf23yOW3tN9NeqRFAAEAABsp8b4mEs1ZXVnZ5tyTVh59GcXSNlsKHplYdPz+i+NuGXlX+eyxXbnSk05c6VzphHRNN9IzRvSCnpl0T0y6A10nrTLpPWgZvTk+2/xT6b45dXtQYAEUAAAAAAAAAAA1jVlGmzeENHWUjpxpXOnLm8WzpmtYvNG9IzRvSJinpl0T0W6RDa0lvQ1pz/TYF+mu0gCUAAQAAAAAAAAAAAANWAbGNjcIeHzSRsV0i0pupSm6hh+lui2k1pEwb0jabVIlZoADKAAAAAAAAAAAAADQA0A0KaNENGsjVdY1vWBFFpaalohdENorFc6AAiAAAAAAAAAAAAAD/9k="
                alt=""
                width="718"
                height="404"
                className="aspect-square w-full h-full object-cover object-center 
                        group-hover:scale-105 transition-all ease duration-300"
                sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
              />
            </Link>

            <div className="col-span-12 lg:col-span-8 w-full">
              <span
                className="inline-block w-full uppercase text-accent 
                        dark:text-accentDark font-semibold text-xs sm:text-sm"
              >
                Coding
              </span>
              <Link href="#" className="inline-block my-1">
                <h2 className="font-semibold capitalize text-base sm:text-lg">
                  <span
                    className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 
                    to-accent/50 dark:to-accentDark/50 bg-[length:0px_6px]
                    group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat 
                    transition-[background-size] duration-500 "
                  >
                    Best practices for writing clean code
                  </span>
                </h2>
              </Link>

              <span
                className="inline-block w-full capitalize text-gray 
                        dark:text-light/50 font-semibold  text-xs sm:text-base"
              >
                {moment("2024-01-26").format("MMMM DD, YYYY")}
              </span>
            </div>
          </div>
        </article>

        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
            <Link
              href="#"
              className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
            >
              <Image
                src="/blogs/blog3.jpg"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRsQDAABXRUJQVlA4WAoAAAAgAAAAHwEAvwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg1gEAAPATAJ0BKiABwAA+7Xa3VqmnJSOgKAEwHYlnbt31+mx4ch8v/YAnsBHgkw99snH8pTThwFu/q1NthluoOxPc5U1KWLwUt/Nph8dukHx9hoNMAR1k4DPXBI6oRaVjxDrJ7rEdmJaG7z1FT+CVcq/dxHhLTBHWVE2UTcybc2asqfvM9h+qsAqZa8QijR1ep7iL9qiqawGJ3tgKB6U67pQOOMGKuqlTn+NuAAD+7e4//4tD/Y1/sazFfAlqKt0EarFmn2EK58jwoKCqWyPzumXa+LtIwEAHUduva+6ajejeTIASRrtSSoTua7FyxJH16ST0QlSMvSrACUutRmZAV4/9kThJAE1ewae83J8GkD6j/M4DyzKmsPgaOvREnsXiP3OBoKg96vCEMWcEhkSNIyvLS6Z0QOhwmpTuMYmGnhNCz6LdSkDI/gFib6fltQsizQ+rFcos5jmDqmLk6/x7d6ViMiGFCqXcc4AjJAV92xmOIhyoWz807KFQcHDXG6f2xZvN3yQPdvh6w/hyxYjtkOjrR+K/4kufytsnnnJeiBV1nBCdJ07QJved18JxyNaZ1v6/3nkyW4IeWaQJWEaXkBZ6M1wyY8KlpNX15RPGXmtp7P7CofQeIAAA"
                alt=""
                width="718"
                height="404"
                className="aspect-square w-full h-full object-cover object-center 
                group-hover:scale-105 transition-all ease duration-300"
                sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
              />
            </Link>

            <div className="col-span-12 lg:col-span-8 w-full">
              <span
                className="inline-block w-full uppercase text-accent 
                      dark:text-accentDark font-semibold text-xs sm:text-sm"
              >
                Productivity
              </span>
              <Link href="#" className="inline-block my-1">
                <h2 className="font-semibold capitalize text-base sm:text-lg">
                  <span
                    className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 
                    to-accent/50 dark:to-accentDark/50 bg-[length:0px_6px]
                    group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat 
                    transition-[background-size] duration-500 "
                  >
                    Automating repetitive tasks: productivity hacks for
                    developers
                  </span>
                </h2>
              </Link>

              <span
                className="inline-block w-full capitalize text-gray 
                    dark:text-light/50 font-semibold  text-xs sm:text-base"
              >
                {moment("2024-01-21").format("MMMM DD, YYYY")}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
