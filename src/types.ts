import { ReactNode } from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}
