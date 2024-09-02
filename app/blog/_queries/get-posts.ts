import client from "@/tina/__generated__/client";

export async function getAllPosts() {
  const { data } = await client.queries.postConnection();

  return data.postConnection.edges;
}

// Define the type for a single edge
type PostEdge = NonNullable<
  NonNullable<Awaited<ReturnType<typeof getAllPosts>>>[number]
>;

// Define the type for a single post item (node)
export type PostItem = NonNullable<PostEdge["node"]>;
