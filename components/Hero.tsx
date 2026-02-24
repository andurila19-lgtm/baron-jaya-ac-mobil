
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-white pt-10 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8 animate-pulse shadow-sm">
              <span className="flex h-3 w-3 rounded-full bg-blue-600 animate-ping"></span>
              Teknisi Profesional Area Jabodetabek
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8 tracking-tight">
              Service Elektronik <span className="text-blue-600">Terbaik & Bergaransi</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Peralatan rumah tangga Anda bermasalah? Bagus Service hadir dengan teknisi ahli bersertifikat, harga jujur, dan jaminan kepuasan. Kami siap datang ke rumah Anda hari ini!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center gap-3 active:scale-95"
              >
                Pesan Teknisi
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a 
                href="#diagnostic" 
                className="w-full sm:w-auto px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-blue-100 hover:bg-blue-50/30 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                Cek Masalah (AI)
              </a>
            </div>
            
            <div className="mt-16 flex items-center justify-center lg:justify-start gap-10 opacity-80">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-gray-900">1k+</span>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Klien Puas</span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-gray-900">12+</span>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Teknisi Ahli</span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-gray-900">4.9/5</span>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Rating Google</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute -inset-10 bg-blue-100/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                alt="Teknisi Bagus Service" 
                className="rounded-[2.5rem] shadow-2xl object-cover h-[600px] w-full border-8 border-white"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl flex items-center gap-5 border border-gray-50 animate-bounce-slow">
                 <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                 </div>
                 <div>
                    <p className="text-lg font-black text-gray-900 leading-tight italic uppercase">Pasti Beres</p>
                    <p className="text-sm text-gray-500 font-medium">Garansi uang kembali 100%</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
