export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  website?: string;
}

export interface ResumeHeader {
  name: string;
  title: string;
  contact: ContactInfo;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  achievements: string[];
}

export interface ProjectItem {
  title: string;
  techStack: string[];
  url?: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string;
  relevantCourses?: string[];
}

export interface ResumeData {
  header: ResumeHeader;
  summary: string;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
}
