import type { MetadataRoute } from "next";
import { getAllPosts } from "@/app/(pages)/(site-pages)/blog/_queries/get-posts";

const BASE_URL = process.env.NEXT_BASE_URL;
const POSTS_PER_SITEMAP = 50000; // Google's recommended limit

export async function generateSitemaps() {
  const blogPosts = await getAllPosts();
  const totalPosts = blogPosts?.length || 0;
  const sitemapCount = Math.ceil(totalPosts / POSTS_PER_SITEMAP);

  return Array.from({ length: sitemapCount }, (_, i) => ({ id: i }));
}

export default async function sitemap({
  id,
}: { id?: number } = {}): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllPosts();
  const fallbackDate = new Date("1970-01-01");

  // If id is undefined, return all blog posts
  if (id === undefined) {
    return blogPosts
      ? blogPosts.map((post) => ({
          url: `${BASE_URL}/blog/${post?.node?._sys.filename}`,
          lastModified: new Date(post?.node?.publishDate || fallbackDate),
          changeFrequency: "weekly",
          priority: 0.7,
        }))
      : [];
  }

  // If id is provided, return the specific slice of blog posts
  const start = id * POSTS_PER_SITEMAP;
  const end = start + POSTS_PER_SITEMAP;

  return blogPosts
    ? blogPosts.slice(start, end).map((post) => ({
        url: `${BASE_URL}/blog/${post?.node?._sys.filename}`,
        lastModified: new Date(post?.node?.publishDate || fallbackDate),
        changeFrequency: "weekly",
        priority: 0.7,
      }))
    : [];
}
