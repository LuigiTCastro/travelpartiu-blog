import Link from "next/link";
import { getAllPosts, getPostsDestaque, getCategories, getPostsDicas } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const destaques = getPostsDestaque(6);
  const dicas = getPostsDicas(3);
  const excluidos = new Set([...destaques, ...dicas].map((p) => p.slug));
  const recentes = getAllPosts().filter((p) => !excluidos.has(p.slug)).slice(0, 6);
  const categories = getCategories();

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

      {/* Em Destaque — horizontal scroll com peek */}
      {destaques.length > 0 && (
        <section className="py-14 md:py-18">
          <div className="max-w-[1200px] mx-auto px-5 mb-7">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-text">Roteiros em Destaque</h2>
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
          </div>

          {/* Scroll container com fade-right indicando continuidade */}
          <div className="relative">
            <div
              className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
              style={{ paddingLeft: "calc((100vw - 1200px) / 2 + 20px)", paddingRight: "60px" }}
            >
              {destaques.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block shrink-0 w-[300px] md:w-[340px] snap-start"
                >
                  <article className="post-card h-full flex flex-col">
                    <div className="aspect-[3/2] overflow-hidden relative">
                      {post.imagem_capa ? (
                        <img
                          src={post.imagem_capa}
                          alt={post.titulo}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full img-placeholder"><span>TravelPartiu</span></div>
                      )}
                      <span className="absolute top-3 left-3 text-[0.6875rem] font-semibold text-white bg-primary px-2.5 py-0.5 rounded-full">
                        {post.categoria}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-semibold text-[1rem] text-text leading-snug mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {post.titulo}
                      </h3>
                      <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed mb-4 flex-1">
                        {post.descricao}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        {post.tempo_leitura && (
                          <span className="text-xs text-text-muted flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {post.tempo_leitura}
                          </span>
                        )}
                        <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                          Ler artigo
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Fade gradient indicando mais conteúdo à direita */}
            <div
              className="absolute top-0 right-0 bottom-4 w-24 pointer-events-none"
              style={{ background: "linear-gradient(to left, rgba(255,255,255,0.95) 0%, transparent 100%)" }}
            />
          </div>
        </section>
      )}

      {/* Posts Recentes — apenas os que NÃO estão em destaque */}
      {recentes.length > 0 && (
        <section className="section-accent">
          <div className="max-w-[1200px] mx-auto px-5 py-14 md:py-18">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-text">Posts Recentes</h2>
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
              {recentes.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dicas para sua Viagem */}
      {dicas.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-5 py-14 md:py-18">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-text">Dicas para sua Viagem</h2>
              <p className="text-sm text-text-secondary mt-1">Planejamento, seguro e como economizar mais.</p>
            </div>
            <Link
              href="/categoria/Planejamento"
              className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors flex items-center gap-1"
            >
              Ver mais
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dicas.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="max-w-[1200px] mx-auto px-5 py-14 md:py-18">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-text mb-3">Explore por Categoria</h2>
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
        <div className="max-w-[800px] mx-auto px-5 py-14 md:py-18 text-center">
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
