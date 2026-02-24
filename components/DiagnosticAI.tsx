
import React, { useState, useRef, useEffect } from 'react';
// Fix: Import name should match the exported name in geminiService.ts
import { getACDiagnosis } from '../services/geminiService';

const DiagnosticAI: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [result]);

  const handleDiagnose = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    
    setLoading(true);
    setResult(null);
    // Fix: Use the correctly imported function name getACDiagnosis
    const diagnosis = await getACDiagnosis(input);
    setResult(diagnosis);
    setLoading(false);
  };

  const examples = [
    "AC berisik dan air menetes",
    "Mesin cuci mati total",
    "Kulkas bau dan kurang dingin"
  ];

  return (
    <section id="diagnostic" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">AI SMART CHECK</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Konsultasi Instan dengan AI</p>
          <p className="text-gray-500 max-w-xl mx-auto">Diagnosis awal masalah elektronik Anda dalam hitungan detik. Cukup ceritakan kendalanya!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 bg-white p-8 rounded-[2rem] shadow-xl shadow-blue-100 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">Mulai Diagnosis</h3>
                <p className="text-sm text-gray-500">Tuliskan keluhan Anda di bawah</p>
              </div>
            </div>

            <form onSubmit={handleDiagnose} className="space-y-6">
              <div className="relative group">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ceritakan keluhan Anda di sini..."
                  className="w-full bg-gray-50 border-2 border-transparent rounded-2xl p-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white min-h-[160px] transition-all shadow-inner resize-none"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {examples.map((ex, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setInput(ex)}
                    className="text-xs bg-gray-100 hover:bg-blue-50 hover:text-blue-600 font-bold text-gray-500 rounded-full px-4 py-2 transition-all border border-transparent hover:border-blue-200"
                  >
                    {ex}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                disabled={loading || !input.trim()}
                className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg ${
                  loading 
                    ? 'bg-blue-400 cursor-not-allowed text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200'
                }`}
              >
                {loading ? (
                  <>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    Menganalisa...
                  </>
                ) : (
                  <>
                    <span>Cek Masalah Sekarang</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 h-full">
            {!result && !loading ? (
              <div className="h-full min-h-[400px] border-4 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col items-center justify-center text-center p-12 text-gray-400">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-500 mb-2">Belum ada hasil</h4>
                <p className="max-w-xs mx-auto">Masukkan keluhan Anda di sisi kiri untuk mendapatkan analisis AI instan.</p>
              </div>
            ) : (
              <div 
                ref={resultRef}
                className={`bg-white rounded-[2.5rem] p-10 shadow-2xl border border-blue-50 transition-all duration-700 ${loading ? 'opacity-50 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'}`}
              >
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black">AI</div>
                  <h4 className="font-black text-gray-900 uppercase tracking-widest text-sm">Hasil Analisis Diagnosa</h4>
                </div>
                
                <div className="prose prose-blue max-w-none">
                  <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-wrap">
                    {result}
                  </div>
                </div>

                <div className="mt-12 p-6 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="font-bold text-blue-900 mb-1">Butuh teknisi segera?</p>
                    <p className="text-sm text-blue-700">Estimasi kedatangan 30-60 menit.</p>
                  </div>
                  <a 
                    href="https://wa.me/6281234567890" 
                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-black text-center shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2"
                  >
                    Pesan via WA
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.514-2.96-2.63-.086-.117-.693-.923-.693-1.762 0-.839.44-1.252.598-1.427.158-.175.348-.219.462-.219.114 0 .228.001.328.005.105.004.246-.04.385.293.144.346.491 1.197.534 1.285.043.088.072.19.014.307-.058.117-.088.19-.175.293-.087.102-.183.228-.261.307-.087.088-.177.184-.077.357.1.173.444.733.953 1.187.656.585 1.21.767 1.383.854.173.087.275.072.376-.044.102-.117.438-.511.554-.686.117-.175.234-.146.394-.087.161.058 1.021.482 1.197.569.175.087.292.131.335.204.044.072.044.419-.1.824z" />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticAI;