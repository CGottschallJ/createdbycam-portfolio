export interface PortfolioItem {
  id: string;
  name: string;
  url?: string;
  description?: string;
  technologies: string[];
  screenshot?: string;
  isPrivate?: boolean;
  repository?: string; // For monorepo
  frontendRepository?: string;
  backendRepository?: string;
}

