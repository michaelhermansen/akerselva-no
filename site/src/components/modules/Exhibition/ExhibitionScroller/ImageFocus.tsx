import { AnimatePresence, motion } from "framer-motion";
import { indexOf } from "lodash";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import { MdArrowBack, MdArrowForward, MdClose } from "react-icons/md";
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
    function getListItemScrollPos() {
      const listItem: HTMLLIElement | null = document.querySelector(
        `#image-${selectedItem.id}`
      );
      return (listItem?.offsetTop || 0) - window.innerHeight * 0.4;
    }

    window.scroll({ top: getListItemScrollPos() });

    router.replace({ query: {} }, undefined, {
      shallow: true,
    });
  }, [router, selectedItem.id]);

  const nextImage = useCallback(() => {
    const currentItemIndex = indexOf(scrollerItems, selectedItem);
    if (currentItemIndex >= scrollerItems.length - 1) return;

    const nextItem = scrollerItems[currentItemIndex + 1];
    focusImage(nextItem.id);
  }, [focusImage, selectedItem]);

  const prevImage = useCallback(() => {
    const currentItemIndex = indexOf(scrollerItems, selectedItem);
    if (currentItemIndex <= 0) return;

    const prevItem = scrollerItems[currentItemIndex - 1];
    focusImage(prevItem.id);
  }, [focusImage, selectedItem]);

  // Handle keyboard/swipe events
  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const prevButtonEl = prevImageButtonRef.current;
    const nextButtonEl = nextImageButtonRef.current;

    let touchStartY: number | undefined;
    let touchStartX: number | undefined;

    function handleTouchStart(e: TouchEvent) {
      if (e.touches.length > 1) return;

      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    }

    function handleTouchMove(e: TouchEvent) {
      if (e.touches.length > 1) return;

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
      className="fixed inset-0 isolate z-[99] flex items-center justify-center gap-10 overflow-y-scroll overscroll-y-contain bg-black px-8 pt-8 pb-56 md:pb-8"
    >
      <div className="fixed bottom-12 z-30 -translate-x-14 md:relative md:translate-x-0">
        <button
          disabled={selectedItem.id === scrollerItems[0].id}
          className="rounded-full bg-gray-medium p-6 text-white transition-colors active:bg-opacity-75 disabled:cursor-not-allowed disabled:opacity-40"
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
          className="w-full max-w-6xl"
        >
          <div className="relative grid aspect-square max-h-[60vh] w-full place-items-center rounded-md border border-gray-medium bg-black md:max-h-[70vh]">
            <Image
              src={`/assets/exhibition-scroller/${selectedItem.id}.jpg`}
              alt={selectedItem.text}
              fill
              sizes="80vw"
              className="object-contain"
            />
          </div>
          <div className="relative z-20 flex items-baseline justify-between gap-6 px-2 pt-6">
            <p className="max-w-3xl  text-white text-opacity-75">
              {selectedItem.text}
            </p>
            <button
              onClick={closeFocus}
              className="rounded-full border border-gray-medium px-6 py-2 text-white text-opacity-60 transition-colors hover:text-opacity-100"
            >
              Lukk
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-12 z-30 translate-x-14 md:relative md:translate-x-0">
        <button
          disabled={
            selectedItem.id === scrollerItems[scrollerItems.length - 1].id
          }
          className="rounded-full bg-gray-medium p-6 text-white transition-colors active:opacity-75 disabled:cursor-not-allowed disabled:opacity-40"
          ref={nextImageButtonRef}
          onClick={nextImage}
        >
          <MdArrowForward size={24} />
        </button>
      </div>
    </motion.div>
  );
}
