import Link from "next/link";

export default function PostCard({ post, featured = false }) {
  const formattedDate = post.data
    ? new Date(post.data + "T12:00:00").toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="post-card">
          <div className="grid md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden relative">
              {post.imagem_capa ? (
                <img
                  src={post.imagem_capa}
                  alt={post.titulo}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full img-placeholder">
                  <span>TravelPartiu</span>
                </div>
              )}
              <span className="absolute top-4 left-4 text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
                {post.categoria}
              </span>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-[1.75rem] font-bold text-text leading-tight mb-3 group-hover:text-primary transition-colors duration-200">
                {post.titulo}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6 line-clamp-3">
                {post.descricao}
              </p>

              <div className="flex items-center gap-4 text-xs text-text-muted mb-6">
                {post.autor && (
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                    </svg>
                    {post.autor}
                  </span>
                )}
                {formattedDate && (
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    {formattedDate}
                  </span>
                )}
                {post.tempo_leitura && (
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.tempo_leitura}
                  </span>
                )}
              </div>

              <span className="btn-primary self-start">
                Ler Artigo
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="post-card h-full flex flex-col">
        <div className="aspect-[16/10] overflow-hidden relative">
          {post.imagem_capa ? (
            <img
              src={post.imagem_capa}
              alt={post.titulo}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full img-placeholder">
              <span>TravelPartiu</span>
            </div>
          )}
          <span className="absolute top-3 left-3 text-[0.6875rem] font-semibold text-white bg-primary px-2.5 py-0.5 rounded-full">
            {post.categoria}
          </span>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h2 className="font-semibold text-[1.0625rem] text-text leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
            {post.titulo}
          </h2>
          <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed mb-4 flex-1">
            {post.descricao}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-3 text-[0.6875rem] text-text-muted">
              {post.autor && (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                  </svg>
                  {post.autor}
                </span>
              )}
              {formattedDate && (
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  {formattedDate}
                </span>
              )}
            </div>
            <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
              Ler Artigo
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
