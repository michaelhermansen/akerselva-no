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
      router.push({ query: { image: id } }, undefined, { shallow: true });
    },
    [router]
  );

  const closeFocus = useCallback(() => {
    function getListItemScrollPos() {
      const listItem: HTMLLIElement | null = document.querySelector(
        `#image-${selectedItem.id}`
      );
      return (listItem?.offsetTop || 0) - window.innerHeight * 0.4 + 8;
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

    wrapperEl?.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      wrapperEl?.removeEventListener("click", handleClick);
      document?.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeFocus, prevImage, nextImage]);

  useEffect(() => {
    // const target = wrapperRef.current;
    lock();
    return () => unlock();
  }, []);

  if (!selectedItem.id) return null;

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 isolate z-[99] flex items-center justify-center gap-10 overflow-y-scroll bg-black/90 px-8 pt-8 pb-56 backdrop-blur-md md:pb-8"
    >
      <div className="fixed bottom-12 z-30 -translate-x-24 md:relative md:translate-x-0">
        <button
          disabled={selectedItem.id === scrollerItems[0].id}
          className="rounded-full bg-gray-medium p-6 text-white transition-colors active:bg-opacity-75 disabled:cursor-not-allowed disabled:opacity-40"
          ref={prevImageButtonRef}
          onClick={prevImage}
          title="Forrige bilde"
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
          <div className="relative grid aspect-square max-h-[60vh] w-full place-items-center rounded-sm bg-black md:max-h-[70vh]">
            <Image
              src={`/assets/exhibition-scroller/${selectedItem.id}.jpg`}
              alt={selectedItem.text}
              fill
              sizes="80vw"
              className="w-full object-contain"
              draggable={false}
            />
          </div>
          <div className="relative z-20 flex items-baseline justify-between gap-6 px-2 pt-6">
            <p className="max-w-3xl  text-white text-opacity-75">
              {selectedItem.text}
            </p>

            {/* Close button desktop */}
            <button
              onClick={closeFocus}
              className="group hidden items-center gap-3 rounded-full bg-gray-medium py-2 pl-2 pr-6 leading-[0] text-white/60 transition-colors hover:text-white md:flex"
            >
              <div className="rounded-full bg-white/60 p-1 transition-colors group-hover:bg-white">
                <MdClose size={16} className="text-gray-medium" />
              </div>
              <span>Lukk</span>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-12 md:hidden">
        <button
          disabled={
            selectedItem.id === scrollerItems[scrollerItems.length - 1].id
          }
          className="rounded-full bg-gray-medium p-6 text-white transition-colors active:opacity-75 disabled:cursor-not-allowed disabled:opacity-40"
          ref={nextImageButtonRef}
          onClick={closeFocus}
          title="Lukk"
        >
          <MdClose size={24} />
        </button>
      </div>

      <div className="fixed bottom-12 z-30 translate-x-24 md:relative md:translate-x-0">
        <button
          disabled={
            selectedItem.id === scrollerItems[scrollerItems.length - 1].id
          }
          className="rounded-full bg-gray-medium p-6 text-white transition-colors active:opacity-75 disabled:cursor-not-allowed disabled:opacity-40"
          ref={nextImageButtonRef}
          onClick={nextImage}
          title="Neste bilde"
        >
          <MdArrowForward size={24} />
        </button>
      </div>
    </motion.div>
  );
}
