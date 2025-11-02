import type { PortfolioItem } from '@/types/portfolio';
import { PortfolioPieceCard } from '@/components/custom/card/PortfolioPieceCard';
import { Github } from 'lucide-react';
import portfolioData from '@/static-data/portfolio-data.json';

export const MyWork = () => {
  const projects = portfolioData as PortfolioItem[];

  return (
    <section
      id="my-work"
      className="relative w-full py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            My Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            A collection of projects I've built and contributed to
          </p>
          <a
            href="https://github.com/cgottschallj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
          >
            <Github className="w-5 h-5" />
            View my GitHub Profile
          </a>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <PortfolioPieceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
