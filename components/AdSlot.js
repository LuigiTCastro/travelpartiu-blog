export default function AdSlot({ position = "in-content" }) {
  return (
    <div className="w-full rounded-xl bg-bg-accent border border-border flex items-center justify-center py-10 my-10">
      <span className="text-xs text-text-muted font-medium tracking-wide uppercase">
        Publicidade
      </span>
    </div>
  );
}
