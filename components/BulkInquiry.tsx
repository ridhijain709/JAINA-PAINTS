
import React, { useState } from 'react';
import { Send, Building2, Truck, ClipboardList } from 'lucide-react';

export const BulkInquiry: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative CMY Splashes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00aeef]/10 blur-[100px] -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ec008c]/10 blur-[100px] -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#fff200] uppercase mb-4">Builders & Contractors</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Scale Your Projects with Bulk Pricing.
            </h3>
            <p className="text-slate-400 text-lg mb-10">
              Deepanshu Jain and his team provide specialized solutions for large-scale residential and commercial projects in Muzaffarnagar and beyond.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Building2 className="text-[#00aeef]" />, title: 'Architect Connect', text: 'Special schemes for local architects & designers.' },
                { icon: <Truck className="text-[#ec008c]" />, title: 'Site Delivery', text: 'Direct on-site delivery for bulk paint and sanitary orders.' },
                { icon: <ClipboardList className="text-[#fff200]" />, title: 'Quotation in 24h', text: 'Get professional quotes for your tender submissions.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl text-slate-900">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-2">Inquiry Sent!</h4>
                <p className="text-slate-500">Deepanshu Jain will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h4 className="text-2xl font-bold mb-8 text-center">Get Bulk Quotes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00aeef] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                    <input required type="tel" placeholder="+91 00000 00000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00aeef] transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Business/Project Name</label>
                  <input type="text" placeholder="Optional" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00aeef] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Message / Requirements</label>
                  <textarea rows={4} placeholder="E.g. 50 Buckets of Asian Paints Apex, 10 Jaquar Taps..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00aeef] transition-all"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-[#00aeef] transition-all flex items-center justify-center gap-3">
                  Request Special Pricing
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
