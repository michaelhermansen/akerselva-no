import { z } from "zod";

export const apiLandingPageSections = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      attributes: z.object({
        NavigationTitle: z.string(),
        Title: z.string(),
        Subtitle: z.string(),
        ImageTitle: z.string(),
        Image: z.object({
          url: z.string(),
        }),
        Description: z.string(),
        Link: z.object({
          LinkText: z.string(),
          LinkUrl: z.string(),
        }),
      }),
    })
  ),
});

export type ApiLandingPageSections = z.infer<typeof apiLandingPageSections>;
