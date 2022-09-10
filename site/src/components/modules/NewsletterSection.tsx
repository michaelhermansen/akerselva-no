import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import useMeasure from "react-use-measure";
import { fadeUp } from "../../lib/animations";
import Button from "../Button";
import Container from "../Container";

export default function NewsletterSection() {
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
      <section className="py-32 md:py-44">
        <form
          ref={formRef}
          className="grid min-h-[300px] place-items-center pb-16"
          onSubmit={handleNewsletterSignUp}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid place-items-center gap-4"
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
                className="max-w-[25ch] pb-4 text-center text-3xl md:text-4xl"
              >
                {!submitted &&
                  "Motta flaskepost for nye arrangementer og oppdateringer"}
                {submitted &&
                  "Takk for at du ønsker å følge med på Akerselva Friluftsmuseum"}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{
                  type: "spring",
                  duration: 0.8,
                  delay: 0.5,
                }}
                key={`input-${submitted}`}
                className="w-full max-w-sm justify-center"
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
                      className="mb-3 w-full rounded-xs border border-black border-opacity-10 py-3 px-5"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button className="mx-auto" type="submit">
                      Meld meg på
                    </Button>
                  </>
                )}
                {submitted && (
                  <p className="pb-10 text-center text-lg text-black text-opacity-60 md:text-xl">
                    Du er nå meldt på vårt nyhetsbrev.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </form>
      </section>
    </Container>
  );
}
