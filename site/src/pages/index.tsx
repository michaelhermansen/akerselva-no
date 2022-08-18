import { kebabCase } from "lodash";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import LandingPageSection from "../components/LandingPageSection";
import Metadata from "../components/Metadata";
import NewsletterSection from "../components/NewsletterSection";
import { getEntries } from "../lib/api";

export default function Home({
  landingPageSections,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Extract navigation links for each section
  const navigationLinks =
    landingPageSections?.data.map((section) => ({
      linkText: section.attributes.NavigationTitle,
      linkUrl: `#${kebabCase(section.attributes.NavigationTitle)}`,
    })) || [];

  return (
    <>
      <Metadata title="Akerselva Friluftsmuseum" description="..." />

      <HeaderSection navigationLinks={navigationLinks} />
      <AboutSection />

      <div className="space-y-16 pt-28 pb-12">
        {landingPageSections?.data.map((section) => (
          <LandingPageSection key={section.id} section={section} />
        ))}
      </div>

      <NewsletterSection />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const landingPageSections = await getEntries("landing-page-sections");

  return {
    props: {
      landingPageSections,
    },
  };
}
