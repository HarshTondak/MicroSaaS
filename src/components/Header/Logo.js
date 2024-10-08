import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-dark dark:text-light">
      <span className="font-bold text-xl md:text-2xl">
        Micro SaaS <span className="font-light">Capital</span>
      </span>
    </Link>
  );
};

export default Logo;
