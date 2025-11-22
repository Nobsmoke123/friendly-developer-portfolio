import { Link } from "react-router";
import type { PostMeta } from "~/types/posts";

const PostCard: React.FC<{ post: PostMeta }> = ({ post }) => {
  return (
    <article
      key={post.slug}
      className="bg-zinc-900 p-6 rounded-md shadow-xl mb-4"
    >
      <h3 className="text-xl font-semibold text-white mb-2 tracking-wider">
        {post.title}
      </h3>
      <p className="text-xs font-light text-white mb-2">
        {new Date(post.date).toLocaleDateString("en-GB", {
          timeZone: "UTC",
        })}
      </p>

      <p className="text-white text-sm mb-6">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="bg-white text-black px-3 py-2 rounded"
      >
        Read More →
      </Link>
    </article>
  );
};

export default PostCard;
