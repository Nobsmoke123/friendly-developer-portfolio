import type { Project } from "~/types/project";
import type { Route } from "./+types/details";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const APP_URL = import.meta.env.VITE_API_URL;

export async function clientLoader({
  request: _,
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const response = await fetch(`${APP_URL}/projects/${params.id}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Response("Project not found", error);
  }

  const project: Project = await response.json();
  return project;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;
  return (
    <>
      <div className="mt-4">
        <Link
          to={"/projects"}
          className="flex items-center text-white text-sm font-bold tracking-wider"
        >
          {" "}
          <FaArrowLeft className="mr-2" />
          Back to projects
        </Link>

        <div className="grid gap-8 grid-col-1 md:grid-cols-2 mt-6">
          <div className="border border-stone-500">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="">
            <h1 className="text-3xl text-white font-semibold tracking-widest mb-4">
              {project.title}
            </h1>
            <p className="text-white text-xs font-light tracking-wider mb-4">
              {new Date(project.date).toLocaleDateString()} &#8226;{" "}
              {project.category}
            </p>
            <p className="text-sm text-white font-light tracking-widest mb-4">
              {project.description}
            </p>

            <a
              href={project.url}
              className=" px-6 py-2 rounded bg-white text-sm font-bold text-black"
              target="_blank"
            >
              View Live Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
