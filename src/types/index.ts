export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface ClassLevel {
  grade: number;
  label: string;
  subjects: Subject[];
}

export interface Syllabus {
  id: string;
  name: string;
  shortName: string;
  color: string;
  description: string;
  classes: ClassLevel[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  category: 'academic' | 'sports' | 'cultural' | 'olympiad' | 'rank';
  icon: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Faculty {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  subjects: string[];
  Syllabus: string[];
  initials: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  grade: string;
  syllabus: string;
  initials: string;
  color: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  icon: string;
}
