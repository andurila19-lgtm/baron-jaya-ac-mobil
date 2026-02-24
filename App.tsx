
import React, { useState, useEffect } from 'react';
import { getACDiagnosis } from './services/geminiService';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

// --- Components ---

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg shadow-lg rotate-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">BARON JAYA</h1>
          <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">AC MOBIL MAGETAN</p>
        </div>
      </div>
      <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider text-slate-600">
        <a href="#about" className="hover:text-blue-600 transition-colors">Tentang</a>
        <a href="#services" className="hover:text-blue-600 transition-colors">Layanan</a>
        <a href="#diagnostic" className="hover:text-blue-600 transition-colors">AI Cek</a>
        <a href="#contact" className="hover:text-blue-600 transition-colors">Lokasi</a>
      </nav>
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-orange-200 transition-all active:scale-95"
      >
        Booking WA
      </a>
    </div>
  </header>
);

const Hero = () => {
  const [heroRef, isHeroVisible] = useIntersectionObserver();

  return (
    <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`max-w-3xl ${isHeroVisible ? 'fade-in-up' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1.5 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Buka Setiap Hari</span>
          </div>
          <h2 className="text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-8">
            <span className="typing">AC Mobil Dingin </span><span className="text-orange-500 italic">Maksimal</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium">
            Spesialis AC Mobil #1 di Magetan. 1000+ mobil sudah kami servis. Booking sekarang dan dapatkan diskon 20% untuk layanan pertama!
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://wa.me/6281234567890" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-center text-lg transition-all shadow-2xl shadow-orange-900/50 hover:scale-105 pulse-glow">
              🚀 Booking Sekarang - Diskon 20%
            </a>
            <a href="#pricing" className="bg-white hover:bg-slate-100 text-slate-900 border-2 border-white px-10 py-5 rounded-2xl font-black text-center text-lg transition-all shadow-xl hover:scale-105">
              Lihat Paket Harga
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-white/80">
            <div className="text-center">
              <p className="text-3xl font-black text-orange-400">1000+</p>
              <p className="text-sm">Mobil Diservis</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-blue-400">4.9/5</p>
              <p className="text-sm">Rating Pelanggan</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-green-400">24/7</p>
              <p className="text-sm">Support Online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const [servicesRef, isServicesVisible] = useIntersectionObserver();
  const items = [
    { title: "Isi Freon (R134a)", desc: "Pengisian freon berkualitas tinggi untuk udara dingin maksimal.", icon: "❄️" },
    { title: "Service Kompresor", desc: "Perbaikan dan perawatan jantung AC mobil Anda agar tidak berisik.", icon: "⚙️" },
    { title: "Cuci Evaporator", desc: "Pembersihan debu dan jamur penyebab bau tidak sedap di kabin.", icon: "🧼" },
    { title: "Deteksi Kebocoran", desc: "Pengecekan menyeluruh sistem saluran untuk mencegah freon habis.", icon: "🔍" },
    { title: "Ganti Magnet Clutch", desc: "Solusi AC yang kadang panas kadang dingin atau mati total.", icon: "🔌" },
    { title: "Ganti Filter Kabin", desc: "Memastikan udara yang dihirup penumpang bersih dan segar.", icon: "🍃" }
  ];

  return (
    <section ref={servicesRef} id="services" className="py-24 bg-grid bg-slate-50">
      <div className={`max-w-7xl mx-auto px-4 text-center mb-16 ${isServicesVisible ? 'fade-in-up' : ''}`}>
        <h3 className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm mb-4">Layanan Unggulan</h3>
        <p className="text-5xl font-black text-slate-900">Solusi AC Mobil Profesional</p>
        <p className="text-lg text-slate-600 mt-4">Semua layanan menggunakan peralatan modern dan teknisi bersertifikat</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-6 hover:rotate-2 transition-all duration-500 group ${isServicesVisible ? 'fade-in-up' : ''}`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 inline-block">{item.icon}</div>
            <h4 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">{item.title}</h4>
            <p className="text-slate-600 leading-relaxed text-base group-hover:text-slate-800 transition-colors mb-6">{item.desc}</p>
            <a href="https://wa.me/6281234567890" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all group-hover:scale-105">
              Pesan Layanan →
            </a>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <a href="#pricing" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl hover:scale-105 inline-block">
          Lihat Semua Paket Harga
        </a>
      </div>
    </section>
  );
};

const DiagnosticAI = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    setLoading(true);
    setResult('');
    const diagnosis = await getACDiagnosis(input);
    setResult(diagnosis || 'Gagal terhubung.');
    setLoading(false);
  };

  return (
    <section id="diagnostic" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[3rem] p-8 lg:p-16 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-orange-500 font-black uppercase tracking-widest text-sm mb-4">Eksperimen AI</h3>
            <p className="text-3xl lg:text-5xl font-black mb-4">Diagnosa Cepat AI Mechanic</p>
            <p className="text-slate-400">Ada masalah dengan AC mobil Anda? Tanyakan di bawah untuk diagnosa awal.</p>
          </div>

          <form onSubmit={handleAsk} className="mb-10">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Contoh: AC saya keluar angin tapi tidak dingin..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-black px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full spin"></div>
                    Menganalisa...
                  </>
                ) : (
                  <>
                    Cek Sekarang
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </>
                )}
              </button>
            </div>
          </form>

          {result && (
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">B</div>
                <p className="font-black text-blue-400 uppercase tracking-widest text-xs">Diagnosa Baron AI</p>
              </div>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed whitespace-pre-line">
                {result}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h3 className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm mb-4">Lokasi & Kontak</h3>
          <p className="text-4xl font-black text-slate-900 mb-8 leading-tight">Mampir ke Bengkel Kami</p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="bg-slate-100 p-4 rounded-2xl text-blue-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Alamat Lengkap</p>
                <p className="text-slate-500">Jl. Raya Solo - Madiun, Kec. Barat, Kab. Magetan, Jawa Timur</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-slate-100 p-4 rounded-2xl text-blue-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Jam Operasional</p>
                <p className="text-slate-500">Senin - Sabtu: 08:30 - 16:30<br/>Minggu: Tutup</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-slate-100 p-4 rounded-2xl text-blue-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
              <div>
                <p className="font-bold text-slate-900 mb-1">WhatsApp Fast Respon</p>
                <p className="text-slate-500">0812-3456-7890</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <a href="https://maps.app.goo.gl/xWVg9eywW1H8ggEi9" target="_blank" className="flex-grow bg-blue-600 text-white font-black py-5 rounded-2xl text-center shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all">
              Buka Google Maps
            </a>
          </div>
        </div>

        <div className="h-[500px] w-full bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7!2d111.528!3d-7.744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDQnNDQuNCJTIDExMcKwMzEnNDMuNyJF!5e0!3m2!1sid!2sid!4v1715600000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const [testimonialsRef, isTestimonialsVisible] = useIntersectionObserver();
  const testimonials = [
    { name: "Budi Santoso", role: "Pemilik Toyota Avanza", text: "AC mobil saya sekarang dingin maksimal! Service cepat dan harga terjangkau.", rating: 5 },
    { name: "Siti Aminah", role: "Pemilik Honda Jazz", text: "Teknisi ahli dan profesional. Sudah 3 tahun percaya sama Baron Jaya.", rating: 5 },
    { name: "Ahmad Rahman", role: "Pemilik Mitsubishi Pajero", text: "Diagnosa AI sangat membantu. Bisa tau masalah sebelum datang ke bengkel.", rating: 5 }
  ];

  return (
    <section ref={testimonialsRef} className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h3 className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm mb-4">Testimoni Pelanggan</h3>
        <p className="text-4xl font-black text-slate-900">Kepuasan 1000+ Pelanggan</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`bg-white p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 ${isTestimonialsVisible ? 'fade-in-up' : ''}`}
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <p className="text-slate-600 mb-6 italic">"{testimonial.text}"</p>
            <div>
              <p className="font-bold text-slate-900">{testimonial.name}</p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Pricing = () => {
  const [pricingRef, isPricingVisible] = useIntersectionObserver();
  const packages = [
    { name: "Basic Service", price: "Rp 150.000", features: ["Isi Freon R134a", "Cek Tekanan", "Pembersihan Filter"], popular: false },
    { name: "Premium Service", price: "Rp 350.000", features: ["Semua Basic +", "Service Kompresor", "Ganti Magnet Clutch", "Garansi 6 Bulan"], popular: true },
    { name: "Full Maintenance", price: "Rp 500.000", features: ["Semua Premium +", "Cuci Evaporator", "Deteksi Kebocoran", "Ganti Filter Kabin"], popular: false }
  ];

  return (
    <section ref={pricingRef} className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h3 className="text-orange-500 font-black uppercase tracking-[0.3em] text-sm mb-4">Paket Layanan</h3>
        <p className="text-4xl font-black">Pilih Paket Terbaik untuk Mobil Anda</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className={`bg-white/5 border ${pkg.popular ? 'border-orange-500' : 'border-white/10'} backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl hover:scale-105 transition-all duration-300 relative ${isPricingVisible ? 'fade-in-up' : ''}`}
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                TERLARIS
              </div>
            )}
            <h4 className="text-2xl font-black mb-4">{pkg.name}</h4>
            <p className="text-4xl font-black text-blue-400 mb-6">{pkg.price}</p>
            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/6281234567890"
              className={`block text-center font-black py-4 rounded-2xl transition-all ${pkg.popular ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              Pesan Sekarang
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <h2 className="text-xl font-extrabold text-white">BARON JAYA AC MOBIL</h2>
      </div>
      <p className="text-slate-500 text-sm mb-8">© {new Date().getFullYear()} Baron Jaya AC Mobil. Semua Hak Dilindungi.<br/>Dibuat dengan dedikasi untuk pendinginan mesin mobil Anda.</p>
      <div className="flex justify-center gap-6">
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.717.01 3.674.053 1.474.067 2.27.311 2.804.52.707.275 1.21.603 1.737 1.13.53.527.857 1.031 1.132 1.738.208.533.453 1.33.52 2.804.044.957.054 1.243.054 3.674 0 2.43-.01 2.717-.054 3.674-.067 1.474-.312 2.27-.52 2.804-.275.707-.603 1.21-1.132 1.737-.527.53-1.031.857-1.738 1.132-.533.208-1.33.453-2.804.52-.957.044-1.243.054-3.674.054-2.43 0-2.717-.01-3.674-.054-1.474-.067-2.27-.312-2.804-.52-.707-.275-1.21-.603-1.737-1.132-.53-.527-.857-1.031-1.132-1.738-.208-.533-.453-1.33-.52-2.804-.044-.957-.054-1.243-.054-3.674 0-2.43.01-2.717.054-3.674.067-1.474.312-2.27.52-2.804.275-.707.603-1.21 1.132-1.737.527-.53 1.031-.857 1.738-1.132.533-.208 1.33-.453 2.804-.52.957-.044 1.243-.054 3.674-.054zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-8.544a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/></svg></a>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <Hero />
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80" alt="About" className="rounded-[3rem] shadow-2xl rotate-2" />
            <div className="absolute -bottom-10 -right-10 bg-orange-500 text-white p-8 rounded-[2rem] shadow-xl hidden md:block">
              <p className="text-4xl font-black italic counter">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest">Tahun Pengalaman</p>
            </div>
          </div>
          <div>
            <h3 className="text-blue-600 font-black uppercase tracking-widest text-sm mb-4">Kenapa Memilih Kami?</h3>
            <p className="text-4xl font-black text-slate-900 mb-6">Workshop Modern dengan Keahlian Tradisional</p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Baron Jaya AC Mobil adalah bengkel spesialis yang fokus memberikan layanan purna jual terbaik untuk sistem pendingin kendaraan Anda. Kami menggunakan alat diagnostik modern untuk memastikan pengerjaan yang presisi, cepat, dan transparan.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 font-bold text-slate-700">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Teknisi Ahli & Berpengalaman
              </li>
              <li className="flex items-center gap-3 font-bold text-slate-700">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Peralatan Diagnostik Standar Pabrik
              </li>
              <li className="flex items-center gap-3 font-bold text-slate-700">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Garansi Pengerjaan yang Jelas
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Services />
      <Testimonials />
      <Pricing />
      <DiagnosticAI />
      <Contact />
      <Footer />

      {/* Floating WhatsApp FAB */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group float"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.484 2.247 2.247 3.484 5.232 3.484 8.404 0 6.556-5.332 11.888-11.888 11.888-2.013 0-3.988-.511-5.741-1.479l-6.246 1.7zM6.545 20.372l.395.235c1.408.84 3.037 1.284 4.707 1.284 5.093 0 9.241-4.148 9.241-9.241 0-2.468-.962-4.789-2.709-6.536-1.747-1.747-4.068-2.709-6.536-2.709-5.093 0-9.241 4.148-9.241 9.241 0 1.761.5 3.473 1.446 4.968l.257.405-1.01 3.693 3.75-.985z"/></svg>
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl font-bold shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all whitespace-nowrap">Tanya Via WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
