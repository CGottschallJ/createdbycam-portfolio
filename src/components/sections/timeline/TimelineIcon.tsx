import { Briefcase, GraduationCap, Code } from 'lucide-react';
import type { CareerItem } from '@/types/career';

interface TimelineIconProps {
  type: CareerItem['type'];
}

export const TimelineIcon = ({ type }: TimelineIconProps) => {
  const getIcon = () => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-5 h-5" />;
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'certification':
        return <Code className="w-5 h-5" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'work':
        return 'bg-blue-500 dark:bg-blue-600';
      case 'education':
        return 'bg-purple-500 dark:bg-purple-600';
      case 'certification':
        return 'bg-pink-500 dark:bg-pink-600';
    }
  };

  return (
    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 z-10">
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full ${getBgColor()} text-white shadow-lg ring-4 ring-white dark:ring-gray-900`}
      >
        {getIcon()}
      </div>
    </div>
  );
};

