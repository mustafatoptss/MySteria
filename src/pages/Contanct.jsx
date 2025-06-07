import React from 'react';
import { motion } from 'framer-motion';

function Contanct() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#1a1a1a]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-6xl w-full bg-[#2a2a2a] shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >
        {/* Sol taraf - Form */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-white mb-4">Bizimle İletişime Geç</h2>
          <p className="text-gray-400 mb-8">Aşağıdaki formu doldurarak bize mesaj gönderebilirsin.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 font-semibold mb-1">Ad Soyad</label>
              <input
                type="text"
                className="w-full bg-[#1f1f1f] text-white border border-[#444] rounded-xl px-4 py-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg focus:shadow-blue-500/20
                  transition duration-300"
                placeholder="Adınızı girin"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-1">E-posta</label>
              <input
                type="email"
                className="w-full bg-[#1f1f1f] text-white border border-[#444] rounded-xl px-4 py-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg focus:shadow-blue-500/20
                  transition duration-300"
                placeholder="ornek@mail.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-semibold mb-1">Mesaj</label>
              <textarea
                className="w-full bg-[#1f1f1f] text-white border border-[#444] rounded-xl px-4 py-2 h-32 resize-none
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg focus:shadow-blue-500/20
                  transition duration-300"
                placeholder="Mesajınızı yazın..."
              ></textarea>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-white hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-4 rounded-xl transition duration-300 text-xl"
            >
              Gönder
            </motion.button>
          </form>
        </div>

        {/* Sağ taraf - Bilgiler */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="bg-white text-gray-600 p-10 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold mb-4">İletişim Bilgileri</h3>
          <p className="mb-4">Her zaman sorularınızı yanıtlamaktan mutluluk duyarız.</p>
          <ul className="space-y-3 text-lg">
            <li><strong>Telefon:</strong> +90 555 555 55 55</li>
            <li><strong>Email:</strong> MySteria@gmail.com</li>
            <li><strong>Adres:</strong> Isparta, Türkiye</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contanct;
