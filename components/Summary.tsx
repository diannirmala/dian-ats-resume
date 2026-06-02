import SectionHeading from "./SectionHeading";

interface SummaryProps {
  summary: string;
}

export default function Summary({ summary }: SummaryProps) {
  return (
    <section aria-labelledby="summary-heading" className="mb-6">
      <SectionHeading title="Professional Summary" />
      <p className="text-sm leading-relaxed text-gray-700">{summary}</p>
    </section>
  );
}
