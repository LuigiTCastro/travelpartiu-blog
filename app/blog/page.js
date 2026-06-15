import { getAllPosts, getCategories } from "@/lib/posts";
import BlogFilter from "@/components/BlogFilter";

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
        <BlogFilter posts={posts} categories={categories} />
      </div>
    </>
  );
}
