import { getPostBySlug, getAllSlugs, getRelatedPosts } from "@/lib/posts";
import { getAfiliadosPorCategoria } from "@/lib/afiliados";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import AfiliadoCard from "@/components/AfiliadoCard";
import TemplatesCTA from "@/components/TemplatesCTA";
import Breadcrumb from "@/components/Breadcrumb";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import RelatedPosts from "@/components/RelatedPosts";
import BioTravelPartiu from "@/components/BioTravelPartiu";
import NewsletterInline from "@/components/NewsletterInline";
import ReadingProgress from "@/components/ReadingProgress";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.titulo,
    description: post.descricao,
    openGraph: {
      title: post.titulo,
      description: post.descricao,
      type: "article",
      url: `/blog/${post.slug}`,
      images: post.imagem_capa ? [{ url: post.imagem_capa }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.titulo,
      description: post.descricao,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.categoria);
  const afiliados = getAfiliadosPorCategoria(post.categoria);

  const formattedDate = post.data
    ? new Date(post.data + "T12:00:00").toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      <ReadingProgress />

      {/* Post hero with cover image */}
      {post.imagem_capa ? (
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={post.imagem_capa}
            alt={post.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-[800px]">
              <Breadcrumb categoria={post.categoria} titulo={post.titulo} light />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-bg-accent pt-8 pb-4">
          <div className="max-w-[800px] mx-auto px-5">
            <Breadcrumb categoria={post.categoria} titulo={post.titulo} />
          </div>
        </div>
      )}

      <article className="max-w-[1200px] mx-auto px-5">
        {/* Post header */}
        <header className="max-w-[680px] pt-10 mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
              {post.categoria}
            </span>
            {post.tempo_leitura && (
              <span className="text-xs text-text-muted flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.tempo_leitura} de leitura
              </span>
            )}
          </div>

          <h1 className="text-[2.25rem] md:text-[2.75rem] font-bold text-text leading-[1.15] tracking-tight mb-5">
            {post.titulo}
          </h1>

          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            {post.descricao}
          </p>

          <div className="flex items-center gap-4 text-sm text-text-muted pb-6 border-b border-border">
            {post.autor && (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                </svg>
                {post.autor}
              </span>
            )}
            {formattedDate && (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                {formattedDate}
              </span>
            )}
          </div>
        </header>

        {/* Inline TOC — sempre visível, todos os tamanhos */}
        <div className="max-w-[680px]">
          <TableOfContents headings={post.headings} inline />
        </div>

        {/* Content + sidebar */}
        <div className="flex gap-16">
          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-[680px]">
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* Cards de afiliados — aparecem após o conteúdo, antes do CTA */}
            {afiliados.length > 0 && (
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                  Links uteis para sua viagem
                </p>
                {afiliados.map((afiliado) => (
                  <AfiliadoCard key={afiliado.id} {...afiliado} />
                ))}
              </div>
            )}

            {/* Newsletter */}
            <NewsletterInline />

            {/* Ad antes do CTA */}
            <AdSlot position="footer" />

            {/* Templates CTA */}
            <TemplatesCTA />

            {/* Bio */}
            <BioTravelPartiu />

            {/* Bottom share */}
            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
              <span className="text-sm text-text-muted">Compartilhar</span>
              <ShareButtons titulo={post.titulo} slug={post.slug} />
            </div>
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-[220px] shrink-0">
            <TableOfContents headings={post.headings} />
          </aside>
        </div>

        {/* Related posts */}
        <RelatedPosts posts={related} />
      </article>
    </>
  );
}
