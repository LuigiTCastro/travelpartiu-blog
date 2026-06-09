import Link from "next/link";

export default function Breadcrumb({ categoria, titulo, light = false }) {
  const textColor = light ? "text-white/60" : "text-text-muted";
  const hoverColor = light ? "hover:text-white" : "hover:text-text";
  const activeColor = light ? "text-white/80" : "text-text-secondary";

  return (
    <nav aria-label="Breadcrumb" className={`text-[0.8125rem] ${textColor} mb-8`}>
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link href="/" className={`${hoverColor} transition-colors`}>
            Inicio
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        {categoria && (
          <>
            <li>
              <Link
                href={`/categoria/${categoria}`}
                className={`${hoverColor} transition-colors`}
              >
                {categoria}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
          </>
        )}
        <li className={`${activeColor} truncate max-w-[280px]`}>{titulo}</li>
      </ol>
    </nav>
  );
}
