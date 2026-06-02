import type { EducationItem } from "@/types/resume";
import SectionHeading from "./SectionHeading";
import { joinList } from "@/lib/utils";

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section aria-labelledby="education-heading" className="mb-6">
      <SectionHeading title="Education" />
      <div className="space-y-4">
        {education.map((edu, index) => (
          <article key={index}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  {edu.institution}
                </h3>
                <p className="text-sm text-gray-600">
                  {edu.degree} in {edu.field}
                  {edu.honors ? ` · ${edu.honors}` : ""}
                  {edu.gpa ? ` · GPA: ${edu.gpa}` : ""}
                </p>
                <p className="text-sm text-gray-500">{edu.location}</p>
              </div>
              <p className="text-xs text-gray-500 shrink-0">
                {edu.startDate} – {edu.endDate}
              </p>
            </div>
            {edu.relevantCourses && edu.relevantCourses.length > 0 && (
              <p className="text-xs text-gray-600 mt-1">
                <span className="font-medium">Relevant Coursework: </span>
                {joinList(edu.relevantCourses)}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
