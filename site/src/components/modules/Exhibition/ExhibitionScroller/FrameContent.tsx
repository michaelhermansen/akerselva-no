import { useButton } from "@react-aria/button";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { ImagePlaceholdersType } from "../../../../pages/inger-munch";
import Map from "./Map";
import { ScrollerItem } from "./ScrollerText";

interface FrameContentProps {
  showMap: boolean;
  itemInView: ScrollerItem;
  imagePlaceholders: ImagePlaceholdersType;
  mapId: string;
}

export default function FrameContent({
  showMap,
  itemInView,
  imagePlaceholders,
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
        className={"pointer-events-none absolute inset-0 z-30"}
        aria-hidden={!showMap}
        hidden={!showMap}
      >
        <Map selectedItem={itemInView} mapId={mapId} />
      </div>
    </>
  );
}
