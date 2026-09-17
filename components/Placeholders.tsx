const gradients = [
  "linear-gradient(135deg, #C9A98F, #96C1C5)",
  "linear-gradient(135deg, #EFB8B4, #C9A98F)",
  "linear-gradient(135deg, #96C1C5, #7C9A6F)",
  "linear-gradient(135deg, #D8C4AE, #EFB8B4)",
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
      <span className="font-hand text-lg text-white/90 drop-shadow-sm">{label}</span>
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
      className={`flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-bg font-display font-semibold ${className}`}
    >
      {initials}
    </div>
  );
}
