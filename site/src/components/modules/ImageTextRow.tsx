import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/future/image";
import { fadeUp } from "../../lib/animations";

interface ImageTextRowProps {
  text: string;
  caption: string;
  imageOrientation: "landscape" | "portrait";
  imageSrc: string;
  reverse?: true;
}

export default function ImageTextRow({
  text,
  caption,
  imageOrientation,
  imageSrc,
  reverse,
}: ImageTextRowProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={classNames(
        "mx-auto block items-center gap-20 py-8 sm:px-6 md:flex md:max-w-5xl",
        { "md:flex-row-reverse": reverse }
      )}
    >
      <div
        className={classNames(
          "relative mb-6 flex-[1] overflow-hidden rounded-sm bg-gray-medium sm:min-w-[320px] md:mb-0",
          {
            "h-[300px]": imageOrientation === "landscape",
            "h-[500px]": imageOrientation === "portrait",
          }
        )}
      >
        <Image src={imageSrc} alt="" fill className="object-cover" />
      </div>

      <figure
        className={classNames("col-span-2 max-w-md md:max-w-full", {
          "flex-[1]": imageOrientation === "landscape",
          "flex-[3]": imageOrientation === "portrait",
        })}
      >
        <blockquote>
          <p className="max-w-[40ch] pb-2 text-lg md:text-2xl">{text}</p>
        </blockquote>
        <figcaption>
          <cite className="not-italic text-black text-opacity-75">
            {caption}
          </cite>
        </figcaption>
      </figure>
    </motion.div>
  );
}
