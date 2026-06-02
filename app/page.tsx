import { resumeData } from "@/data/resume";
import Header from "@/components/Header";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import PrintButton from "@/components/PrintButton";

export default function ResumePage() {
  const { header, summary, skills, experience, projects, education } =
    resumeData;

  return (
    <div className="min-h-screen bg-gray-100 print:bg-white py-8 px-4 print:p-0">
      {/* Print/Download button – hidden on print */}
      <div className="max-w-3xl mx-auto mb-4 flex justify-end print:hidden">
        <PrintButton />
      </div>

      {/* Resume card */}
      <main
        id="resume"
        className="max-w-3xl mx-auto bg-white shadow-sm print:shadow-none p-10 print:p-0"
        role="main"
        aria-label="Resume"
      >
        <Header data={header} />
        <Summary summary={summary} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Education education={education} />
      </main>
    </div>
  );
}
