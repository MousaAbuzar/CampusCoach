import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://campus-coach-q1rf.vercel.app";

  const routes = [
    "/",
    "/scholarships",
    "/AboutMe",
    "/auth",
    "/contact",
    "/faqs",
    "/saved",
    "/vision",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
