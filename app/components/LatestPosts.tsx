import { Link } from "react-router";
import type { PostMeta } from "~/types/posts";

const LatestPosts: React.FC<{ posts: PostMeta[]; limit?: number }> = ({
  posts,
  limit = 4,
}) => {
  const sortedPosts = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  return (
    <section className=" mx-auto px-6 py-12 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-black">Latest Posts</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        {sortedPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block p-4 bg-zinc-900 rounded"
          >
            <h3 className="text-white mb-2">{post.title}</h3>
            <p className="text-sm font-light mb-2">{post.excerpt}</p>
            <p className="text-xs">{new Date(post.date).toDateString()}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
