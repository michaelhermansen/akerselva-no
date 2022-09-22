import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import useMeasure from "react-use-measure";
import { fadeUp } from "../../lib/animations";
import Button from "../Button";
import Container from "../Container";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleNewsletterSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(false);

    const response = await fetch("/api/flaskepost", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (response.status !== 200) {
      setError(true);
      setLoading(false);
      return;
    }

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <Container>
      <section className="py-32 md:py-44">
        <form
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
                  delay: 0.4,
                }}
                className="max-w-[16ch] pb-4 text-center text-2xl leading-normal md:max-w-[25ch] md:text-4xl"
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
                  delay: 0.8,
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
                      className="mb-2 w-full rounded-xs border border-black/5 py-4 px-5"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <motion.div
                      animate={{
                        height: error ? "auto" : 0,
                        opacity: error ? 1 : 0,
                        transition: { delay: 0.1 },
                      }}
                      className="mx-auto max-w-max overflow-hidden rounded-xs bg-yellow/75"
                      aria-hidden={!error}
                      role="alert"
                    >
                      <p className="py-2 px-5">
                        Noe gikk galt. Sjekk at e-posten er gyldig
                      </p>
                    </motion.div>

                    <Button
                      disabled={loading}
                      className="mx-auto mt-3"
                      type="submit"
                    >
                      {loading ? "Vennligst vent …" : "Meld meg på"}
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
