
import { GoogleGenAI } from "@google/genai";

// Always use the specified initialization format
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getACDiagnosis = async (userQuery: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `Anda adalah "Baron Jaya AI Mechanic", asisten cerdas dari bengkel BARON JAYA AC MOBIL.
        Lokasi bengkel: Barat, Magetan.
        Tugas: Membantu mendiagnosa masalah AC mobil pelanggan secara profesional dan ramah.
        
        Panduan Jawaban:
        1. Identifikasi kemungkinan penyebab berdasarkan keluhan (AC tidak dingin, bau, berisik, dll).
        2. Berikan saran pengecekan awal yang bisa dilakukan pemilik mobil.
        3. Jelaskan pentingnya perawatan rutin (cuci evaporator, ganti filter kabin).
        4. Tekankan bahwa diagnosa pasti memerlukan pengecekan fisik menggunakan alat di bengkel.
        5. Selalu tutup dengan ajakan untuk datang ke bengkel atau hubungi WhatsApp Baron Jaya AC Mobil.
        6. Gunakan Bahasa Indonesia yang sopan namun santai khas bengkel.`,
      }
    });
    // Ensure response.text is treated as a property and handle undefined
    return response.text || "Maaf, asisten AI tidak dapat memberikan jawaban saat ini.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Maaf, asisten kami sedang sibuk. Silakan langsung hubungi teknisi kami via WhatsApp untuk respon cepat.";
  }
};