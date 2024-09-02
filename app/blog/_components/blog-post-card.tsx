import Image from "next/image";
import Link from "next/link";
import { PostItem } from "../_queries/get-posts";

type Props = {
  post: PostItem;
};

export default function BlogPostCard({ post }: Props) {
  return (
    <li>
      <Link href={`/blog/${post._sys.filename}`} className="block h-full">
        <div className="flex flex-col h-full hover:scale-[1.01] transition duration-300 hover:shadow-md">
          <div className="relative w-full h-40">
            <Image
              alt={post.title}
              src={post.featuredImage}
              fill
              className="object-cover transition duration-500 rounded-t-lg group-hover:scale-105"
              sizes="(max-width: 768px) 295px, 320px"
            />
          </div>

          <div className="flex-1">
            <div>{post.title}</div>
            <div>{post.excerpt}</div>
          </div>

          <div className="flex justify-between">
            <button>Read the article</button>
          </div>
        </div>
      </Link>
    </li>
  );
}
