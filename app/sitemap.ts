import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://campus-coach-q1rf.vercel.app";

  const publicRoutes = [
    "/",
    "/scholarships",
    "/faqs",
    "/contact",
    "/AboutMe",
    "/vision",
  ];

  return publicRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}


