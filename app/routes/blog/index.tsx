import type { PostMeta } from "~/types/posts";
import type { Route } from "./+types/index";
import { URL } from "url";
import PostCard from "~/components/PostCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);

  const response = await fetch(url.href);

  if (!response.ok) {
    const error = await response.json();
    throw new Response("Failed to load data.", error);
  }

  const data: PostMeta[] = await response.json();

  data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 3;

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="max-w-3xl mx-auto bg-white mt-10 px-6 py-4 ">
      <h2 className="text-3xl font-bold text-black  mb-8 text-center">
        📝 Blog
      </h2>
      <PostFilter searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <div className="space-y-8">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <p className="text-black text-sm"> No posts found.</p>
        )}
      </div>

      {totalPages > 0 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default BlogPage;
