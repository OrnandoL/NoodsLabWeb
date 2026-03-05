import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={`section-pad ${className || ""}`}>
      <div className="container-app">
        {(title || subtitle) && (
          <div className="mb-6">
            {title && <h2 className="text-2xl font-semibold tracking-wide text-moss sm:text-3xl">{title}</h2>}
            {subtitle && <p className="mt-2 text-sm text-zinc-600 sm:text-base">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
