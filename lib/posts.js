import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return { ...data, slug: data.slug || filename.replace(/\.md$/, "") };
    });

  return posts.sort((a, b) => (a.data > b.data ? -1 : 1));
}

export function getPostsByCategory(categoria) {
  return getAllPosts().filter((post) => post.categoria === categoria);
}

export function getCategories() {
  const posts = getAllPosts();
  return [...new Set(posts.map((post) => post.categoria))];
}

export function getPostsDestaque(limit = 6) {
  return getAllPosts().filter((post) => post.destaque === true).slice(0, limit);
}

export function getRecentPosts(days = 30, limit = 6) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  return getAllPosts()
    .filter((p) => p.data && new Date(p.data + "T12:00:00") >= cutoff)
    .slice(0, limit);
}

export function getPostsDicas(limit = 3) {
  return getAllPosts()
    .filter(
      (p) => p.categoria === "Viagem econômica" || p.categoria === "Planejamento"
    )
    .slice(0, limit);
}

export function getRelatedPosts(currentSlug, categoria, limit = 3) {
  return getAllPosts()
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.categoria === categoria)
    .slice(0, limit);
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function extractHeadings(htmlContent) {
  const regex = /<h([23])[^>]*>(.*?)<\/h[23]>/gi;
  const headings = [];
  let match;

  while ((match = regex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]+>/g, "");
    const id = slugify(text);
    headings.push({ level, text, id });
  }

  return headings;
}

export function addHeadingIds(htmlContent) {
  return htmlContent.replace(
    /<h([23])([^>]*)>(.*?)<\/h[23]>/gi,
    (match, level, attrs, text) => {
      const plainText = text.replace(/<[^>]+>/g, "");
      const id = slugify(plainText);
      return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
    }
  );
}

function insertAdAfterFirstH2(htmlContent) {
  const firstH2 = htmlContent.indexOf("</h2>");
  if (firstH2 === -1) return htmlContent;

  const insertPos = firstH2 + 5;
  return (
    htmlContent.slice(0, insertPos) +
    '\n<div id="ad-in-content" style="margin: 48px 0;"></div>\n' +
    htmlContent.slice(insertPos)
  );
}

export async function getPostBySlug(slug) {
  const filenames = fs.readdirSync(postsDirectory);
  const filename = filenames.find((name) => {
    const filePath = path.join(postsDirectory, name);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return (data.slug || name.replace(/\.md$/, "")) === slug;
  });

  if (!filename) return null;

  const filePath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkGfm).use(html).process(content);
  let contentHtml = processedContent.toString();

  contentHtml = addHeadingIds(contentHtml);
  const headings = extractHeadings(contentHtml);
  contentHtml = insertAdAfterFirstH2(contentHtml);

  return {
    ...data,
    slug: data.slug || filename.replace(/\.md$/, ""),
    contentHtml,
    headings,
  };
}

export function getAllSlugs() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data.slug || filename.replace(/\.md$/, "");
    });
}
