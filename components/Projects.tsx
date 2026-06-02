import type { ProjectItem } from "@/types/resume";
import SectionHeading from "./SectionHeading";
import { joinList } from "@/lib/utils";

interface ProjectsProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section aria-labelledby="projects-heading" className="mb-6">
      <SectionHeading title="Projects" />
      <div className="space-y-5">
        {projects.map((project, index) => (
          <article key={index}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1.5">
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  {joinList(project.techStack)}
                </p>
              </div>
              {project.url && (
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-gray-800 transition-colors shrink-0"
                  aria-label={`Link to ${project.title}`}
                >
                  {project.url}
                </a>
              )}
            </div>
            <p className="text-sm text-gray-700 mb-1.5 leading-relaxed">
              {project.description}
            </p>
            <ul className="space-y-1 list-disc list-outside ml-4" role="list">
              {project.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-gray-700 leading-relaxed">
                  {achievement}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
