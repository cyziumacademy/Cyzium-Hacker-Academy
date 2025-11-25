import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cyziumacademy.com/",
      lastModified: new Date(),
    },
    {
      url: "https://cyziumacademy.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://cyziumacademy.com/courses",
      lastModified: new Date(),
    },
    {
      url: "https://cyziumacademy.com/blogs",
      lastModified: new Date(),
    },
    {
      url: "https://cyziumacademy.com/hackathon",
      lastModified: new Date(),
    },
    {
      url: "https://cyziumacademy.com/contact",
      lastModified: new Date(),
    },
  ];
}
