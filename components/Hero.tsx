
import React, { useState } from 'react';
import { ArrowRight, Paintbrush, Bath } from 'lucide-react';

export const Hero: React.FC = () => {
  const [hovered, setHovered] = useState<'left' | 'right' | null>(null);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden flex flex-col md:flex-row">
      {/* Left: Paints */}
      <div 
        className={`relative flex-1 transition-all duration-700 ease-in-out group cursor-pointer overflow-hidden ${hovered === 'right' ? 'md:flex-[0.5]' : hovered === 'left' ? 'md:flex-[1.5]' : 'md:flex-1'}`}
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
      >
        <img 
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop" 
          alt="Paint Studio"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-110 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent flex items-center px-8 md:px-16">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#00aeef] rounded-xl text-white">
                <Paintbrush size={32} />
              </div>
              <span className="text-white font-medium tracking-widest uppercase text-sm">Paint Studio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A World of <span className="text-[#00aeef]">Vibrant</span> Walls
            </h2>
            <p className="text-slate-200 text-lg mb-8 line-clamp-2 md:line-clamp-none">
              Premium Interior Emulsions, Exterior Textures & Waterproofing from Asian Paints, Berger & Nerolac.
            </p>
            <button className="group flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-[#00aeef] hover:text-white transition-all shadow-xl">
              Explore Colors
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Right: Sanitary */}
      <div 
        className={`relative flex-1 transition-all duration-700 ease-in-out group cursor-pointer overflow-hidden border-l-4 border-white ${hovered === 'left' ? 'md:flex-[0.5]' : hovered === 'right' ? 'md:flex-[1.5]' : 'md:flex-1'}`}
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
      >
        <img 
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
          alt="Sanitary Gallery"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-110 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#ec008c]/40 to-transparent flex items-center justify-end px-8 md:px-16 text-right">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4 justify-end">
              <span className="text-white font-medium tracking-widest uppercase text-sm">Sanitary Gallery</span>
              <div className="p-3 bg-[#ec008c] rounded-xl text-white">
                <Bath size={32} />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Modern <span className="text-[#ec008c]">Luxury</span> Fittings
            </h2>
            <p className="text-slate-100 text-lg mb-8 line-clamp-2 md:line-clamp-none">
              Designer Faucets, Premium Washbasins & Sanitaryware from Jaquar, Hindware & CERA.
            </p>
            <button className="group ml-auto flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-[#ec008c] transition-all shadow-xl">
              View Collection
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Visualizer Link Floating Overlay */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a 
          href="https://www.asianpaints.com/visualizer/home-visualizer.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-2xl hover:bg-white/20 transition-all flex items-center gap-3 group"
        >
          <span className="w-3 h-3 bg-[#fff200] rounded-full animate-pulse"></span>
          Visualize your home colors online
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};
