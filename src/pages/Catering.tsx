import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Calendar, Users, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Catering = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.3em] mb-4 block">Exclusive Service</span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              Garden Events & <br />
              <span className="italic text-accent">Catering Options</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Why just have a beautiful garden when you can host unforgettable events in it? We partner with local premium caterers to offer complete garden event packages.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-stone-white p-3 rounded-sm text-accent">
                  <Utensils size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Gourmet BBQ</h4>
                  <p className="text-sm text-gray-500">Premium outdoor dining experiences.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-stone-white p-3 rounded-sm text-accent">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Event Planning</h4>
                  <p className="text-sm text-gray-500">Full setup and coordination.</p>
                </div>
              </div>
            </div>
            <Link to="/quote" className="bg-primary text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-primary-light transition-all">
              Inquire About Events
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            <img 
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=80" 
              alt="Outdoor Event" 
              className="w-full h-full object-cover rounded-sm shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-accent p-8 text-white hidden md:block">
              <p className="text-4xl font-heading italic">"Unforgettable"</p>
              <p className="text-xs uppercase tracking-widest mt-2">Memories made outdoors</p>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="flex justify-center text-accent"><Users size={40} /></div>
            <h3 className="text-xl font-bold text-primary">Private Parties</h3>
            <p className="text-gray-600">From intimate family gatherings to large celebrations in your newly designed garden.</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center text-accent"><Music size={40} /></div>
            <h3 className="text-xl font-bold text-primary">Atmosphere</h3>
            <p className="text-gray-600">We provide lighting, sound, and decor that complements your landscape perfectly.</p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center text-accent"><Utensils size={40} /></div>
            <h3 className="text-xl font-bold text-primary">Bespoke Menus</h3>
            <p className="text-gray-600">Customized catering options ranging from casual buffets to fine dining experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
