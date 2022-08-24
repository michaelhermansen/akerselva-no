import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { fadeUp } from "../../lib/animations/fadeUp";
import Button from "../Button";
import Container from "../Container";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  function handleNewsletterSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ email });
  }

  return (
    <Container>
      <section className="py-32 md:py-44 lg:py-56">
        <form
          className="grid place-items-center"
          onSubmit={handleNewsletterSignUp}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid place-items-center gap-4"
          >
            <h2 className="max-w-[25ch] pb-4 text-center text-3xl leading-snug md:text-4xl lg:text-5xl">
              Motta flaskepost for nye arrangementer og oppdateringer
            </h2>

            <label htmlFor="email" className="sr-only">
              E-post
            </label>

            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="E-post"
              className="w-full max-w-sm rounded-xs border border-black border-opacity-5 py-3 px-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit">Meld meg på</Button>
          </motion.div>
        </form>
      </section>
    </Container>
  );
}
