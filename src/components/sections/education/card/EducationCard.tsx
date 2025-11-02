import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award } from 'lucide-react';
import type { EducationItem } from '@/types/education';

interface EducationCardProps {
  item: EducationItem;
}

export const EducationCard = ({ item }: EducationCardProps) => {
  const isDegree = item.type === 'degree';

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-400 dark:hover:border-purple-600 h-full">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full ${
              isDegree
                ? 'bg-purple-500 dark:bg-purple-600'
                : 'bg-pink-500 dark:bg-pink-600'
            } text-white shadow-lg shrink-0`}
          >
            {isDegree ? (
              <GraduationCap className="w-6 h-6" />
            ) : (
              <Award className="w-6 h-6" />
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="flex flex-col gap-2">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </span>
              <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                {item.institution}
              </span>
            </CardTitle>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 ml-16">
          <span>{item.location}</span>
          <span className="font-medium text-purple-600 dark:text-purple-400">
            {item.period}
          </span>
          {item.gpa && (
            <Badge className="bg-emerald-500 dark:bg-emerald-600 text-white w-fit mt-1">
              {item.gpa}
            </Badge>
          )}
        </div>
      </CardHeader>

      {(item.details || item.highlights) && (
        <CardContent>
          {item.details && (
            <p className="text-gray-700 dark:text-gray-300 mb-3 font-medium">
              {item.details}
            </p>
          )}

          {item.highlights && item.highlights.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                Highlights
              </h4>
              <ul className="space-y-2">
                {item.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                  >
                    <span className="text-purple-500 dark:text-purple-400 mt-0.5">
                      •
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};

