export interface CareerItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'work' | 'education' | 'certification';
  description?: string[];
  technologies?: string[];
  isPromotion?: boolean;
  gpa?: string;
  details?: string;
}

