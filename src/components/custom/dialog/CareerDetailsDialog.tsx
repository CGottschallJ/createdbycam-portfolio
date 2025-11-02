import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import type { CareerItem } from '@/types/career';

interface CareerDetailsDialogProps {
  item: CareerItem;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CareerDetailsDialog = ({
  item,
  isOpen,
  onOpenChange,
}: CareerDetailsDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full group/btn hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
        >
          View More Details
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col gap-3">
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{item.title}</DialogTitle>
              <DialogDescription className="text-lg">
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  {item.company}
                </span>
                <span className="block text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {item.location} • {item.period}
                </span>
                {item.gpa && (
                  <span className="block text-sm text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                    {item.gpa}
                  </span>
                )}
              </DialogDescription>
            </div>
            {item.isPromotion && (
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg w-fit">
                ⭐ Promotion
              </Badge>
            )}
          </div>
        </DialogHeader>

        <div className="mt-6 space-y-6">
          {item.details && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Details
              </h4>
              <p className="text-gray-700 dark:text-gray-300">{item.details}</p>
            </div>
          )}

          {item.description && item.description.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {item.type === 'work'
                  ? 'Key Responsibilities & Achievements'
                  : 'Highlights'}
              </h4>
              <ul className="space-y-3">
                {item.description.map((desc, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                  >
                    <span className="text-purple-500 dark:text-purple-400 text-lg leading-none mt-[0.15em]">
                      •
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.technologies && item.technologies.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 text-gray-700 dark:text-gray-300 border border-blue-200 dark:border-blue-800"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

