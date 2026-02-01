
import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle2, Maximize2, MoveHorizontal } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  location: string;
  before: string;
  after: string;
  details: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Villa Redesign',
    location: 'New Mandi, Muzaffarnagar',
    before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
    details: ['Asian Paints Royale Glitz', 'Jaquar Artize Series', 'Designer Textures']
  },
  {
    id: 2,
    title: 'Luxury Apartment Suite',
    location: 'South Civil Lines',
    before: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    details: ['Nerolac Impressions', 'Hindware Italian Collection', 'Waterproofing Solutions']
  }
];

const ComparisonSlider: React.FC<{ project: Project }> = ({ project }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-[450px] w-full overflow-hidden cursor-ew-resize select-none group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <img 
        src={project.after} 
        alt="After" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest z-10">
        After
      </div>

      {/* Before Image (Foreground with Clip) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={project.before} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#ec008c] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest z-10">
          Before
        </div>
      </div>

      {/* Slider Bar */}
      <div 
        className="absolute inset-y-0 z-20 group-hover:scale-x-110 transition-transform"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white shadow-2xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-slate-900 group-active:scale-90 transition-all">
          <MoveHorizontal className="text-slate-900 w-5 h-5" />
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md text-slate-900 px-4 py-2 rounded-xl text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
        <Maximize2 size={12} className="text-[#00aeef]" />
        Slide to compare transformation
      </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <div className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#00aeef] uppercase mb-4">The Result of Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Home Transformations</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Witness the power of premium paints and luxury fittings. Drag the sliders to see how Jaina Paints & Sanitary 
              helps residents of Muzaffarnagar turn houses into designer homes.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                </div>
              ))}
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Trusted by 500+ Homeowners</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100">
              <ComparisonSlider project={project} />
              <div className="p-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#00aeef] transition-colors">{project.title}</h4>
                    <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#ec008c] rounded-full"></span>
                      {project.location}
                    </p>
                  </div>
                  <div className="bg-slate-50 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#00aeef] border border-slate-100">
                    Premium Finish
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.details.map((detail, idx) => (
                    <span key={idx} className="flex items-center gap-2 bg-slate-50/50 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 border border-slate-100 group-hover:border-[#00aeef]/30 transition-colors">
                      <CheckCircle2 size={14} className="text-[#00aeef]" />
                      {detail}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex-grow py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-[#00aeef] transition-all text-sm shadow-xl shadow-slate-200">
                    View Project Gallery
                  </button>
                  <button className="px-6 py-4 rounded-2xl border-2 border-slate-100 hover:border-[#ec008c] text-slate-400 hover:text-[#ec008c] transition-all">
                    <Maximize2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 text-sm font-medium mb-6 italic">Want to see your home in our gallery?</p>
          <a href="#inquiry" className="inline-flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest text-sm hover:text-[#00aeef] transition-colors group">
            Consult with Deepanshu Jain
            <div className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center group-hover:border-[#00aeef] group-hover:translate-x-1 transition-all">
               <MoveHorizontal size={14} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
