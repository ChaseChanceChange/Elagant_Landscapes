import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, CONTACT_DETAILS } from '../constants';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className={cn(
            "font-heading text-2xl font-bold tracking-tight",
            scrolled ? "text-primary" : "text-white"
          )}>
            Elegant <span className="text-accent">Landscapes</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent",
                location.pathname === link.path ? "text-accent" : scrolled ? "text-gray-800" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={`tel:${CONTACT_DETAILS.phone}`}
            className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-2"
          >
            <Phone size={16} />
            Call Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden", scrolled ? "text-primary" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-8 px-6 flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-bold uppercase tracking-widest text-gray-800",
                  location.pathname === link.path && "text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`}
              className="bg-green-600 text-white py-4 rounded-sm text-center font-bold uppercase tracking-widest"
            >
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
