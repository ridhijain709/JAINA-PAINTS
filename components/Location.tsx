
import React from 'react';
import { MapPin, Navigation, Clock, Phone, User } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-sm border border-slate-100">
          <div className="lg:w-1/2 p-10 lg:p-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#ec008c] uppercase mb-4">Visit Our Showroom</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Shamli Road Showroom</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-[#00aeef]"><MapPin /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-500">Shamli Road, Near Petroleum (Petrol Pump), Muzaffarnagar, UP</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-[#ec008c]"><Clock /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-500">Mon - Sat: 9:00 AM - 8:30 PM<br/>Sunday: Limited Hours</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-[#00aeef]"><User /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Owner</h4>
                  <p className="text-slate-500 font-bold text-lg">Deepanshu Jain</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.google.com/maps/search/Shamli+Road+Petroleum+Muzaffarnagar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#00aeef] transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                Get Directions
                <Navigation size={18} />
              </a>
              <a 
                href="tel:+910000000000"
                className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:border-[#ec008c] transition-all flex items-center justify-center gap-3"
              >
                Call Dealer
                <Phone size={18} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 min-h-[400px] bg-slate-200 relative group cursor-pointer overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1541888941259-792739460232?q=80&w=2070&auto=format&fit=crop" 
              alt="Shop Frontage" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80"
            />
            <div className="absolute inset-0 bg-[#00aeef]/20 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl border border-white/20">
                <p className="text-slate-900 font-bold flex items-center gap-2">
                  <MapPin className="text-[#ec008c]" />
                  Open in Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
