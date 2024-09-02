import BlogPostCard from "./_components/blog-post-card";
import { getAllPosts } from "./_queries/get-posts";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <>
      <section className="pt-12 md:pt-28 md:pb-0">
        <div className="text-center">
          <h1 className="">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Explore tips, stories, and insights to enhance your Camino de
            Santiago experience.
          </p>
        </div>
      </section>

      <section>
        {posts && posts.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {posts.map((edge, index) => {
              if (edge?.node) {
                return <BlogPostCard key={index} post={edge.node} />;
              }
            })}
          </ul>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-xl text-muted-foreground text-center">
              Nothing to see here :(
            </p>
          </div>
        )}
      </section>
    </>
  );
}
