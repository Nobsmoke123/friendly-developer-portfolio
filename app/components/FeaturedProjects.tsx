import type { Project } from "~/types/project";
import ProjectCard from "./ProjectCard";

type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  count = 4,
}) => {
  const featured = projects
    .filter((project) => project.featured)
    .slice(0, count);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-200 tracking-wider">
        🌟 Featured Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {featured.length > 0 &&
          featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
