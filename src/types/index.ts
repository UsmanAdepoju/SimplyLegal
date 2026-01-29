export interface Law {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  source: string;
  penalty?: string;
  keyPoints: string[];
  relatedLaws?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}
