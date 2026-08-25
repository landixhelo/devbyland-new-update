import type { ReactNode } from "react";

type TechItem = {
  name: string;
  icon: ReactNode;
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      className="tech-chip__icon"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const TECH_STACK: TechItem[] = [
  {
    name: "React",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.2"
          transform="rotate(120 12 12)"
        />
      </Icon>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 16V8l8 8" />
        <path d="M16 8v8" />
      </Icon>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <Icon>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10h8M12 10v8" />
      </Icon>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <Icon>
        <path d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3z" />
        <path d="M12 12v9" />
      </Icon>
    ),
  },
  {
    name: "Express",
    icon: (
      <Icon>
        <path d="M4 12h16" />
        <path d="M7 8h10" />
        <path d="M7 16h10" />
      </Icon>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <Icon>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </Icon>
    ),
  },
  {
    name: "Prisma",
    icon: (
      <Icon>
        <path d="M5 19 12 3l7 16-7 2-7-2z" />
        <path d="M12 3v18" />
      </Icon>
    ),
  },
  {
    name: "Figma",
    icon: (
      <Icon>
        <path d="M8 3h4a3 3 0 0 1 0 6H8V3z" />
        <path d="M12 9h4a3 3 0 1 1 0 6h-4V9z" />
        <path d="M8 15h4a3 3 0 1 1-3 3v-3H8z" />
        <path d="M8 9h4v6H8a3 3 0 0 1 0-6z" />
        <circle cx="15" cy="12" r="3" />
      </Icon>
    ),
  },
  {
    name: "SEO",
    icon: (
      <Icon>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </Icon>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <Icon>
        <path d="m12 4 9 16H3L12 4z" fill="currentColor" stroke="none" />
      </Icon>
    ),
  },
];
