import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { ComponentProps, ReactNode, useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface ButtonProps extends ComponentProps<"button"> {}

export default function Button({
  className,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={classNames(
        "btn disabled:cursor-not-allowed disabled:opacity-75",
        className
      )}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
      {...rest}
    >
      <ArrowIcon visible={hover && !disabled} />
      <span>{children}</span>
    </button>
  );
}

interface ButtonLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  back?: true;
  transparent?: true;
}

export function ButtonLink({
  className,
  children,
  back,
  transparent,
  ...rest
}: ButtonLinkProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      className={classNames("btn", className, { "bg-white/10": transparent })}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      <ArrowIcon visible={hover} back={back} />
      <span>{children}</span>
    </Link>
  );
}

function ArrowIcon({ visible, back }: { visible: boolean; back?: true }) {
  return (
    <motion.span
      initial={{
        width: 0,
        x: -10,
        opacity: 0,
      }}
      animate={{
        width: visible ? "auto" : 0,
        x: visible ? 0 : -10,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
    >
      {!back && <MdArrowForward className="mr-2 hidden sm:block" />}
      {back && <MdArrowBack className="mr-2 hidden sm:block" />}
    </motion.span>
  );
}
