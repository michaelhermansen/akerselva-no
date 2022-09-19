// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import landingPageSection from "./landingPageSection";
import link from "./link";
import siteSettings from "./siteSettings";
import homePage from "./homePage";
import exhibitionPage from "./exhibitionPage";
import newsletterSignup from "./newsletterSignup";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    siteSettings,
    homePage,
    exhibitionPage,
    landingPageSection,
    link,
    newsletterSignup,
  ]),
});
