import { ReactNode } from "react";

export function Widget({
  title,
  icon,
  rotate = 0,
  className = "",
  children,
}: {
  title: string;
  icon?: ReactNode;
  rotate?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      className={`widget rounded-sm overflow-hidden ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      <header className="widget-title flex items-center gap-2 px-3 py-2">
        {icon}
        <h2 className="font-display font-semibold text-[13px] uppercase tracking-wide text-primary-dark">
          {title}
        </h2>
      </header>
      <div className="p-4 md:p-5">{children}</div>
    </section>
  );
}
