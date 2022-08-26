import { AnimatePresence, motion } from "framer-motion";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { lock, unlock } from "tua-body-scroll-lock";
import { fadeUp } from "../../../../lib/animations";
import scrollerItems from "../../../../lib/data/scrollerItems";
import { ImagePlaceholdersType } from "../../../../pages/inger-munch";
import { ScrollerItem } from "./ScrollerText";

interface ImageFocusProps {
  selectedItem: ScrollerItem | undefined;
  imagePlaceholders: ImagePlaceholdersType;
}

export default function ImageFocus({
  selectedItem,
  imagePlaceholders,
}: ImageFocusProps) {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prevImageButtonRef = useRef<HTMLButtonElement>(null);
  const nextImageButtonRef = useRef<HTMLButtonElement>(null);

  const idFocused = selectedItem?.id;

  const focusImage = useCallback(
    (id: number) => {
      router.replace({ query: { focus: id } }, undefined, { shallow: true });
    },
    [router]
  );

  const closeFocus = useCallback(() => {
    router.replace({ query: {} }, undefined, { shallow: true });
  }, [router]);

  const nextImage = useCallback(() => {
    if (!idFocused) return null;

    if (idFocused >= scrollerItems.length) focusImage(1);
    else focusImage(idFocused + 1);
  }, [focusImage, idFocused]);

  const prevImage = useCallback(() => {
    if (!idFocused) return null;

    if (idFocused <= 1) focusImage(scrollerItems.length);
    else focusImage(idFocused - 1);
  }, [focusImage, idFocused]);

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    if (document.activeElement !== prevImageButtonRef.current) {
      nextImageButtonRef.current?.focus();
    }

    function handleClick(e: MouseEvent) {
      if (e.target === wrapperElement) closeFocus();
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") return closeFocus();
      if (e.key === "ArrowLeft") {
        prevImage();
        prevImageButtonRef.current?.focus();
      }
      if (e.key === "ArrowRight") {
        nextImage();
        nextImageButtonRef.current?.focus();
      }
    }

    wrapperElement?.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      wrapperElement?.removeEventListener("click", handleClick);
      document?.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeFocus, prevImage, nextImage]);

  useEffect(() => {
    const target = wrapperRef.current;
    lock(target);
    return () => unlock(target);
  }, []);

  if (!idFocused) return null;

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="fixed inset-0 z-[99] flex items-center justify-center gap-10 bg-black px-6"
    >
      <div className="absolute bottom-12 z-10 -translate-x-10 pt-8 md:relative md:translate-x-0">
        <button
          className="rounded-full bg-white bg-opacity-20 p-4 text-white shadow-lg backdrop-blur-lg"
          ref={prevImageButtonRef}
          onClick={prevImage}
          onBlur={() => nextImageButtonRef.current?.focus()}
        >
          <MdArrowBack size={24} />
        </button>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={idFocused}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="h-auto w-full max-w-5xl"
        >
          <div className="relative grid aspect-video max-h-[80vh] w-full max-w-5xl place-items-center">
            <Image
              src={`https://picsum.photos/seed/${idFocused}/1200/800`}
              alt=""
              fill
              className="rounded-lg object-cover"
              priority
              placeholder="blur"
              blurDataURL={imagePlaceholders[idFocused]}
            />
          </div>
          <p className="max-w-3xl py-4 px-2 text-white text-opacity-75">
            {selectedItem?.text}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 z-10 translate-x-10 pt-8 md:relative md:translate-x-0">
        <button
          className="rounded-full bg-white bg-opacity-20 p-4 text-white shadow-lg backdrop-blur-lg"
          ref={nextImageButtonRef}
          onClick={nextImage}
          onBlur={() => prevImageButtonRef.current?.focus()}
        >
          <MdArrowForward size={24} />
        </button>
      </div>
    </motion.div>
  );
}
