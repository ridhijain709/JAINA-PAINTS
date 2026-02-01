
import React from 'react';
import { Sparkles, Droplet, Layers, Bath, Droplets, Grid } from 'lucide-react';

const paintProducts = [
  { 
    name: 'Interior Emulsions', 
    desc: 'Luxury finish with rich colors for your living spaces.', 
    image: 'https://images.unsplash.com/photo-1562619741-56bb72c2ef99?auto=format&fit=crop&q=80&w=400',
    icon: <Sparkles className="text-[#00aeef]" /> 
  },
  { 
    name: 'Exterior Textures', 
    desc: 'Weatherproof protection that stands the test of time.', 
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=400',
    icon: <Layers className="text-[#ec008c]" /> 
  },
  { 
    name: 'Waterproofing', 
    desc: 'Professional solutions to seal your walls against dampness.', 
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400',
    icon: <Droplet className="text-[#00aeef]" /> 
  },
];

const sanitaryProducts = [
  { 
    name: 'Designer Faucets', 
    desc: 'Elegant taps and chrome fittings for modern bathrooms.', 
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=400',
    icon: <Droplets className="text-[#ec008c]" /> 
  },
  { 
    name: 'Premium Washbasins', 
    desc: 'Artistic bowls and sleek countertop basins.', 
    image: 'https://images.unsplash.com/photo-1620626011761-9963d7b69763?auto=format&fit=crop&q=80&w=400',
    icon: <Grid className="text-[#00aeef]" /> 
  },
  { 
    name: 'Luxury Ceramics', 
    desc: 'Wall-hung closets and designer sanitaryware.', 
    image: 'https://images.unsplash.com/photo-1604709177595-ee9c2580e9a3?auto=format&fit=crop&q=80&w=400',
    icon: <Bath className="text-[#fff200]" /> 
  },
];

export const Categories: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#ec008c] uppercase mb-4">Digital Catalog</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Premium Collections</h3>
          <div className="h-1 w-20 bg-[#00aeef] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Paint Section */}
          <div>
            <div className="flex items-center gap-4 mb-10 border-b-2 border-[#00aeef]/20 pb-6">
              <div className="p-3 bg-slate-900 text-white rounded-xl shadow-lg">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900">Paint Studio</h4>
                <p className="text-xs font-bold text-[#00aeef] uppercase tracking-widest">Asian Paints • Berger • Nerolac</p>
              </div>
            </div>
            <div className="space-y-8">
              {paintProducts.map((p, i) => (
                <div key={i} className="group relative bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row border border-slate-100">
                  <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 sm:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      {p.icon}
                      <h5 className="font-black text-lg text-slate-900">{p.name}</h5>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                    <button className="text-[10px] font-black uppercase tracking-widest text-[#00aeef] flex items-center gap-2 hover:gap-3 transition-all">
                      View Shades →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sanitary Section */}
          <div>
            <div className="flex items-center gap-4 mb-10 border-b-2 border-[#ec008c]/20 pb-6">
              <div className="p-3 bg-slate-900 text-white rounded-xl shadow-lg">
                <Bath size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900">Sanitary Gallery</h4>
                <p className="text-xs font-bold text-[#ec008c] uppercase tracking-widest">Jaquar • Hindware • CERA</p>
              </div>
            </div>
            <div className="space-y-8">
              {sanitaryProducts.map((p, i) => (
                <div key={i} className="group relative bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row border border-slate-100">
                  <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 sm:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      {p.icon}
                      <h5 className="font-black text-lg text-slate-900">{p.name}</h5>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                    <button className="text-[10px] font-black uppercase tracking-widest text-[#ec008c] flex items-center gap-2 hover:gap-3 transition-all">
                      View Models →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Logos Placeholder Bar */}
        <div className="mt-24 pt-12 border-t border-slate-100">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">Authorised Premium Dealers For</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <span className="text-xl font-black text-slate-800 tracking-tighter">ASIAN PAINTS</span>
            <span className="text-xl font-black text-slate-800 tracking-tighter">JAQUAR</span>
            <span className="text-xl font-black text-slate-800 tracking-tighter">BERGER</span>
            <span className="text-xl font-black text-slate-800 tracking-tighter">CERA</span>
            <span className="text-xl font-black text-slate-800 tracking-tighter">HINDWARE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
