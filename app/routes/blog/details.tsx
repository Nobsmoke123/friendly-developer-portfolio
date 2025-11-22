import ReactMarkdown from "react-markdown";
import type { Route } from "./+types/details";
import type { PostMeta } from "~/types/posts";
import { URL } from "url";
import { Link } from "react-router";

export async function loader({
  request,
  params,
}: Route.LoaderArgs): Promise<{ postMeta: PostMeta; markdown: string }> {
  const { slug } = params;

  const url = new URL("/posts-meta.json", request.url);
  const response = await fetch(url.href);

  if (!response.ok) {
    const error = await response.json();
    throw new Error("Failed to fetch data", error);
  }

  const index: PostMeta[] = await response.json();

  const postMeta = index.find((post) => slug === post.slug);

  if (!postMeta) {
    throw new Response("Not Found", { status: 404 });
  }

  // Dynamically import the markdown content
  const markdown = await import(`../../posts/${slug}.md?raw`);

  return { postMeta, markdown: markdown.default };
}

const BlogDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { markdown, postMeta } = loaderData;
  return (
    <div className="max-w-3xl mx-auto px-6 py-4 bg-stone-700 rounded mt-6">
      <h1 className="text-3xl text-white font-light tracking-wider mb-2">
        {postMeta.title}
      </h1>
      <p className="text-white text-sm font-light mb-6">
        {new Date(postMeta.date).toDateString()}
      </p>

      <div className="prose prose-invert text-white font-light max-w-none mb-12">
        <ReactMarkdown>{markdown}</ReactMarkdown>
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
