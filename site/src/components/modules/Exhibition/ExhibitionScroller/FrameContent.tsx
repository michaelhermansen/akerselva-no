import { useButton } from "@react-aria/button";
import classNames from "classnames";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Map from "react-map-gl";
import { ImagePlaceholdersType } from "../../../../pages/inger-munch";
import { ScrollerItem } from "./ScrollerText";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const MAPBOX_STYLE = "mapbox://styles/mapbox/dark-v10";

interface FrameContentProps {
  showMap: boolean;
  itemInView: ScrollerItem;
  imagePlaceholders: ImagePlaceholdersType;
}

export default function FrameContent({
  showMap,
  itemInView,
  imagePlaceholders,
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
        className={classNames(
          "group absolute inset-0 isolate z-20 transition-opacity",
          { "pointer-events-none opacity-0": showMap }
        )}
      >
        <Image
          key={itemInView.id}
          src={`https://picsum.photos/seed/${itemInView.id}/1200/800`}
          alt=""
          fill
          sizes="100%"
          className="rounded-sm object-cover transition-opacity group-focus-visible:opacity-75"
          priority
          placeholder="blur"
          blurDataURL={imagePlaceholders[itemInView.id]}
        />
      </div>

      <div
        className={classNames(
          "pointer-events-none absolute inset-0 z-30 transition-opacity",
          { "z-10 opacity-0": !showMap }
        )}
      >
        <Map
          id="scrollerMap"
          mapboxAccessToken={MAPBOX_TOKEN}
          mapStyle={MAPBOX_STYLE}
          viewState={{
            longitude: 10.7668,
            latitude: 59.9403,
            zoom: 11,
            bearing: -25,
            pitch: 0,
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
            width: 0,
            height: 0,
          }}
          logoPosition="top-left"
        />
      </div>
    </>
  );
}
