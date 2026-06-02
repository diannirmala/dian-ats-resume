import type { ResumeHeader } from "@/types/resume";

interface HeaderProps {
  data: ResumeHeader;
}

export default function Header({ data }: HeaderProps) {
  const { name, title, contact } = data;

  return (
    <header className="mb-6 border-b border-gray-300 pb-5">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {name}
      </h1>
      <p className="mt-1 text-lg font-medium text-gray-600">{title}</p>

      <address className="not-italic mt-3">
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-600">
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-gray-900 transition-colors"
              aria-label="Email address"
            >
              {contact.email}
            </a>
          </li>
          <li>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
              aria-label="LinkedIn profile"
            >
              {contact.linkedin}
            </a>
          </li>
          <li>
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
              aria-label="GitHub profile"
            >
              {contact.github}
            </a>
          </li>
          {contact.website && (
            <li>
              <a
                href={`https://${contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
                aria-label="Personal website"
              >
                {contact.website}
              </a>
            </li>
          )}
          <li>
            <span aria-label="Location">{contact.location}</span>
          </li>
        </ul>
      </address>
    </header>
  );
}
