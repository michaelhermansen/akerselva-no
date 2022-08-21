import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { fadeUp } from "../animations/fadeUp";
import Button from "./Button";
import Container from "./Container";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  function handleNewsletterSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ email });
  }

  return (
    <Container>
      <section className="py-52">
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
            <h2 className="max-w-lg pb-4 text-center text-4xl leading-tight">
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
              className="w-full max-w-xs rounded-lg py-3 px-5"
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
