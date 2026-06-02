import type { ResumeData } from "@/types/resume";

export const resumeData: ResumeData = {
  header: {
    name: "Dian Nirmala",
    title: "Senior Software Engineer",
    contact: {
      email: "dian.nirmala.dev@gmail.com",
      linkedin: "LinkedIn Profile",
      github: "GitHub Portfolio",
      location: "Jakarta, Indonesia",
      website: "Personal Website",
    },
  },

  summary:
    "Senior Software Engineer specializing in AI systems, scalable frontend architecture, and full-stack product development. Experienced in building NLP pipelines, recommendation systems, and high-performance web applications used across enterprise and consumer platforms. Strong background in distributed systems, machine learning infrastructure, and modern frontend ecosystems. Interested in large-scale AI product engineering and applied research.",

  skills: [
    {
      category: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "Go", "SQL", "C++"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Vite"],
    },
    {
      category: "Backend",
      skills: ["FastAPI", "Node.js", "Express", "PostgreSQL", "Redis"],
    },
    {
      category: "AI/ML",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Hugging Face",
        "Scikit-learn",
        "LangChain",
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "GitHub Actions",
      ],
    },
    {
      category: "Tools",
      skills: ["Git", "Linux", "Figma", "Firebase", "REST APIs"],
    },
  ],

  experience: [
    {
      company: "Google",
      role: "Senior AI Software Engineer",
      location: "Mountain View, CA (Remote)",
      startDate: "2024",
      endDate: "",
      current: true,
      achievements: [
        "Designed large-scale NLP pipelines processing multimillion-document datasets for semantic retrieval and ranking systems.",
        "Improved inference latency by 38% through distributed batching and optimized Transformer serving architecture.",
        "Led frontend modernization initiative using React and Next.js across internal AI tooling platforms.",
        "Collaborated with research teams to productionize LLM-powered workflows and retrieval-augmented systems.",
        "Mentored junior engineers across frontend and ML infrastructure domains.",
      ],
    },
    {
      company: "OpenAI",
      role: "Software Engineer (AI & Frontend)",
      location: "Remote",
      startDate: "2022",
      endDate: "2024",
      current: false,
      achievements: [
        "Developed AI-assisted web applications integrating LLM orchestration and vector search systems.",
        "Built scalable frontend dashboards for model evaluation and prompt experimentation.",
        "Implemented real-time streaming interfaces using TypeScript and WebSocket architecture.",
        "Reduced cloud infrastructure cost by 27% through optimized GPU workload scheduling.",
        "Contributed to internal tooling for evaluation, dataset management, and deployment automation.",
      ],
    },
  ],

  projects: [
    {
      title: "NeuralResume AI",
      techStack: ["Python", "FastAPI", "PyTorch", "React"],
      url: "GitHub Portfolio",
      description:
        "Enterprise-grade resume intelligence platform using semantic similarity and ranking models.",
      achievements: [
        "Built enterprise-grade resume intelligence platform using semantic similarity and ranking models.",
        "Achieved 92% matching accuracy on multiclass hiring recommendation tasks.",
        "Implemented multilingual NLP support with Transformer-based embeddings.",
        "Deployed scalable inference APIs supporting concurrent recruiter workflows.",
      ],
    },
    {
      title: "VisionFlow Analytics",
      techStack: ["Next.js", "TensorFlow", "Docker", "PostgreSQL"],
      url: "GitHub Portfolio",
      description:
        "Real-time computer vision dashboard for industrial monitoring systems.",
      achievements: [
        "Developed real-time computer vision dashboard for industrial monitoring systems.",
        "Integrated object detection and anomaly tracking pipelines with live visualization tools.",
        "Reduced manual inspection workload by 64% using automated classification systems.",
      ],
    },
    {
      title: "NexusUI Design System",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      url: "GitHub Portfolio",
      description:
        "Reusable enterprise frontend component system for scalable UI development.",
      achievements: [
        "Created reusable enterprise frontend component system adopted across multiple internal products.",
        "Improved frontend development speed through standardized architecture and accessibility-first components.",
        "Implemented advanced theming and responsive UI infrastructure.",
      ],
    },
  ],

  education: [
    {
      institution: "University of Waterloo",
      degree: "Bachelor of Computer Science",
      field: "Artificial Intelligence and Software Engineering",
      location: "Waterloo, Canada",
      startDate: "",
      endDate: "",
      gpa: "",
      honors: "",
      relevantCourses: [],
    },
  ],
};

