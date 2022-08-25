import classNames from "classnames";
import { Dispatch, SetStateAction, useState } from "react";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";
import scrollerItems from "../../../lib/data/scrollerItems";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp } from "../../../lib/animations";

export default function ExhImageScroller() {
  const [frameRef, frameBounds] = useMeasure();
  const [itemInView, setItemInView] = useState(scrollerItems[0]);

  const { ref, inView } = useInView({
    rootMargin: "-50% 0px -50% 0px",
  });

  const windowHeight = typeof window === "undefined" ? 0 : window.innerHeight;

  return (
    <div ref={ref} className="block gap-8 text-white md:flex">
      <div
        ref={frameRef}
        className="sticky hidden h-[400px] flex-1 rounded-sm bg-gray-medium p-8 md:block"
        style={{ top: `${windowHeight * 0.35 - frameBounds.height * 0.5}px` }}
      >
        (Bilde {itemInView.id})
      </div>

      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed bottom-6 right-6 h-[250px] w-3/4 flex-1 rounded-sm bg-gray-medium p-8 shadow-2xl md:hidden"
          >
            (Bilde {itemInView.id})
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="flex-1"
        style={{
          paddingTop: frameBounds.height / 3,
          paddingBottom: `${frameBounds.height * 0.5}px`,
        }}
      >
        <ul>
          {scrollerItems.map((item) => (
            <ScrollerText
              key={item.id}
              item={item}
              itemInView={itemInView}
              setItemInView={setItemInView}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

interface ScrollerItem {
  id: number;
  text: string;
  image: string;
}

interface ScrollerTextProps {
  item: ScrollerItem;
  itemInView: ScrollerItem;
  setItemInView: Dispatch<SetStateAction<ScrollerItem>>;
}

function ScrollerText({ item, itemInView, setItemInView }: ScrollerTextProps) {
  const { ref } = useInView({
    rootMargin: "-35% 0px -65% 0px",
    onChange: (inView) => inView && setItemInView(item),
  });

  return (
    <li
      ref={ref}
      className={classNames(
        "py-2 text-2xl text-white text-opacity-50 transition-colors duration-100",
        {
          "text-opacity-100": itemInView.id === item.id,
        }
      )}
    >
      {item.text}
    </li>
  );
}
