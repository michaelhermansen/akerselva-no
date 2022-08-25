import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdCameraAlt, MdLocationPin } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";
import scrollerItems from "../../../../lib/data/scrollerItems";
import FrameContent from "./FrameContent";
import ScrollerText from "./ScrollerText";

export default function ImageScroller() {
  const [frameRef, frameBounds] = useMeasure();
  const [itemInView, setItemInView] = useState(scrollerItems[0]);
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => setShowMap((bool) => !bool);

  const windowHeight = typeof window === "undefined" ? 0 : window.innerHeight;

  const { ref, inView } = useInView({
    rootMargin: "-40% 0px -60% 0px",
  });

  return (
    <div ref={ref} className="block gap-8 text-white md:flex">
      {/* Sticky frame on desktop */}
      <div
        ref={frameRef}
        className="sticky hidden h-[400px] flex-1 overflow-hidden rounded-sm bg-gray-medium md:block"
        style={{ top: `${windowHeight * 0.4 - frameBounds.height * 0.5}px` }}
      >
        <FrameContent showMap={showMap} itemInView={itemInView} />

        <button
          onClick={toggleMap}
          className="absolute bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-black bg-opacity-75 py-2 pl-4 pr-6 text-white text-opacity-75 shadow-lg backdrop-blur-lg transition-colors hover:text-opacity-100"
        >
          {showMap ? <MdCameraAlt /> : <MdLocationPin />}
          <span>{showMap ? "Se bilde" : "Se kart"}</span>
        </button>
      </div>

      {/* Fixed frame on mobile */}
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed bottom-6 right-6 h-[220px] w-3/4 flex-1 overflow-hidden rounded-sm bg-gray-medium shadow-2xl sm:h-[250px] sm:w-2/3 md:hidden"
          >
            <FrameContent showMap={showMap} itemInView={itemInView} />

            <button
              onClick={toggleMap}
              className="absolute top-4 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-black bg-opacity-75 text-white text-opacity-75 shadow-lg backdrop-blur-lg transition-colors hover:text-opacity-100"
              title={showMap ? "Se bilde" : "Se kart"}
            >
              {showMap && <MdCameraAlt size={24} />}
              {!showMap && <MdLocationPin size={24} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Text scroller */}
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
