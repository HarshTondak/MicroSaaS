import Link from "next/link";
import React from "react";
import RecentBlogs from "../RecentBlogs";

const RecentPosts = () => {
  const sample = [
    {
      title: "The Power of JavaScript Frameworks: Angular vs. React vs. Vue.js",
      image: "/blogs/blog4.jpg",
      blurs:
        "data:image/webp;base64,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",
      publishedAt: "2024-01-11",
    },
    {
      title:
        "Securing Your Web App: Best Practices for Authentication and Authorization",
      image: "/blogs/blog5.jpg",
      blurs:
        "data:image/webp;base64,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",
      publishedAt: "2023-12-25",
    },
    {
      title:
        "JavaScript Frameworks Unleashed: Powering Dynamic Web Applications with Ease",
      image: "/blogs/blog6.jpg",
      blurs:
        "data:image/webp;base64,UklGRioEAABXRUJQVlA4WAoAAAAgAAAAHwEAoQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggPAIAABAZAJ0BKiABogA+7XSvUrozLqOlF7r7QB2JaW7gCB0r397VTPO4Pnv5fgGxlRKIar6kRRPFEIiIAg3LXT0bx+O0aO4tU8vEE0dXThu2qsVaraJnkdLxA+UD5Odr3P1LgpBklAa6w3jBNXODdryOyrUMfMB7n5QgwdsAeIbEu7DvYh1rmyAJN1dcxPBpw3FAz9+kBH5bxxBZXLFYsJrEDAlY6OjpzP4nsfzHhul0m9gVWeB7el2LuFf9hVDHh2f+xCo63V43XisHJqZIc+NwIyi4AP7lVSatb5oGV4D84PjqTx0R6ezMzDWjIYGgTYgmAS90K5g27bT2sh6hvcHt8xRusHhtYpxeNukO1tfQmVEADln6jCvDTNBfn5+78NDowakhgfpTOl22J1LaZpu27HcjkOw7YOGzF+5DWcWDaj7EBkW0+viZSfYrEAGOszMFzDZ7dR1IfWx0nGYamMNvIy6pZSNQpPFDGSDQZy8LmEb8ZMssAYAap69o5kqX+LN9oXOb5SwNmaeocJZPrGwv3lfmVhdJY7iqYHmVk1YpT09bclR/KfNCkLxqdpKb/NTkpDOOl90Ec2edyYn8UeyzZ0HPBOlPO9V8p4PH/Ayq+eWrW9ww4k8ctVWTlUsFTfJDnD6h1TiWFemSTVYI17nHWhmjitQPW/QPGapnL32i/UHGBTxx181tVLI5BAsgfSafnQvaQErnPnP/2e00Hd1xZvIsHz0Wsu2cg/8MwC2Xbn0AMxel+ARvmZApIAAA",
      publishedAt: "2023-12-10",
    },
    {
      title:
        "Server-Side Magic: Exploring the World of Backend Web Development",
      image: "/blogs/blog7.jpg",
      blurs:
        "data:image/webp;base64,UklGRhIEAABXRUJQVlA4WAoAAAAgAAAAHwEAvgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggJAIAAPAaAJ0BKiABvwA+7W6vUym3KaKl0utq4B2JaW7gAzH/+R06kWv/NojlbRp9hcNaCeiBCh6FdVaqt5WOOG4964mUTKatb/V/MRKc9d64mT+A7vag8XajPGCvez+4DVufi01PJ9PscelEYEzjP2vb4POP/XPVQrHfH5pQa7XYK9u6M/nBNXN8HbmQV61r5ylujHZPYq/NB+VT3BeuwYBgyiRIF6GRh9aNPHZREPNcV9Eg7KEMdW1eOCYUn5kSIyylraflQOLMWbxCx1tsMTXx3DQaDQbxC86NPopwfJ7sREAAAP7hNCSGEJFVgBrwD84B+IyNIy6RJ2xlD7nxg2d3lz1WA3BxxnSkxs4isrnvocAaWUZKzRsy4fHMhhtlFgMSTnHwuAmE3gHPPsCOD/AXW+AvtL74HE/v3S3INYcDf2spneST6Y9YphXNw3q2o59/lA/6yiFWFwAAv9U7hlRSgxrQIGCWeQJ8Fm+44i32+HE27IYRbUxsjoijjv7eZF4ZkaeEV0ehbxyilDhCSCN4e0ppkOPdU9cRXkV9UxVJ6p1P2JaxwQaFrtODMtUSaGSEf6Mgx2IUqgha20Tpy0R1ujOaUAA6mDi4rHl9fSIFxUYEtqTN6d+3aJLMOkzLskiCxNriebjOXcWPULSWJ9fgqkL3gs61+IacAntfk+AvsIU/r389ev4hxFL6OMhzQXn8WUY0FAd+QQ9u/jw4Oo/ZIDzMAAAA",
      publishedAt: "2023-11-21",
    },
    {
      title:
        "Frontend Performance Optimization: Boosting Speed and User Experience",
      image: "/blogs/blog8.jpg",
      blurs:
        "data:image/webp;base64,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",
      publishedAt: "2023-11-15",
    },
    {
      title:
        "Exploring Next.js: Simplifying React App Development with Server-Side Rendering",
      image: "/blogs/blog9.jpg",
      blurs:
        "data:image/webp;base64,UklGRlgDAABXRUJQVlA4WAoAAAAgAAAAHwEAvwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggagEAAFATAJ0BKiABwAA+7Xa2VqmnJKOgKAEwHYlpbt1eUSol6L+wBWbteLk5D32yY1H+7TXUf8k7o2SPf2TOHRS7568u6QtPU0VOb6D1pp3F3KUBjv9nONSsBSqmVVkrKzjKbIFWVDR30ltsBTP3xYQNSQrNAKsm3MyNJFP4j4OzbYEpaOuKx4h1lmh+ild1O1FT9UFZpAE4febzi5pQiXWoQ62tpAAA/u3P2q4iZ2uXuU4SSxIWnOcEtbbGrZ411vh9MvbuKZbohfUf6G33jTMHc2h++uFpCQzxkK6F8lMrEE8tqUiLDT0CS2wWLvuaT9myeTARUWUYCTxyc9clQyIc3285Fvg0rt5TIb6t4rzYXMEW/UwcuRVMJ8nRpXR3V8dpvzSPhQhLOWKcXCzRUNHtY9ISaai7iDFVllDvbXz8rDJqSmHNUoKCdWkbc1/Axoxvh7yuNrfB9UfwwRc0Seflrcrq8P6W1O7x0gAA",
      publishedAt: "2023-11-12",
    },
  ];

  return (
    <section
      className="w-full my-16 sm:my-24 md:my-32 px-5 sm:px-10 md:px-24 
                sxl:px-32 flex flex-col items-center justify-center"
    >
      <div className="w-full flex  justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recent Posts
        </h2>
        <Link
          href="#"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2      text-base md:text-lg"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
        {sample.map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <RecentBlogs blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
