
import React from 'react';

const reasons = [
  {
    title: 'Profesional & Berpengalaman',
    desc: 'Teknisi kami telah melewati pelatihan khusus dan memiliki pengalaman bertahun-tahun di bidangnya.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Harga Jujur & Transparan',
    desc: 'Biaya jasa diinformasikan di awal. Tidak ada biaya tersembunyi yang mendadak muncul.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Garansi Pekerjaan 30 Hari',
    desc: 'Kami menjamin setiap pekerjaan kami. Jika ada kendala yang sama dalam 30 hari, kami perbaiki GRATIS.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  }
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-3">Mengapa Kami?</h2>
          <p className="text-3xl md:text-4xl font-extrabold mb-4">Keunggulan Layanan Bagus Service</p>
          <div className="h-1.5 w-24 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reasons.map((r, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 bg-blue-800/50 backdrop-blur-sm border border-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-400">
                  {r.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{r.title}</h3>
              <p className="text-blue-200 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30 blur-3xl"></div>
    </section>
  );
};

export default WhyUs;
