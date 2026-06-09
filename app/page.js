import Link from "next/link";
import { getAllPosts, getCategories } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();
  const categories = getCategories();
  const featured = posts[0];
  const recent = posts.slice(1, 7);

  return (
    <>
      {/* Hero */}
      <section className="hero-home">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
          alt="Praia tropical"
        />
        <div className="hero-content">
          <p className="text-sm font-medium tracking-widest uppercase text-blue-200 mb-5">
            Blog TravelPartiu
          </p>
          <h1 className="text-4xl md:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6">
            Viaje melhor com planejamento de verdade.
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto mb-8">
            Roteiros testados, dicas praticas e guias completos pra quem quer
            aproveitar cada dia da viagem sem stress.
          </p>
          <Link href="/blog" className="btn-primary text-base px-8 py-3.5">
            Explorar Blog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="max-w-[1200px] mx-auto px-5 py-16 md:py-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-text">Roteiros em Destaque</h2>
          </div>
          <PostCard post={featured} featured />
        </section>
      )}

      {/* Recent posts - alternate bg */}
      {recent.length > 0 && (
        <section className="section-accent">
          <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-text">Posts Recentes</h2>
              <Link
                href="/blog"
                className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors flex items-center gap-1"
              >
                Ver todos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recent.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="max-w-[1200px] mx-auto px-5 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-text mb-3">Explore por Categoria</h2>
          <p className="text-text-secondary">Encontre conteudo sobre o que mais interessa.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/categoria/${cat}`}
              className="text-sm font-medium px-5 py-2.5 rounded-full border border-border text-text-secondary hover:border-primary hover:text-primary hover:bg-primary-light transition-all duration-200"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="section-accent">
        <div className="max-w-[800px] mx-auto px-5 py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
            Organize sua viagem em um so lugar
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8 max-w-lg mx-auto">
            Roteiro, documentos, gastos e decisoes da viagem. Tudo centralizado,
            de graca, sem complicacao.
          </p>
          <a
            href="https://www.travelpartiu.com/signup"
            className="btn-primary text-base px-8 py-3.5"
          >
            Criar conta gratis
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
