import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import useMeasure from "react-use-measure";
import { fadeUp } from "../../../lib/animations";
import Container from "../../Container";

export default function ExhNewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formRef, formBounds] = useMeasure();

  function handleNewsletterSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ email });
    setSubmitted(true);
  }

  return (
    <Container>
      <section className="px-3 pb-36 pt-56 lg:pb-52 lg:pt-72">
        <motion.div animate={{ height: formBounds.height }}>
          <form ref={formRef} onSubmit={handleNewsletterSignUp}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="gap-4 text-white"
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.h2
                  key={`h2-${submitted}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{
                    type: "tween",
                    ease: "easeOut",
                    duration: 0.2,
                    delay: 0.1,
                  }}
                  className="mx-auto max-w-[25ch] pb-6 text-center text-2xl md:pb-8 md:text-3xl"
                >
                  {!submitted &&
                    "Meld deg på nyhetsbrev for nye arrangementer og oppdateringer"}
                  {submitted &&
                    "Takk for at du ønsker å følge med på Akerselva Friluftsmuseum"}
                </motion.h2>
              </AnimatePresence>
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={`input-${submitted}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{
                    type: "spring",
                    duration: 0.8,
                    delay: 0.3,
                  }}
                  className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row md:max-w-lg"
                >
                  {!submitted && (
                    <>
                      <label htmlFor="email" className="sr-only">
                        E-post
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="E-post"
                        className="w-full rounded-xs bg-gray-medium py-3 px-5"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className="mx-auto min-w-max max-w-max rounded-xs bg-yellow py-3 px-5 text-black transition-all hover:brightness-110">
                        Meld meg på
                      </button>
                    </>
                  )}
                  {submitted && (
                    <p className="mx-auto pb-10 text-lg text-white text-opacity-60 md:text-xl">
                      Du er nå meldt på vårt nyhetsbrev.
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </form>
        </motion.div>
      </section>
    </Container>
  );
}
