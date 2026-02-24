
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">Bagus Service</span>
            </div>
            <p className="text-lg max-w-md leading-relaxed mb-6">
              Penyedia jasa service peralatan rumah tangga profesional yang mengutamakan kualitas, kejujuran, dan kepuasan pelanggan di wilayah Tangerang Selatan dan sekitarnya.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.717.01 3.674.053 1.474.067 2.27.311 2.804.52.707.275 1.21.603 1.737 1.13.53.527.857 1.031 1.132 1.738.208.533.453 1.33.52 2.804.044.957.054 1.243.054 3.674 0 2.43-.01 2.717-.054 3.674-.067 1.474-.312 2.27-.52 2.804-.275.707-.603 1.21-1.132 1.737-.527.53-1.031.857-1.738 1.132-.533.208-1.33.453-2.804.52-.957.044-1.243.054-3.674.054-2.43 0-2.717-.01-3.674-.054-1.474-.067-2.27-.312-2.804-.52-.707-.275-1.21-.603-1.737-1.132-.53-.527-.857-1.031-1.132-1.738-.208-.533-.453-1.33-.52-2.804-.044-.957-.054-1.243-.054-3.674 0-2.43.01-2.717.054-3.674.067-1.474.312-2.27.52-2.804.275-.707.603-1.21 1.132-1.737.527-.53 1.031-.857 1.738-1.132.533-.208 1.33-.453 2.804-.52.957-.044 1.243-.054 3.674-.054zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-8.544a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Layanan Utama</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Service AC Rutin</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Cuci & Isi Freon</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Pasang Baru / Bongkar AC</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Perbaikan Kulkas</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Service Mesin Cuci</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-blue-500 transition-colors">Beranda</a></li>
              <li><a href="#services" className="hover:text-blue-500 transition-colors">Semua Layanan</a></li>
              <li><a href="#diagnostic" className="hover:text-blue-500 transition-colors">AI Diagnosis</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Kontak Kami</a></li>
              <li><a href="https://wa.me/6281234567890" className="text-green-500 font-bold hover:underline">Chat WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Bagus Service. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
