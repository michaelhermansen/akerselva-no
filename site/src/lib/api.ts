import {
  apiLandingPageSections,
  ApiLandingPageSections,
} from "./validation/landingPageSection";
import api from "../../../cms/api";

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
