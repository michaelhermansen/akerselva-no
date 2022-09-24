import { z } from "zod";

export const apiLandingPageSection = z.object({
  id: z.number(),
  attributes: z.object({
    NavigationTitle: z.string(),
    Title: z.string(),
    Subtitle: z.string(),
    ImageTitle: z.string().optional(),
    ImageOverlay: z.string().optional(),
    Image: z.object({
      url: z.string(),
    }),
    Description: z.string(),
    Link: z.object({
      LinkText: z.string(),
      LinkUrl: z.string(),
    }),
  }),
});

export const apiLandingPageSections = z.object({
  data: z.array(apiLandingPageSection),
});

export type ApiLandingPageSection = z.infer<typeof apiLandingPageSection>;
export type ApiLandingPageSections = z.infer<typeof apiLandingPageSections>;
