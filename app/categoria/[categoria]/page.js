import { getPostsByCategory, getCategories } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Link from "next/link";

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }) {
  const { categoria } = await params;
  const decoded = decodeURIComponent(categoria);
  return {
    title: decoded,
    description: `Confira todos os posts sobre ${decoded} no Blog TravelPartiu.`,
  };
}

export default async function CategoriaPage({ params }) {
  const { categoria } = await params;
  const decoded = decodeURIComponent(categoria);
  const posts = getPostsByCategory(decoded);
  const categories = getCategories();

  return (
    <>
      <div className="bg-bg-accent">
        <div className="max-w-[1200px] mx-auto px-5">
          <section className="pt-16 pb-12 md:pt-24 md:pb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-text tracking-tight mb-3">
              {decoded}
            </h1>
            <p className="text-text-secondary text-lg">
              {posts.length} {posts.length === 1 ? "post" : "posts"} nesta categoria.
            </p>
          </section>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-wrap gap-2 py-8 sticky top-[60px] bg-bg z-10">
          <Link
            href="/blog"
            className="text-[0.8125rem] font-medium px-4 py-2 rounded-full border border-border text-text-secondary hover:text-primary hover:border-primary hover:bg-primary-light transition-all duration-150"
          >
            Todos
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/categoria/${cat}`}
              className={`text-[0.8125rem] font-semibold px-4 py-2 rounded-full transition-all duration-150 ${
                cat === decoded
                  ? "bg-primary text-white"
                  : "border border-border text-text-secondary hover:text-primary hover:border-primary hover:bg-primary-light"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-text-secondary pb-20">
            Nenhum post nesta categoria ainda.
          </p>
        )}
      </div>
    </>
  );
}
