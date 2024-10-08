import classNames from "classnames";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: PageLayoutProps) {
  return (
    <div
      className={classNames(
        "mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}
