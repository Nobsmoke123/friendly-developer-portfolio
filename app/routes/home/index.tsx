import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/types/project";
import AboutPreview from "~/components/AboutPreview";
import type { PostMeta } from "~/types/posts";
import LatestPosts from "~/components/LatestPosts";

const APP_URL = import.meta.env.VITE_API_URL;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Home" },
    { name: "description", content: "Custom website development" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);

  const [projectResponse, postResponse] = await Promise.all([
    fetch(`${APP_URL}/projects`),
    fetch(url.href),
  ]);

  if (!projectResponse.ok || !postResponse.ok) {
    const [projectError, postsError] = await Promise.all([
      projectResponse.json(),
      postResponse.json(),
    ]);
    throw new Response("An error occured", { ...projectError, ...postsError });
  }

  const [data, posts] = await Promise.all([
    projectResponse.json(),
    postResponse.json(),
  ]);

  return { projects: data, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={4} />
      <AboutPreview />
      <LatestPosts posts={posts} limit={4} />
    </>
  );
};

export default HomePage;
