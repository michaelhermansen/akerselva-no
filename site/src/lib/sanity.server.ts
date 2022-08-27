const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "your-project-id",
  dataset: "bikeshop",
  apiVersion: "2021-03-25", // use current UTC date - see "specifying API version"!
  token: "sanity-auth-token", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

export default sanityClient;
