"use client";
import { useState } from "react";
import PostCard from "@/components/PostCard";

const PER_PAGE = 3;

export default function RecentPostsCarousel({ posts }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const slice = posts.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  if (posts.length === 0) return null;

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {slice.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Página anterior"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Página ${i + 1}`}
                className={`rounded-full transition-all duration-150 ${
                  i === page
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-border hover:bg-text-muted"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Próxima página"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-all duration-150 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
