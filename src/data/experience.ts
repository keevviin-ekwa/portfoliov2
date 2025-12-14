// FILE: src/data/experience.ts

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'LBM Conseils',
    role: 'Fullstack Developer',
    period: 'Apr 2025 – Oct 2025',
    description:
      'Worked on enterprise-grade web applications and APIs, contributing to both internal and external platforms in an Agile environment.',
    achievements: [
      'Developed and optimized REST APIs using .NET 8, improving performance and scalability.',
      'Designed and maintained complex SQL Server stored procedures, functions, and triggers.',
      'Implemented CI/CD pipelines using Azure DevOps and managed APIs through Azure API Management.',
      'Collaborated closely with business analysts and project managers to deliver business-driven solutions.',
    ],
    tech: [
      'C#',
      '.NET 8',
      'ASP.NET Core',
      'Entity Framework',
      'Angular',
      'TypeScript',
      'SQL Server',
      'Azure DevOps',
      'Azure API Management',
      'CI/CD',
      'IIS',
      'Azure Functions',
      'Scrum',
      'rest API',
      'iis',
      'Store Procedure'
    ],
  },
  {
    id: 2,
    company: 'Sadipin Sarl',
    role: '.NET Developer Analyst',
    period: 'Feb 2023 – Apr 2024',
    description:
      'Designed, developed, and maintained complex web applications while ensuring performance, reliability, and maintainability.',
    achievements: [
      'Built and maintained ASP.NET and ASP.NET Core web applications.',
      'Designed and modeled relational databases using SQL Server and MySQL.',
      'Optimized SQL queries and stored procedures to improve application performance.',
      'Implemented CI/CD pipelines using GitHub Actions.',
      'Developed frontend interfaces using React, TypeScript, WPF, and Blazor.',
    ],
    tech: [
      'C#',
      'ASP.NET',
      'ASP.NET Core',
      'Entity Framework',
      'SQL Server',
      'MySQL',
      'React',
      'TypeScript',
      'Blazor',
      'WPF',
      'Git',
      'GitHub Actions',
      'REST API',
      'Linux',
      'Scrum',
    ],
  },
  {
    id: 3,
    company: 'Orange Cameroon',
    role: 'Information Systems Engineer & Software Developer',
    period: 'Dec 2021 – Feb 2023',
    description:
      'Contributed to the development of enterprise information systems, focusing on scalability, automation, and deployment reliability.',
    achievements: [
      'Developed enterprise web applications using ASP.NET/Core and React.',
      'Implemented CI/CD pipelines with Azure DevOps.',
      'Containerized applications using Docker and worked with Kubernetes environments.',
      'Wrote unit tests with MSTest to ensure code quality.',
      'Produced technical documentation and supported production deployments.',
    ],
    tech: [
      'C#',
      'ASP.NET',
      'ASP.NET Core',
      'React',
      'TypeScript',
      'SQL Server',
      'MySQL',
      'PostgreSQL',
      'Azure DevOps',
      'Azure Functions',
      'Docker',
      'Kubernetes',
      'MSTest',
      'REST API',
      'Linux',
      'Scrum',
    ],
  },
  {
    id: 4,
    company: 'Future Life Consulting',
    role: 'Software Developer',
    period: 'Feb 2018 – Nov 2021',
    description:
      'Worked on backend services and API-driven systems, contributing to feature development and system optimization.',
    achievements: [
      'Developed backend applications using ASP.NET Core.',
      'Integrated frontend interfaces with backend REST APIs.',
      'Implemented new features and optimized API performance.',
      'Diagnosed and fixed bugs while contributing to system upgrades.',
    ],
    tech: [
      'C#',
      'ASP.NET Core',
      'SQL Server',
      'MySQL',
      'MongoDB',
      'REST API',
      'React',
      'Git',
      'Linux',
      'Scrum',
    ],
  },
  {
    id: 5,
    company: 'Digital Innovations Agency',
    role: 'Full-Stack Laravel Developer',
    period: '2017 - 2018',
    description: 'Developed custom web applications and SaaS products using Laravel and modern PHP',
    achievements: [
      'Delivered 20+ Laravel projects for clients across e-commerce, CRM, and booking systems',
      'Built multi-tenant SaaS platform onboarding 150+ companies in first 6 months',
      'Implemented queue jobs and background processing improving user experience',
      'Mentored 4 junior developers on Laravel best practices and design patterns',
    ],
    tech: [
      'Laravel',
      'PHP',
      'MySQL',
      'Eloquent',
      'Livewire',
      'Vue.js',
      'Redis',
      'AWS',
      'Docker',
    ],
  },
];
