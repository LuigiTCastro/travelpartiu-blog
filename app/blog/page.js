import { getAllPosts, getCategories } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export const metadata = {
  title: "Todos os posts",
  description:
    "Explore todos os nossos roteiros, dicas e guias de viagem. Conteudo pratico para planejar sua proxima aventura.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <>
      <div className="bg-bg-accent">
        <div className="max-w-[1200px] mx-auto px-5">
          <section className="pt-16 pb-12 md:pt-24 md:pb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-text tracking-tight mb-3">
              Todos os posts
            </h1>
            <p className="text-text-secondary text-lg">
              Roteiros, dicas e guias completos para sua proxima viagem.
            </p>
          </section>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-wrap gap-2 py-8 sticky top-[60px] bg-bg z-10">
          <Link
            href="/blog"
            className="text-[0.8125rem] font-semibold px-4 py-2 rounded-full bg-primary text-white"
          >
            Todos
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/categoria/${cat}`}
              className="text-[0.8125rem] font-medium px-4 py-2 rounded-full border border-border text-text-secondary hover:text-primary hover:border-primary hover:bg-primary-light transition-all duration-150"
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
