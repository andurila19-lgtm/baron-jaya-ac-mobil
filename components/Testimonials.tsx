
import React from 'react';

const reviews = [
  {
    name: "Rudi Hartono",
    role: "Warga Bintaro",
    comment: "Teknisinya ramah dan sangat ahli. AC saya yang tadinya berisik sekarang jadi halus dan dingin banget. Recommended!",
    rating: 5,
    avatar: "https://picsum.photos/seed/p1/100/100"
  },
  {
    name: "Siska Amelia",
    role: "Ibu Rumah Tangga",
    comment: "Pesan pagi, siang teknisinya sudah datang. Sangat fast response dan harganya sangat transparan. Terima kasih Bagus Service!",
    rating: 5,
    avatar: "https://picsum.photos/seed/p2/100/100"
  },
  {
    name: "Andi Wijaya",
    role: "Pemilik Cafe",
    comment: "Sudah langganan di sini untuk semua AC di cafe saya. Kerjanya rapi, bersih, dan ada garansi kalau ada apa-apa.",
    rating: 5,
    avatar: "https://picsum.photos/seed/p3/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Testimoni</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Apa Kata Pelanggan Kami?</p>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(rev.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 flex-grow">"{rev.comment}"</p>
              <div className="flex items-center gap-4">
                <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{rev.name}</h4>
                  <p className="text-sm text-gray-500">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
