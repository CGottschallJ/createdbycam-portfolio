import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code2, Github } from 'lucide-react';
import type { PortfolioItem } from '@/types/portfolio';

interface PortfolioPieceCardProps {
  item: PortfolioItem;
}

export const PortfolioPieceCard = ({ item }: PortfolioPieceCardProps) => {
  const hasRepositories = item.repository || item.frontendRepository || item.backendRepository;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-400 dark:hover:border-blue-600 h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 dark:bg-blue-600 text-white shadow-lg shrink-0">
            <Code2 className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
              {item.name}
            </CardTitle>
            {item.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        {/* Technologies */}
        {item.technologies && item.technologies.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 text-gray-700 dark:text-gray-300 border border-blue-200 dark:border-blue-800"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto flex flex-col gap-2">
          {/* View Project Button */}
          {item.url ? (
            <Button
              asChild
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          ) : (
            <Button disabled className="w-full" variant="outline">
              Private Repository
            </Button>
          )}

          {/* Repository Links */}
          {hasRepositories && (
            <div className="flex flex-col gap-2">
              {/* Monorepo */}
              {item.repository && (
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a
                    href={item.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}

              {/* Frontend & Backend Repos */}
              {(item.frontendRepository || item.backendRepository) && (
                <div className="grid grid-cols-2 gap-2">
                  {item.frontendRepository && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={item.frontendRepository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1"
                      >
                        <Github className="w-3 h-3" />
                        Frontend
                      </a>
                    </Button>
                  )}
                  {item.backendRepository && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={item.backendRepository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1"
                      >
                        <Github className="w-3 h-3" />
                        Backend
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

