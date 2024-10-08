import {
  ApiLandingPageSection,
  apiLandingPageSections,
  ApiLandingPageSections,
} from "./validation/landingPageSection";
import api from "./data/api";

type ValidEntry = "landing-page-sections";

export async function getEntries(
  contentType: ValidEntry
): Promise<ApiLandingPageSections | null> {
  try {
    const response = api[contentType];
    const data = apiLandingPageSections.parse(response);
    return data;
  } catch (error) {
    console.error({ error });
    return null;
  }
}

export async function getEntry(
  contentType: ValidEntry,
  id: number
): Promise<ApiLandingPageSection | null> {
  try {
    const response = api[contentType];
    const { data } = apiLandingPageSections.parse(response);
    return data.find((item) => item.id === id) || null;
  } catch (error) {
    console.error({ error });
    return null;
  }
}
