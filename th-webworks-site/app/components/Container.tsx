import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export function Container({ className = "", children }: Props) {
  return <div className={`container ${className}`.trim()}>{children}</div>;
}
