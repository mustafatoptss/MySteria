import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white font-['Roboto'] px-10 pt-16 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1. Sütun - Mysteria */}
        <div>
          <h2 className="text-5xl font-bold mb-4">Mysteria</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            voluptate. Minima quasi quod adipisci quia.
          </p>
        </div>

        {/* 2. Sütun - Hızlı Menü */}
        <div>
          <h3 className="text-3xl font-semibold mb-4">Hızlı Menü</h3>
          <ul className="space-y-3 text-lg text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition cursor-pointer">Anasayfa</Link>
            </li>
            <li>
              <Link to="/howtoplay" className="hover:text-white transition cursor-pointer">Nasıl Oynanır</Link>
            </li>
            <li>
              <Link to="/iletisim" className="hover:text-white transition cursor-pointer">İletişim</Link>
            </li>
            <li>
              <Link to="/hakkimizda/biz-kimiz" className="hover:text-white transition cursor-pointer">Biz Kimiz</Link>
            </li>
            <li>
              <Link to="/hakkimizda/vizyon" className="hover:text-white transition cursor-pointer">Vizyon</Link>
            </li>
            <li>
              <Link to="/hakkimizda/ekibimiz" className="hover:text-white transition cursor-pointer">Ekibimiz</Link>
            </li>
          </ul>
        </div>

        {/* 3. Sütun - İletişim Bilgileri */}
        <div>
          <h3 className="text-3xl font-semibold mb-4">İletişim</h3>
          <p className="text-lg text-gray-300 mb-2">📍 İstanbul, Türkiye</p>
          <p className="text-lg text-gray-300 mb-2">✉️ info@mysteria.com</p>
          <p className="text-lg text-gray-300">📞 +90 555 123 45 67</p>
        </div>

        {/* 4. Sütun - Dava Butonları */}
        <div>
          <h3 className="text-3xl font-semibold mb-4">Dava Dosyaları</h3>
          <div className="flex flex-col space-y-4">
            <button className="bg-transparent hover:bg-gray-600 text-lg px-6 py-3 rounded-lg transition duration-200 w-36 border">
              Dava 1
            </button>
            <button className="bg-transparent border hover:bg-gray-600 text-lg px-6 py-3 rounded-lg transition duration-200 w-36 border">
              Dava 2
            </button>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-base text-gray-500">
        © 2025 Mysteria. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export default Footer;
