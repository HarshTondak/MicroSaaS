import FeaturedPosts from "@/components/BlogPage/FeaturedPosts";
import HomeCoverSection from "@/components/BlogPage/HomeCoverSection";
import RecentPosts from "@/components/BlogPage/RecentPosts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-3">
      <HomeCoverSection />
      <FeaturedPosts />
      <RecentPosts />
    </main>
  );
}
