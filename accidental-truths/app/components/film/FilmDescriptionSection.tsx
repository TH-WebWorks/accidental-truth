import { Children, Fragment, isValidElement, type ReactNode } from "react";

type FilmDescriptionSectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  pillLabel?: string;
  children: ReactNode | ((args: { pillLabel: string }) => ReactNode);
  variant?: "next" | "legacy";
  className?: string;
  compactBottom?: boolean;
};

type FilmDescriptionProseCardProps = {
  children: ReactNode;
  className?: string;
};

type FilmDescriptionPillProps = {
  label?: string;
  className?: string;
};

type FilmDescriptionSplitLayoutProps = {
  left: ReactNode;
  right?: ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function hasRenderableNodeContent(node: ReactNode): boolean {
  if (node === null || node === undefined || typeof node === "boolean") {
    return false;
  }

  if (typeof node === "string") {
    return node.trim().length > 0;
  }

  if (typeof node === "number") {
    return true;
  }

  const childArray = Children.toArray(node);
  if (childArray.length > 1) {
    return childArray.some((child) => hasRenderableNodeContent(child));
  }

  if (!isValidElement(node)) {
    return childArray.length > 0;
  }

  const elementChildren = (node.props as { children?: ReactNode }).children;

  if (node.type === Fragment) {
    return hasRenderableNodeContent(elementChildren);
  }

  if (node.type === FilmDescriptionProseCard) {
    return hasRenderableNodeContent(elementChildren);
  }

  if (elementChildren === undefined) {
    return true;
  }

  return hasRenderableNodeContent(elementChildren);
}

export function FilmDescriptionSection({
  eyebrow,
  title,
  intro,
  pillLabel = "WHAT’S NEXT?",
  children,
  variant = "next",
  className,
  compactBottom = false,
}: FilmDescriptionSectionProps) {
  const content = typeof children === "function" ? children({ pillLabel }) : children;

  return (
    <div
      className={cx(
        "film-copy-section",
        variant === "next" && "film-copy-section--no-top-divider",
        compactBottom && "film-copy-section--compact-bottom",
        className
      )}
    >
      <div className="film-copy-section__head mb-8 space-y-3">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--tone-muted)]">{eyebrow}</p>
        ) : null}
        <h2 className="film-copy-section__title">{title}</h2>
        {intro ? <p className="film-copy-section__intro">{intro}</p> : null}
      </div>
      {content}
    </div>
  );
}

export function FilmDescriptionProseCard({ children, className }: FilmDescriptionProseCardProps) {
  return (
    <article className={cx("rounded-xl border border-[var(--tone-border)] bg-[var(--tone-surface)] p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.28)]", className)}>
      <div className="film-copy-section__prose">{children}</div>
    </article>
  );
}

export function FilmDescriptionPill({ label = "WHAT’S NEXT?", className }: FilmDescriptionPillProps) {
  return (
    <p
      className={cx(
        "inline-block rounded-md border border-[var(--tone-accent)]/40 bg-[var(--tone-accent-soft)] px-4 py-2.5 text-xl font-bold text-[var(--tone-text)] shadow-[0_0_14px_rgba(62,169,191,0.10)]",
        className
      )}
    >
      {label}
    </p>
  );
}

export function FilmDescriptionSplitLayout({
  left,
  right,
  className,
  leftClassName,
  rightClassName,
}: FilmDescriptionSplitLayoutProps) {
  const hasRightContent = hasRenderableNodeContent(right);

  if (!hasRightContent) {
    return (
      <div className={className}>
        <div className={cx("space-y-6", leftClassName)}>{left}</div>
      </div>
    );
  }

  return (
    <div className={cx("grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]", className)}>
      <div className={cx("space-y-6", leftClassName)}>{left}</div>
      <div className={rightClassName}>{right}</div>
    </div>
  );
}
