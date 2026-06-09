export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://blog.travelpartiu.com/sitemap.xml",
  };
}
