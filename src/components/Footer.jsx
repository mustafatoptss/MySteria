import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const nav = useNavigate();
  return (
    <footer className="bg-neutral-900 text-white font-['Roboto'] px-5 md:px-10 pt-10 md:pt-16 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* 1. Sütun - Mysteria */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">Mysteria</h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            Karanlık sokaklarda yankılanan sessiz adımlar… <br />
            Her detay bir sır, her bakışta bir şüphe gizli <br />
            MySteria ekibi, gerçeğin izini sürmek için burada.
          </p>
        </div>

        {/* 2. Sütun - Hızlı Menü */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Hızlı Menü</h3>
          <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-300">
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
          </ul>
        </div>

        {/* 3. Sütun - İletişim Bilgileri */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">İletişim</h3>
          <p className="text-sm md:text-base text-gray-300 mb-1">📍 Isparta, Türkiye</p>
          <p className="text-sm md:text-base text-gray-300 mb-1">✉️ mustafatoptss80@gmail.com</p>
          <p className="text-sm md:text-base text-gray-300">📞 +90 555 555 55 55</p>
        </div>

        {/* 4. Sütun - Dava Butonları */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">Dava Dosyaları</h3>
          <div className="grid grid-cols-2 gap-3 w-full md:w-80">
            <button
              onClick={() => nav('/game')}
              className="bg-transparent hover:bg-gray-600 text-xs md:text-base px-3 md:px-6 rounded-lg transition duration-200 border h-10 md:h-12 flex items-center justify-center"
            >
              Kayıp Mücevher
            </button>
            <button
              onClick={() => nav('/game')}
              className="bg-transparent hover:bg-gray-600 text-xs md:text-base px-3 md:px-6 rounded-lg transition duration-200 border h-10 md:h-12 flex items-center justify-center"
            >
              Sisli Şehir
            </button>
            <button
              onClick={() => nav('/game')}
              className="bg-transparent hover:bg-gray-600 text-xs md:text-base px-3 md:px-6 rounded-lg transition duration-200 border h-10 md:h-12 flex items-center justify-center"
            >
              Gizemli Mektup
            </button>
            <button
              onClick={() => nav('/game')}
              className="bg-transparent hover:bg-gray-600 text-xs md:text-base px-3 md:px-6 rounded-lg transition duration-200 border h-10 md:h-12 flex items-center justify-center"
            >
              Son Vaka
            </button>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="border-t border-gray-700 mt-6 md:mt-10 pt-3 md:pt-5 text-center text-xs md:text-sm text-gray-500">
        © 2025 Mysteria. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export default Footer;
