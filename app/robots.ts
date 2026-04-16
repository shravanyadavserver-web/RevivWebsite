import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "Google-Extended", "ClaudeBot", "PerplexityBot", "Applebot-Extended"],
        allow: ["/", "/llms.txt"],
      },
    ],
    sitemap: "https://revivhyderabad.com/sitemap.xml",
  };
}
