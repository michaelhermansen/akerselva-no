import { kebabCase } from "lodash";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import AboutSection from "../components/modules/AboutSection";
import Footer from "../components/modules/Footer";
import HeaderSection from "../components/modules/HeaderSection";
import LandingPageSection from "../components/modules/LandingPageSection";
import Metadata from "../components/Metadata";
import NewsletterSection from "../components/modules/NewsletterSection";
import { getEntries } from "../lib/api";

export default function Home({
  landingPageSections,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Extract navigation links for each section
  const navigationLinks =
    landingPageSections?.data.map((section) => ({
      linkText: section.attributes.NavigationTitle,
      hash: kebabCase(section.attributes.NavigationTitle),
    })) || [];

  return (
    <>
      <Metadata
        title="Akerselva Friluftsmuseum"
        description="Akerselva Friluftsmuseum lager utstillinger og aktiviteter som forsterker opplevelsen av Oslos viktigste byrom."
        imageUrl="/assets/open-graph/og_home.jpg"
      />

      <div className="bg-gray-light">
        <HeaderSection navigationLinks={navigationLinks} />
        <AboutSection />

        <div className="space-y-16 pt-24 pb-12 md:pt-28">
          {landingPageSections?.data.map((section) => (
            <LandingPageSection key={section.id} section={section} />
          ))}
        </div>

        <NewsletterSection />
        <Footer />
      </div>
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
