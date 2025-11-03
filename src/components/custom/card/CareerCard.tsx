import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { CareerItem } from '@/types/career';
import { CareerDetailsDialog } from '@/components/custom/dialog/CareerDetailsDialog';

interface CareerCardProps {
  item: CareerItem;
  index: number;
}

export const CareerCard = ({ item, index }: CareerCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDetails = item.description || item.details || item.technologies;
  const isRightAligned = index % 2 === 0;

  return (
    <div
      className={`w-full md:w-[calc(50%-2rem)] ${
        isRightAligned ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
      } pl-16 md:pl-0`}
    >
      <Card className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-400 dark:hover:border-purple-600">
        {item.isPromotion && (
          <div className="absolute -top-3 left-4">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
              ⭐ Promotion
            </Badge>
          </div>
        )}

        <CardHeader>
          <CardTitle
            className={`flex flex-col gap-2 ${
              isRightAligned ? 'md:items-end' : 'md:items-start'
            } items-start`}
          >
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {item.title}
            </span>
            <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {item.company}
            </span>
          </CardTitle>
          <div
            className={`flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 ${
              isRightAligned ? 'md:items-end' : 'md:items-start'
            } items-start`}
          >
            <span>{item.location}</span>
            <span className="font-medium text-purple-600 dark:text-purple-400">
              {item.period}
            </span>
            {item.gpa && (
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                {item.gpa}
              </span>
            )}
            {item.details && (
              <span className="text-gray-700 dark:text-gray-300 font-medium mt-1">
                {item.details}
              </span>
            )}
          </div>
        </CardHeader>

        {hasDetails && (
          <CardContent>
            <CareerDetailsDialog
              item={item}
              isOpen={isOpen}
              onOpenChange={setIsOpen}
            />
          </CardContent>
        )}
      </Card>
    </div>
  );
};
