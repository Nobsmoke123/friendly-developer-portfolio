import ReactMarkdown from "react-markdown";
import type { Route } from "./+types/details";
import type { PostMeta, StrapiPost } from "~/types/posts";
import { Link } from "react-router";
import type { StrapiResponse } from "~/types/project";
import { postTransformer } from "~/utils/transforms";

export async function loader({
  request: _,
  params,
}: Route.LoaderArgs): Promise<{ post: PostMeta }> {
  const { slug } = params;

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=image`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error("Failed to fetch data", error);
  }

  const { data }: StrapiResponse<StrapiPost> = await response.json();

  const post = postTransformer(data)[0];

  return { post };
}

const BlogDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { post } = loaderData;
  return (
    <div className="max-w-3xl mx-auto px-6 py-4 bg-stone-700 rounded mt-6">
      <h1 className="text-3xl text-white font-light tracking-wider mb-2">
        {post.title}
      </h1>
      <p className="text-white text-sm font-light mb-6">
        {new Date(post.date).toDateString()}
      </p>

      <img src={post.image} alt={post.title} className="w-full h-90 mb-4" />

      <div className="prose prose-invert text-white font-light max-w-none mb-12">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <Link
        to={"/blog"}
        className="inline-block bg-zinc-900 px-6 py-2 rounded-sm "
      >
        ← Back To Posts
      </Link>
    </div>
  );
};

export default BlogDetailsPage;
