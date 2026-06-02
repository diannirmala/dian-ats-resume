import type { ExperienceItem } from "@/types/resume";
import SectionHeading from "./SectionHeading";
import { formatDateRange } from "@/lib/utils";

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section aria-labelledby="experience-heading" className="mb-6">
      <SectionHeading title="Experience" />
      <div className="space-y-5">
        {experience.map((job, index) => (
          <article key={index}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1.5">
              <div>
                <h3 className="text-sm font-bold text-gray-900">{job.role}</h3>
                <p className="text-sm text-gray-600">
                  {job.company}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
              </div>
              <time className="text-xs text-gray-500 shrink-0">
                {formatDateRange(job.startDate, job.endDate, job.current)}
              </time>
            </div>
            <ul className="space-y-1 list-disc list-outside ml-4" role="list">
              {job.achievements.map((achievement, i) => (
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
