import client from "@/tina/__generated__/client";
import { Metadata } from "next";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { TopPicksGrid } from "./_components/top-picks-grid";

export async function generateStaticParams() {
  const pages = await client.queries.postConnection();
  const paths = pages.data?.postConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return (paths || []).filter((path) => !path.filename?.includes("sitemap"));
}

export default async function PostPage({
  params,
}: {
  params: { filename: string[] };
}) {
  // Check if the request is for a sitemap
  if (params.filename.includes("sitemap")) {
    return null; // Return null for sitemap requests
  }

  const { data } = await client.queries.post({
    relativePath: `${params.filename}.md`,
  });

  const post = data.post;

  const components = {
    TopPicksGrid: (props: any) => <TopPicksGrid {...props} />,
  };

  return (
    <main>
      <TinaMarkdown content={post.content} components={components} />
    </main>
  );
}
