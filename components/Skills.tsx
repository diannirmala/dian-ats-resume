import type { SkillCategory } from "@/types/resume";
import SectionHeading from "./SectionHeading";
import { joinList } from "@/lib/utils";

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section aria-labelledby="skills-heading" className="mb-6">
      <SectionHeading title="Technical Skills" />
      <dl className="space-y-1.5">
        {skills.map((group) => (
          <div key={group.category} className="flex gap-2 text-sm">
            <dt className="font-semibold text-gray-800 shrink-0 w-28">
              {group.category}:
            </dt>
            <dd className="text-gray-700">{joinList(group.skills)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
