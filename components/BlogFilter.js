"use client";
import { useState } from "react";
import PostCard from "@/components/PostCard";

const FILTROS = [
  { id: "todos", label: "Todos" },
  { id: "nacional", label: "Nacional" },
  { id: "internacional", label: "Internacional" },
];

export default function BlogFilter({ posts, categories }) {
  const [filtro, setFiltro] = useState("todos");

  const postsFiltrados = posts.filter((post) => {
    if (filtro === "todos") return true;
    if (filtro === "nacional") return post.pais === "Brasil";
    if (filtro === "internacional") return post.pais && post.pais !== "Brasil";
    return true;
  });

  return (
    <>
      <div className="flex flex-wrap gap-2 py-8 sticky top-[60px] bg-bg z-10 border-b border-border">
        {FILTROS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFiltro(f.id)}
            className={`text-[0.8125rem] font-semibold px-4 py-2 rounded-full transition-all duration-150 ${
              filtro === f.id
                ? "bg-primary text-white"
                : "border border-border text-text-secondary hover:text-primary hover:border-primary hover:bg-primary-light"
            }`}
          >
            {f.label}
          </button>
        ))}
        <span className="hidden lg:flex items-center ml-2 text-xs text-text-muted">|</span>
        {categories.map((cat) => (
          <a
            key={cat}
            href={`/categoria/${encodeURIComponent(cat)}`}
            className="text-[0.8125rem] font-medium px-4 py-2 rounded-full border border-border text-text-secondary hover:text-primary hover:border-primary hover:bg-primary-light transition-all duration-150"
          >
            {cat}
          </a>
        ))}
      </div>

      {postsFiltrados.length === 0 ? (
        <div className="py-20 text-center text-text-secondary">
          Nenhum post encontrado para este filtro.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {postsFiltrados.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
