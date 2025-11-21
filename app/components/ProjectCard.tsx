import { Link } from "react-router";
import type { Project } from "~/types/project";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block transform transition duration-300 hover:scale-[1.05]"
    >
      <div className="bg-gray-200 rounded-md flex flex-col hover:shadow-xl/30">
        <img
          src={project.image}
          alt={project.title}
          className="w-100 object-contain object-top-left border-b border-zinc-900"
        />
        <div className="flex flex-col gap-2 px-4 py-3">
          <div className="text-black">
            <h3 className="text-2xl text-black font-semibold mb-2 tracking-widest">
              {project.title}
            </h3>
            <p className="text-sm font-light">{project.description}</p>
          </div>

          <div className="text-black flex justify-between">
            <span className="text-xs font-light">{project.category}</span>
            <span className="text-xs font-light">
              {new Date(project.date).toLocaleDateString("en-GB", {
                timeZone: "UTC",
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
