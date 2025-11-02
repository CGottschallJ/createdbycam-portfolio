export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  location: string;
  period: string;
  type: 'degree' | 'certificate';
  gpa?: string;
  details?: string;
  highlights?: string[];
}

