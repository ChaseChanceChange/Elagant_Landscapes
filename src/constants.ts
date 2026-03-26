import { NavLink, Service, GalleryImage } from './types';
import React from 'react';
import { Sprout, BrickWall, Scissors, Droplets } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Catering', path: '/catering' },
  { name: 'Get a Quote', path: '/quote' },
];

export const SERVICES: Service[] = [
  {
    id: 'design',
    title: 'Garden Design & Planting',
    description: 'Bespoke softscaping, elegant flowerbed arrangements, and seasonal planting to bring vibrant life to your outdoor areas.',
    icon: React.createElement(Sprout, { className: "w-8 h-8" }),
  },
  {
    id: 'paving',
    title: 'Patios & Paving',
    description: 'High-quality hardscaping including natural stone patios, durable driveways, and beautiful pathways built to last.',
    icon: React.createElement(BrickWall, { className: "w-8 h-8" }),
  },
  {
    id: 'maintenance',
    title: 'Lawn & Maintenance',
    description: 'Expert turf laying, weeding, pruning, and hedge trimming to keep your garden looking immaculate year-round.',
    icon: React.createElement(Scissors, { className: "w-8 h-8" }),
  },
  {
    id: 'features',
    title: 'Water Features & Fencing',
    description: 'Enhance the tranquility and privacy of your space with elegant water features, decking, and secure wooden fencing.',
    icon: React.createElement(Droplets, { className: "w-8 h-8" }),
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', alt: 'Garden Patio', category: 'Paving' },
  { url: 'https://images.unsplash.com/photo-1605810731671-026210f8bc5e?auto=format&fit=crop&w=800&q=80', alt: 'Stone Pathway', category: 'Paving' },
  { url: 'https://images.unsplash.com/photo-1558620854-521b44d70d32?auto=format&fit=crop&w=800&q=80', alt: 'Beautiful Landscaping', category: 'Design' },
  { url: 'https://images.unsplash.com/photo-1598306447833-289b4fce2b8a?auto=format&fit=crop&w=800&q=80', alt: 'Outdoor Decking', category: 'Fencing' },
  { url: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&w=800&q=80', alt: 'Lawn Care', category: 'Maintenance' },
  { url: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80', alt: 'Driveway Paving', category: 'Paving' },
];

export const CONTACT_DETAILS = {
  phone: '+353 80 000 0000',
  whatsapp: '353800000000',
  email: 'info@elegantlandscapes.ie',
  address: 'Serving Dublin, Galway, Cork, and Surrounding Areas',
  facebook: 'https://www.facebook.com/p/Elegant-landscapes-100063486395535/',
};
