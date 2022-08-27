import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { fadeUp } from "../../../lib/animations";
import Container from "../../Container";

export default function ExhNewsletterSection() {
  const [email, setEmail] = useState("");

  function handleNewsletterSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log({ email });
  }

  return (
    <Container>
      <section className="px-3 pb-36 pt-56 lg:pb-52 lg:pt-72">
        <form onSubmit={handleNewsletterSignUp}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="gap-4 text-white"
          >
            <h2 className="mx-auto max-w-[25ch] pb-6 text-center text-2xl leading-snug md:pb-12 md:text-4xl lg:text-3xl">
              Meld deg på nyhetsbrev for nye arrangementer og oppdateringer
            </h2>

            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row md:max-w-lg">
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
              <button className="mx-auto min-w-max max-w-max rounded-xs bg-yellow py-3 px-5 text-black">
                Meld meg på
              </button>
            </div>
          </motion.div>
        </form>
      </section>
    </Container>
  );
}
