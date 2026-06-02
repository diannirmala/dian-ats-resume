import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dian Nirmala — Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in AI systems, scalable frontend architecture, and full-stack product development.",
  keywords: [
    "software engineer",
    "senior engineer",
    "TypeScript",
    "React",
    "Next.js",
    "AI systems",
    "full-stack",
  ],
  authors: [{ name: "Dian Nirmala" }],
  openGraph: {
    title: "Dian Nirmala — Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in AI systems, scalable frontend architecture, and full-stack product development.",
    type: "profile",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-gray-100 print:bg-white font-sans">
        {children}
      </body>
    </html>
  );
}
