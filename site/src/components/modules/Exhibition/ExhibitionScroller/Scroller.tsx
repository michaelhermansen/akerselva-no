import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdCameraAlt, MdLocationPin } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { useMap } from "react-map-gl";
import NoSSR from "react-no-ssr";
import useMeasure from "react-use-measure";
import scrollerItems from "../../../../lib/data/scrollerItems";
import { ImagePlaceholderType } from "../../../../pages/inger-munch";
import FrameContent from "./FrameContent";
import ImageFocus from "./ImageFocus";
import ScrollerText from "./ScrollerText";

interface ImageScrollerProps {
  imagePlaceholder: ImagePlaceholderType;
}

export default function ImageScroller({
  imagePlaceholder,
}: ImageScrollerProps) {
  const [frameRef, frameBounds] = useMeasure();
  const [itemInView, setItemInView] = useState(scrollerItems[0]);
  const [showMap, setShowMap] = useState(false);
  const router = useRouter();
  const { mapMobile, mapDesktop } = useMap();

  const focusedItem = router.query.focus;
  const toggleMap = () => setShowMap((bool) => !bool);
  const windowHeight = typeof window === "undefined" ? 0 : window.innerHeight;

  const { ref, inView } = useInView({
    rootMargin: "-40% 0px -60% 0px",
  });

  const selectedItem = scrollerItems.find(
    (item) => item.id.toString() === router.query.focus
  );

  useEffect(() => {
    mapMobile?.resize();
    mapDesktop?.resize();
  }, [showMap, mapMobile, mapDesktop]);

  return (
    <>
      <AnimatePresence>
        {focusedItem && (
          <ImageFocus
            imagePlaceholder={imagePlaceholder}
            selectedItem={selectedItem}
          />
        )}
      </AnimatePresence>

      <div ref={ref} className="block gap-8 text-white md:flex">
        {/* Sticky frame on desktop */}
        <NoSSR>
          <div
            ref={frameRef}
            className="sticky hidden h-[400px] flex-1 overflow-hidden rounded-sm bg-gray-medium md:block"
            style={{
              top: `${windowHeight * 0.4 - frameBounds.height * 0.5}px`,
            }}
          >
            <button
              onClick={toggleMap}
              className="absolute bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-black bg-opacity-75 py-2 pl-4 pr-6 text-white text-opacity-75 shadow-lg backdrop-blur-lg transition-colors hover:text-opacity-100"
            >
              {showMap ? <MdCameraAlt /> : <MdLocationPin />}
              <span>{showMap ? "Se bilde" : "Se kart"}</span>
            </button>

            <FrameContent
              imagePlaceholder={imagePlaceholder}
              showMap={showMap}
              itemInView={itemInView}
              mapId="mapDesktop"
            />
          </div>
        </NoSSR>

        {/* Fixed frame on mobile */}
        <div
          className={classNames(
            "fixed bottom-6 right-6 z-50 h-[180px] w-2/3 flex-1 overflow-hidden rounded-sm bg-gray-medium shadow-2xl transition-opacity duration-300 sm:h-[250px] sm:w-2/3 md:hidden",
            { "pointer-events-none opacity-0": !inView }
          )}
        >
          <button
            onClick={toggleMap}
            className="absolute top-4 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-black bg-opacity-75 text-white text-opacity-75 shadow-lg backdrop-blur-lg transition-colors hover:text-opacity-100"
            title={showMap ? "Se bilde" : "Se kart"}
          >
            {showMap && <MdCameraAlt size={24} />}
            {!showMap && <MdLocationPin size={24} />}
          </button>

          <FrameContent
            imagePlaceholder={imagePlaceholder}
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
    </>
  );
}
