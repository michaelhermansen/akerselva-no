import classNames from "classnames";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: PageLayoutProps) {
  return (
    <div className={classNames("mx-auto max-w-[1400px] px-6", className)}>
      {children}
    </div>
  );
}
