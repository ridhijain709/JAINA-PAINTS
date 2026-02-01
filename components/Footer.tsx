
import React from 'react';
import { Palette, Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <Palette className="w-8 h-8 text-[#00aeef]" />
             <div>
              <h2 className="text-lg font-bold text-slate-900">JAINA PAINTS</h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Muzaffarnagar</p>
             </div>
          </div>

          <div className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Jaina Paints & Sanitary. All Rights Reserved.
            <p className="mt-1 text-slate-400">Owned & Managed by Deepanshu Jain</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-2 bg-slate-50 rounded-full hover:bg-[#00aeef] hover:text-white transition-all text-slate-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-50 rounded-full hover:bg-[#00aeef] hover:text-white transition-all text-slate-400">
              <Facebook size={20} />
            </a>
            <a href="mailto:info@jainapaints.com" className="p-2 bg-slate-50 rounded-full hover:bg-[#00aeef] hover:text-white transition-all text-slate-400">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-50 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
           <a href="#" className="hover:text-[#ec008c]">Asian Paints Dealer</a>
           <a href="#" className="hover:text-[#ec008c]">Jaquar Showroom</a>
           <a href="#" className="hover:text-[#ec008c]">Berger Textures</a>
           <a href="#" className="hover:text-[#ec008c]">Hindware Ceramics</a>
        </div>
      </div>
    </footer>
  );
};
