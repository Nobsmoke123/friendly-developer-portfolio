import type { Project } from "~/types/project";
import type { Route } from "./+types/index";
import ProjectCard from "~/components/ProjectCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

const APP_URL = import.meta.env.VITE_API_URL;

export async function loader({
  request: _,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const response = await fetch(`${APP_URL}/projects`);

  const data: Project[] = await response.json();
  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const [currentPage, setCurrentPage] = useState(1);

  const projectPerPage = 10;

  // Calculate the total pages
  const totalPages = Math.ceil(filteredProjects.length / projectPerPage);

  // Get current pages projects
  const indexOfLast = currentPage * projectPerPage;
  const indexOFFirst = indexOfLast - projectPerPage;

  const currentProjects = filteredProjects.slice(indexOFFirst, indexOfLast);

  return (
    <>
      <h2 className="text-3xl font-semi text-stone-100 tracking-wider  mb-8 mt-4 text-center">
        🚀 My Projects
      </h2>
      <div className="flex flex-wrap gap-2 mb-6 justify-end">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 rounded text-xs font-semibold ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"}`}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-8 p-2"
        >
          {projects.length > 0 &&
            currentProjects.map((project) => (
              <motion.div layout key={project.id}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ProjectsPage;
