import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
import { useInView } from "react-intersection-observer";

export interface ScrollerItem {
  id: number;
  text: string;
  geopoint?: {
    lng: number;
    lat: number;
  };
}

export interface ScrollerTextProps {
  item: ScrollerItem;
  itemInView: ScrollerItem;
  setItemInView: Dispatch<SetStateAction<ScrollerItem>>;
}

export default function ScrollerText({
  item,
  itemInView,
  setItemInView,
}: ScrollerTextProps) {
  const { ref } = useInView({
    rootMargin: "-40% 0px -60% 0px",
    onChange: (inView) => inView && setItemInView(item),
  });

  return (
    <li
      id={`image-${item.id}`}
      ref={ref}
      className={classNames(
        "py-3 text-xl text-white sm:text-2xl",
        itemInView.id === item.id ? "text-opacity-100" : "text-opacity-20"
      )}
    >
      {item.text}
    </li>
  );
}
