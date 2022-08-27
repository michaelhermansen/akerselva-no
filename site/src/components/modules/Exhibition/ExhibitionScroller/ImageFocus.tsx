import { AnimatePresence, motion } from "framer-motion";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { lock, unlock } from "tua-body-scroll-lock";
import { fadeUp } from "../../../../lib/animations";
import scrollerItems from "../../../../lib/data/scrollerItems";
import { ScrollerItem } from "./ScrollerText";

interface ImageFocusProps {
  selectedItem: ScrollerItem;
}

export default function ImageFocus({ selectedItem }: ImageFocusProps) {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prevImageButtonRef = useRef<HTMLButtonElement>(null);
  const nextImageButtonRef = useRef<HTMLButtonElement>(null);

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
    if (selectedItem.id >= scrollerItems.length) focusImage(1);
    else focusImage(selectedItem.id + 1);
  }, [focusImage, selectedItem.id]);

  const prevImage = useCallback(() => {
    if (selectedItem.id <= 1) focusImage(scrollerItems.length);
    else focusImage(selectedItem.id - 1);
  }, [focusImage, selectedItem.id]);

  // Handle keyboard/swipe events
  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const prevButtonEl = prevImageButtonRef.current;
    const nextButtonEl = nextImageButtonRef.current;

    let touchStartY: number | undefined;
    let touchStartX: number | undefined;

    function handleTouchStart(e: TouchEvent) {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    }

    function handleTouchMove(e: TouchEvent) {
      if (!touchStartY || !touchStartX) return;
      if (e.target === nextButtonEl || e.target === prevButtonEl) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      const threshold = 50;

      const swipe = {
        up: deltaY < threshold * -1,
        down: deltaY > threshold,
        left: deltaX < threshold * -1,
        right: deltaX > threshold,
      };

      if (swipe.up) return;
      if (swipe.down) return closeFocus();
      if (swipe.left) return nextImage();
      if (swipe.right) return prevImage();
    }

    function handleClick(e: MouseEvent) {
      if (e.target === wrapperEl) closeFocus();
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") return closeFocus();

      if (e.key === "ArrowLeft") {
        prevImage();
        prevButtonEl?.focus();
        return;
      }

      if (e.key === "ArrowRight") {
        nextImage();
        nextButtonEl?.focus();
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        if (document.activeElement !== prevButtonEl) {
          prevButtonEl?.focus();
          return;
        }
        if (document.activeElement !== nextButtonEl) {
          nextButtonEl?.focus();
          return;
        }
      }
    }

    wrapperEl?.addEventListener("touchstart", handleTouchStart);
    wrapperEl?.addEventListener("touchmove", handleTouchMove);
    wrapperEl?.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      wrapperEl?.removeEventListener("touchstart", handleTouchStart);
      wrapperEl?.removeEventListener("touchmove", handleTouchMove);
      wrapperEl?.removeEventListener("click", handleClick);
      document?.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeFocus, prevImage, nextImage]);

  useEffect(() => {
    const target = wrapperRef.current;
    lock(target);
    return () => unlock(target);
  }, []);

  if (!selectedItem.id) return null;

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[99] flex items-center justify-center gap-10 bg-black px-6"
    >
      <div className="absolute bottom-12 z-10 mt-8 -translate-x-14 md:relative md:translate-x-0">
        <button
          className="rounded-full bg-gray-medium p-6 text-white transition-colors active:bg-opacity-75"
          ref={prevImageButtonRef}
          onClick={prevImage}
        >
          <MdArrowBack size={24} />
        </button>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={selectedItem.id}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="h-auto w-full max-w-5xl origin-top"
        >
          <div className="relative grid aspect-video max-h-[80vh] w-full max-w-5xl place-items-center">
            <Image
              src={`/assets/exhibition-scroller/${selectedItem.id}.jpg`}
              alt={selectedItem.text}
              fill
              sizes="80vw"
              className="rounded-lg object-cover"
              draggable={false}
            />
          </div>
          <p className="max-w-3xl px-2 pt-4 pb-10 text-white text-opacity-75">
            {selectedItem.text}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 z-10 mt-8 translate-x-14 md:relative md:translate-x-0">
        <button
          className="rounded-full bg-gray-medium p-6 text-white transition-colors active:bg-opacity-75"
          ref={nextImageButtonRef}
          onClick={nextImage}
        >
          <MdArrowForward size={24} />
        </button>
      </div>
    </motion.div>
  );
}
