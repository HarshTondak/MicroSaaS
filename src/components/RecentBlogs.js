import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentBlogs = ({ blog }) => {
  return (
    <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link href="#" className="h-full rounded-xl overflow-hidden">
        <Image
          src={blog.image}
          placeholder="blur"
          blurDataURL={blog.blurs}
          alt=""
          width="718"
          height="404"
          className="aspect-[4/3] w-full h-full object-cover object-center 
          group-hover:scale-110 transition-all duration-500
          rounded-xl border border-dark dark:border-white"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {blog.tag}
        </span>
        <Link href="#" className="inline-block my-1">
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50
              dark:to-accentDark/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] 
              bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {moment(blog.publishedAt).format("MMMM DD, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default RecentBlogs;
