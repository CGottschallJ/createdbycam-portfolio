import type { CareerItem } from '@/types/career';
import { TimelineIcon } from './TimelineIcon';
import { CareerCard } from '@/components/custom/card/CareerCard';

interface TimelineItemProps {
  item: CareerItem;
  index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isRightAligned = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start ${
        isRightAligned ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:gap-8`}
    >
      <TimelineIcon type={item.type} />
      <CareerCard item={item} index={index} />
      {/* Spacer div for desktop alternating layout - pushes content to opposite side */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
};

