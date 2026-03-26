import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_DETAILS, NAV_LINKS } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white/80 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <h3 className="font-heading text-2xl text-white font-bold">
            Elegant <span className="text-accent">Landscapes</span>
          </h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Transforming outdoor spaces into breathtaking landscapes with professional design and meticulous craftsmanship.
          </p>
          <div className="flex gap-4">
            <a href={CONTACT_DETAILS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Facebook size={20} />
            </a>
            <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-accent transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="font-heading text-xl text-white font-bold">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm hover:text-accent transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="font-heading text-xl text-white font-bold">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm">
              <Phone size={18} className="text-accent shrink-0" />
              <span>{CONTACT_DETAILS.phone}</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Mail size={18} className="text-accent shrink-0" />
              <span>{CONTACT_DETAILS.email}</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>{CONTACT_DETAILS.address}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Elegant Landscapes. All Rights Reserved.</p>
        <p className="mt-2 opacity-50">Designed for Professional Excellence</p>
      </div>
    </footer>
  );
};
