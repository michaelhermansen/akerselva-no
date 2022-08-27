import { useButton } from "@react-aria/button";
import classNames from "classnames";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import scrollerItems from "../../../../lib/data/scrollerItems";
import { ImagePlaceholdersType } from "../../../../pages/inger-munch";
import Map from "./Map";
import { ScrollerItem } from "./ScrollerText";

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
        {scrollerItems.map((item) => (
          <Image
            key={item.id}
            src={`/assets/exhibition-scroller/${item.id}.jpg`}
            alt={itemInView.text}
            fill
            sizes="80vw"
            className={classNames("scale-105 object-cover", {
              hidden: item.id !== itemInView.id,
            })}
          />
        ))}
      </div>

      <div
        className={"pointer-events-none absolute inset-0 z-30"}
        aria-hidden={!showMap}
        hidden={!showMap}
      >
        <Map selectedItem={itemInView} mapId={mapId} />
      </div>
    </>
  );
}
