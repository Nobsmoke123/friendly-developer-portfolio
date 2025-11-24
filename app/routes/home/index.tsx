import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project, StrapiProject, StrapiResponse } from "~/types/project";
import AboutPreview from "~/components/AboutPreview";
import type { PostMeta, StrapiPost } from "~/types/posts";
import LatestPosts from "~/components/LatestPosts";
import { postTransformer, projectTransformer } from "~/utils/transforms";

const APP_URL = import.meta.env.VITE_API_URL;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Home" },
    { name: "description", content: "Custom website development" },
  ];
}

export async function loader({
  request: _,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const [projectResponse, postResponse] = await Promise.all([
    fetch(`${APP_URL}/projects?filters[featured][$eq]=true&populate=*`),
    fetch(`${APP_URL}/posts?sort=date:desc&populate=*`),
  ]);

  if (!projectResponse.ok || !postResponse.ok) {
    const [projectError, postsError] = await Promise.all([
      projectResponse.json(),
      postResponse.json(),
    ]);
    throw new Response("An error occured", { ...projectError, ...postsError });
  }

  const [projectData, postData]: [
    StrapiResponse<StrapiProject>,
    StrapiResponse<StrapiPost>,
  ] = await Promise.all([projectResponse.json(), postResponse.json()]);

  let { data } = projectData;
  const projects = projectTransformer(data);

  const { data: postsData } = postData;
  const posts = postTransformer(postsData);

  return { projects, posts };
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
