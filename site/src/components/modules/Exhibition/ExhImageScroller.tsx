import classNames from "classnames";
import { Dispatch, SetStateAction, useState } from "react";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";
import scrollerItems from "../../../lib/data/scrollerItems";
import { AnimatePresence, motion } from "framer-motion";
import { MdLocationPin, MdCameraAlt } from "react-icons/md";

export default function ExhImageScroller() {
  const [frameRef, frameBounds] = useMeasure();
  const [itemInView, setItemInView] = useState(scrollerItems[0]);
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => setShowMap((bool) => !bool);

  const windowHeight = typeof window === "undefined" ? 0 : window.innerHeight;

  const { ref, inView } = useInView({
    rootMargin: "-35% 0px -65% 0px",
  });

  return (
    <div ref={ref} className="block gap-8 text-white md:flex">
      <div
        ref={frameRef}
        className="sticky hidden h-[400px] flex-1 rounded-sm bg-gray-medium md:block"
        style={{ top: `${windowHeight * 0.35 - frameBounds.height * 0.5}px` }}
      >
        <div className="p-6">
          ({showMap ? "Kart" : "Bilde"} {itemInView.id})
        </div>
        <button
          onClick={toggleMap}
          className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black bg-opacity-50 py-2 pl-4 pr-6 text-white text-opacity-60 transition-colors hover:text-opacity-100"
        >
          {showMap && (
            <>
              <MdCameraAlt />
              <span>Se bilde</span>
            </>
          )}
          {!showMap && (
            <>
              <MdLocationPin />
              <span>Se kart</span>
            </>
          )}
        </button>
      </div>

      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed bottom-6 right-6 h-[250px] w-3/4 flex-1 rounded-sm bg-gray-medium shadow-2xl md:hidden"
          >
            <div className="p-6">
              ({showMap ? "Kart" : "Bilde"} {itemInView.id})
            </div>
            <button
              onClick={toggleMap}
              className="absolute top-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-black bg-opacity-50 text-white text-opacity-60 transition-colors hover:text-opacity-100"
              title="Se kart"
            >
              {showMap && (
                <>
                  <MdCameraAlt size={24} />
                </>
              )}
              {!showMap && (
                <>
                  <MdLocationPin size={24} />
                </>
              )}
            </button>
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
        "py-2 text-lg text-white text-opacity-50 transition-colors duration-100 sm:text-2xl",
        {
          "text-opacity-100": itemInView.id === item.id,
        }
      )}
    >
      {item.text}
    </li>
  );
}
