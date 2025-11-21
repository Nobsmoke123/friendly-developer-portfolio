import Hero from "~/components/Hero";
import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/types/project";
import AboutPreview from "~/components/AboutPreview";

const APP_URL = import.meta.env.VITE_API_URL;

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Home" },
    { name: "description", content: "Custom website development" },
  ];
}

export async function loader({
  request: _,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const response = await fetch(`${APP_URL}/projects`);
  if (!response.ok) {
    const error = await response.json();
    throw new Response("An error occured", error);
  }

  const data: Project[] = await response.json();

  return { projects: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={4} />
      <AboutPreview />
    </>
  );
};

export default HomePage;
