import classNames from "classnames";
import { motion } from "framer-motion";
import { fadeUp } from "../../../lib/animations";

interface ExhImageQuoteProps {
  quote: string;
  cite: string;
  imageOrientation: "landscape" | "portrait";
  reverse?: true;
}

export default function ExhImageQuote({
  quote,
  cite,
  imageOrientation,
  reverse,
}: ExhImageQuoteProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={classNames(
        "mx-auto block items-center gap-20 py-8 text-white sm:px-6 md:flex md:max-w-5xl",
        { "md:flex-row-reverse": reverse }
      )}
    >
      <div
        className={classNames(
          "mb-6 flex-[1] rounded-sm bg-gray-medium sm:min-w-[320px] md:mb-0",
          {
            "h-[300px]": imageOrientation === "landscape",
            "h-[500px]": imageOrientation === "portrait",
          }
        )}
      />

      <figure
        className={classNames("col-span-2 max-w-md md:max-w-full", {
          "flex-[1]": imageOrientation === "landscape",
          "flex-[3]": imageOrientation === "portrait",
        })}
      >
        <blockquote>
          <p className="max-w-[40ch] pb-2 text-lg md:text-2xl">«{quote}»</p>
        </blockquote>
        <figcaption>
          <cite className="not-italic text-white text-opacity-50">{cite}</cite>
        </figcaption>
      </figure>
    </motion.div>
  );
}
