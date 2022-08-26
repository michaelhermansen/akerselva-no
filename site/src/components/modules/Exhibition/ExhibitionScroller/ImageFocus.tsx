import { motion } from "framer-motion";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { lock, unlock } from "tua-body-scroll-lock";
import { fadeUp } from "../../../../lib/animations";
import { ScrollerItem } from "./ScrollerText";

interface ImageFocusProps {
  selectedItem: ScrollerItem | undefined;
}

export default function ImageFocus({ selectedItem }: ImageFocusProps) {
  const router = useRouter();
  const wrapperRef = useRef(null);

  const openFocus = useCallback(
    (id: number) => {
      router.replace({ query: { focus: id } }, undefined, { shallow: true });
    },
    [router]
  );

  const closeFocus = useCallback(() => {
    router.replace({ query: {} }, undefined, { shallow: true });
  }, [router]);

  useEffect(() => {
    document.addEventListener("click", closeFocus);
    return () => document.removeEventListener("click", closeFocus);
  }, [closeFocus]);

  useEffect(() => {
    const target = wrapperRef.current;
    lock(target);
    return () => unlock(target);
  }, []);

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="fixed inset-0 z-[99] grid place-items-center bg-black px-6 md:px-12 lg:px-24"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="h-auto w-full max-w-5xl"
      >
        <div className="relative grid aspect-video max-h-[80vh] w-full max-w-5xl place-items-center">
          <Image
            src="/assets/img-1.png"
            alt=""
            fill
            className="rounded-lg object-cover"
            priority
          />

          <button className="absolute right-4 z-10 hidden rounded-full bg-white bg-opacity-20 p-4 text-white shadow-lg backdrop-blur-lg sm:block md:right-6 2xl:-right-24">
            <MdArrowForward size={24} />
          </button>

          <button className="absolute left-4 z-10 hidden rounded-full bg-white bg-opacity-20 p-4 text-white shadow-lg backdrop-blur-lg sm:block md:left-6 2xl:-left-24">
            <MdArrowBack size={24} />
          </button>
        </div>

        <p className="max-w-3xl py-4 px-2 text-white text-opacity-75">
          {selectedItem?.text}
        </p>
      </motion.div>
    </motion.div>
  );
}
