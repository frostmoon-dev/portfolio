const gradients = [
  "linear-gradient(135deg, #d7c7b0, #b9a48a)",
  "linear-gradient(135deg, #c9d6c1, #9fb491)",
  "linear-gradient(135deg, #d8c2c9, #b995a3)",
  "linear-gradient(135deg, #c3ccd9, #93a3bd)",
  "linear-gradient(135deg, #e0d3b8, #c7ab7e)",
  "linear-gradient(135deg, #cdbfe0, #a08ac0)",
];

export function PhotoPlaceholder({
  label,
  seed = 0,
  className = "",
}: {
  label: string;
  seed?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center text-center px-2 ${className}`}
      style={{ background: gradients[seed % gradients.length] }}
    >
      <span className="font-[family-name:var(--font-noto)] text-[10px] uppercase tracking-wide text-white/80">
        {label}
      </span>
    </div>
  );
}

export function AvatarPlaceholder({
  initials,
  className = "",
}: {
  initials: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-stone-500 to-stone-700 text-white font-semibold ${className}`}
    >
      {initials}
    </div>
  );
}
