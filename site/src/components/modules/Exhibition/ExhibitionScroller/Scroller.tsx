import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdCameraAlt, MdLocationPin } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { useMap } from "react-map-gl";
import useMeasure from "react-use-measure";
import scrollerItems from "../../../../lib/data/scrollerItems";
import FrameContent from "./FrameContent";
import ImageFocus from "./ImageFocus";
import ScrollerText from "./ScrollerText";

export default function ImageScroller() {
  const [itemInView, setItemInView] = useState(scrollerItems[0]);
  const [showMap, setShowMap] = useState(false);
  const router = useRouter();
  const { mapMobile, mapDesktop } = useMap();

  const focusedItem = router.query.focus;
  const toggleMap = () => setShowMap((bool) => !bool);

  const [frameRef, frameBounds] = useMeasure();

  const { ref, inView } = useInView({
    rootMargin: "-40% 0px -60% 0px",
  });

  const selectedItem =
    scrollerItems.find(
      (item) => String(item.id) === String(router.query.focus)
    ) || scrollerItems[0];

  useEffect(() => {
    mapMobile?.resize();
    mapDesktop?.resize();
  }, [showMap, mapMobile, mapDesktop]);

  return (
    <>
      <AnimatePresence>
        {focusedItem && <ImageFocus selectedItem={selectedItem} />}
      </AnimatePresence>

      <div ref={ref} className="block gap-8 text-white md:flex">
        {/* Sticky frame on desktop */}
        <div
          ref={frameRef}
          className="sticky top-[calc(40vh-30vh)] hidden h-[60vh] flex-1 overflow-hidden rounded-sm border border-black focus-within:border-gray-medium hover:border-gray-medium md:block"
        >
          <button
            onClick={toggleMap}
            className="absolute bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-gray-medium bg-opacity-60 py-2 pl-4 pr-6 text-white text-opacity-75 backdrop-blur-lg transition-colors hover:text-opacity-100"
          >
            {showMap ? <MdCameraAlt /> : <MdLocationPin />}
            <span>{showMap ? "Se bilde" : "Se kart"}</span>
          </button>

          <FrameContent
            showMap={showMap}
            itemInView={itemInView}
            mapId="mapDesktop"
          />
        </div>

        {/* Fixed frame on mobile */}
        <div
          className={classNames(
            "fixed bottom-6 right-6 z-50 h-[50vw] w-[60vw] overflow-hidden rounded-sm border border-gray-medium transition-opacity duration-300 md:hidden",
            { "pointer-events-none opacity-0": !inView }
          )}
        >
          <button
            onClick={toggleMap}
            className="absolute top-4 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-gray-medium bg-opacity-60 text-white text-opacity-75 backdrop-blur-lg transition-colors hover:text-opacity-100"
            title={showMap ? "Se bilde" : "Se kart"}
          >
            {showMap && <MdCameraAlt size={24} />}
            {!showMap && <MdLocationPin size={24} />}
          </button>

          <FrameContent
            showMap={showMap}
            itemInView={itemInView}
            mapId="mapMobile"
          />
        </div>

        {/* Text scroller */}
        <div
          className="flex-1"
          style={{
            paddingTop: frameBounds.height / 3,
            paddingBottom: frameBounds.height * 0.5,
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
    </>
  );
}
