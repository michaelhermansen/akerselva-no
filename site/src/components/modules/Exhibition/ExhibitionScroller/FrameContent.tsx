import { useButton } from "@react-aria/button";
import classNames from "classnames";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MdOpenInFull } from "react-icons/md";
import RenderIfVisible from "react-render-if-visible";
import scrollerItems from "../../../../lib/data/scrollerItems";
import Map from "./Map";
import { ScrollerItem } from "./ScrollerText";

const verticalImages = [
  25, 26, 29, 30, 31, 44, 47, 53, 54, 60, 61, 71, 72, 81, 90, 91, 92, 95, 96,
  105, 116, 119,
];

interface FrameContentProps {
  showMap: boolean;
  itemInView: ScrollerItem;
  mapId: string;
}

export default function FrameContent({
  showMap,
  itemInView,
  mapId,
}: FrameContentProps) {
  const router = useRouter();
  const buttonRef = useRef(null);

  function handleFocusImage() {
    router.replace({ query: { focus: itemInView.id } }, undefined, {
      shallow: true,
    });
  }

  const { buttonProps } = useButton(
    { elementType: "div", onPress: handleFocusImage },
    buttonRef
  );

  return (
    <>
      <div
        ref={buttonRef}
        {...buttonProps}
        className="group absolute inset-0 isolate z-20"
        aria-hidden={showMap}
        hidden={showMap}
      >
        <div className="absolute inset-0 z-40 grid place-items-center bg-black bg-opacity-25 opacity-0 transition-opacity hover:opacity-100 group-focus-visible:opacity-100">
          <MdOpenInFull size={24} />
        </div>
        {scrollerItems.map((item) => (
          <Image
            key={item.id}
            src={`/assets/exhibition-scroller/${item.id}.jpg`}
            alt={itemInView.text}
            fill
            sizes="80vw"
            className={classNames(
              "object-cover transition-opacity duration-75",
              {
                "opacity-0": item.id !== itemInView.id,
              }
            )}
          />
        ))}
      </div>

      <div
        className={"pointer-events-none absolute inset-0 z-30"}
        aria-hidden={!showMap}
        hidden={!showMap}
      >
        <RenderIfVisible stayRendered>
          <Map selectedItem={itemInView} mapId={mapId} />
        </RenderIfVisible>
      </div>
    </>
  );
}
