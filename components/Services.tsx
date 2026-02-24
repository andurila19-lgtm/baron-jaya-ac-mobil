
import React from 'react';

const services = [
  {
    title: 'Service & Cuci AC',
    desc: 'Perawatan rutin unit indoor/outdoor agar AC tetap dingin, awet, dan hemat listrik.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    price: 'Mulai Rp 75rb',
    tag: 'Populer'
  },
  {
    title: 'Bongkar Pasang AC',
    desc: 'Layanan pindahan AC atau pemasangan unit baru dengan standar teknisi profesional.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    price: 'Mulai Rp 250rb',
    tag: null
  },
  {
    title: 'Perbaikan Kulkas',
    desc: 'Kulkas berisik, kurang dingin, atau bau? Kami perbaiki di tempat dengan garansi.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    price: 'Cek Unit',
    tag: null
  },
  {
    title: 'Service Mesin Cuci',
    desc: 'Ahli dalam perbaikan mesin cuci otomatis top loading & front loading segala merk.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    price: 'Cek Unit',
    tag: null
  },
  {
    title: 'Isi & Tambah Freon',
    desc: 'Pengisian freon berkualitas R32, R410, R22 untuk mengembalikan dingin maksimal.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    price: 'Mulai Rp 150rb',
    tag: 'Hemat'
  },
  {
    title: 'Perbaikan PCB',
    desc: 'Service modul elektronik / PCB AC Inverter dan peralatan rumah tangga lainnya.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    price: 'Cek Fisik',
    tag: 'Spesialis'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-4">OUR EXPERTISE</h2>
          <p className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Layanan Yang Kami Berikan</p>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full shadow-lg shadow-blue-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group relative p-10 bg-white rounded-[2rem] border-2 border-gray-50 hover:border-blue-500/10 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,102,255,0.12)] hover:-translate-y-3"
            >
              {s.tag && (
                <div className="absolute top-8 right-8 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-blue-200">
                  {s.tag}
                </div>
              )}
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-200 group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{s.title}</h3>
              <p className="text-gray-500 mb-8 leading-relaxed font-medium">{s.desc}</p>
              
              <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Estimasi Biaya</p>
                  <p className="text-xl font-black text-blue-600">{s.price}</p>
                </div>
                <a 
                  href="https://wa.me/6281234567890" 
                  className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-[-45deg]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-gray-400 font-bold mb-6 italic">Tidak menemukan layanan yang Anda cari?</p>
          <a 
            href="https://wa.me/6281234567890" 
            className="inline-flex items-center gap-2 font-black text-blue-600 hover:text-blue-700 underline underline-offset-8 transition-all"
          >
            Tanyakan Langsung Via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
