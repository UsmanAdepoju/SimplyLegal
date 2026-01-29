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
  originalText?: string; // The original constitutional text for "Read More" feature
  section?: string; // Constitutional section reference (e.g., "Section 33")
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}
