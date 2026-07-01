import { getAllPosts, getCategories } from "@/lib/posts";

export default function sitemap() {
  const baseUrl = "https://blogtravelpartiu.com.br";
  const posts = getAllPosts();
  const categories = getCategories();

  const postEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.data || new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryEntries = categories.map((cat) => ({
    url: `${baseUrl}/categoria/${encodeURIComponent(cat)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...postEntries,
    ...categoryEntries,
  ];
}
