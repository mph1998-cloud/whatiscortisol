export interface Book {
  title: string;
  author: string;
  rating: number;
  imageUrl: string;
  link: string;
  category: string;
}

export interface App {
  name: string;
  description: string;
  rating: number;
  downloads: string;
  icon: string;
  link: string;
  category: string;
}

export interface Tool {
  name: string;
  description: string;
  category: string;
  effectiveness: number;
  link: string;
}