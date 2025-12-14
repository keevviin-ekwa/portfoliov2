// FILE: src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform with Laravel',
    description: 'Full-featured online marketplace with payment integration and real-time inventory',
    problem: 'Client needed scalable e-commerce solution handling 10K+ daily transactions with complex inventory management',
    solution: 'Built Laravel-based platform with Livewire for reactive UI, Redis caching, and queue jobs for order processing',
    impact: 'Processed $5M+ in transactions, 99.8% uptime, reduced page load time by 60%, handled 50K+ products',
    tech: ['Laravel 10', 'PHP 8', 'MySQL', 'Redis', 'Livewire', 'Stripe', 'Vue.js', 'Docker'],
  },
  {
    id: 2,
    title: 'Enterprise ERP System',
    description: 'Full-stack ERP platform for manufacturing operations management',
    problem: 'Manual inventory tracking causing 15% stock discrepancies and delayed production schedules',
    solution: 'Architected microservices-based ERP with real-time inventory sync, automated workflows, and predictive analytics',
    impact: '40% reduction in inventory errors, 25% faster order fulfillment, $2M annual cost savings',
    tech: ['.NET 8', 'C#', 'Azure', 'SQL Server', 'React', 'TypeScript', 'Docker', 'Kubernetes'],
  },
  {
    id: 3,
    title: 'Multi-tenant CRM System',
    description: 'SaaS CRM platform for managing customer relationships and sales pipelines',
    problem: 'Small businesses lacked affordable, feature-rich CRM with customization capabilities',
    solution: 'Developed Laravel multi-tenant CRM with custom fields, automation workflows, and comprehensive reporting',
    impact: 'Onboarded 200+ companies, 95% user satisfaction, $500K ARR in first year',
    tech: ['Laravel', 'PHP', 'PostgreSQL', 'Eloquent', 'Vue.js', 'Redis', 'Docker', 'AWS'],
  },
  {
    id: 4,
    title: 'Real-time Analytics Dashboard',
    description: 'Executive decision-support system with live KPI tracking',
    problem: 'Executives lacked real-time visibility into key metrics across 8 business units',
    solution: 'Developed event-driven analytics platform with streaming data pipelines and interactive visualizations',
    impact: 'Enabled real-time decision making, 60% faster reporting cycles, increased data accuracy to 99.5%',
    tech: ['ASP.NET Core', 'SignalR', 'Redis', 'SQL Server', 'React', 'D3.js', 'Web Sockets'],
  },
];
