import type { PostMeta } from "~/types/posts";
import type { Route } from "./+types/index";
import { URL } from "url";
import { Link } from "react-router";
import PostCard from "~/components/PostCard";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);

  const response = await fetch(url.href);

  if (!response.ok) {
    const error = await response.json();
    throw new Response("Failed to load data.", error);
  }

  const data = await response.json();
  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;

  return (
    <div className="max-w-3xl mx-auto bg-white mt-10 px-6 py-4 ">
      <h2 className="text-3xl font-bold text-black  mb-8 text-center">
        📝 Blog
      </h2>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
