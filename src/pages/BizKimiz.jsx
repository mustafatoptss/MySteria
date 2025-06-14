import React from 'react';
import './BizKimiz.css';

function BizKimiz() {
  return (
    <div
      className="font-['Roboto'] min-h-screen bg-[#1a1a1a] text-gray-100 flex items-center justify-center px-4 md:px-6 py-10 md:py-20"
    >
      <div className="bg-[#2a2a2a] p-6 md:p-12 rounded-3xl shadow-2xl max-w-4xl w-full">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8 text-white text-center">Ben Kimim?</h1>

        <p className="text-base md:text-lg leading-relaxed text-gray-300">
          Merhaba! Ben <strong className="text-[#80610c]">Mustafa İsmail Toptaş</strong>. 
          <span className="text-purple-300 font-medium"> Süleyman Demirel Üniversitesi </span> Bilgisayar Mühendisliği 2. sınıf öğrencisiyim.
          Yazılım dünyasına ilgim lise yıllarında başladı ve o zamandan beri bu alana duyduğum heyecan her geçen gün arttı.
        </p>

        <p className="mt-5 md:mt-6 text-base md:text-lg leading-relaxed text-gray-300">
          Özellikle <span className="text-[#80610c] font-semibold">mobil uygulama geliştirme</span> ve 
          <span className="text-[#80610c] font-semibold"> web teknolojileri</span> ile ilgileniyorum.
          Şu anda React ve Flutter gibi teknolojiler üzerine odaklanıyorum. Kullanıcı dostu, estetik arayüzler tasarlamaya özen gösteriyorum.
        </p>

        <p className="mt-5 md:mt-6 text-base md:text-lg leading-relaxed text-gray-300">
          Öğrenmeyi, üretmeyi ve yeni şeyler denemeyi seviyorum. Takım içinde iletişime önem veririm ve gelişime her zaman açığım. 
          Yazılımın sadece kod değil, aynı zamanda bir problem çözme sanatı olduğuna inanıyorum.
        </p>

        <p className="mt-5 md:mt-6 text-base md:text-lg leading-relaxed text-gray-300">
          Gelecekte hem bireysel hem de ekip projelerinde yer alarak sektörde kalıcı bir iz bırakmak istiyorum.
          Hedefim, sadece iyi bir yazılımcı değil; aynı zamanda çözüm odaklı düşünen, yaratıcı ve vizyon sahibi bir mühendis olmak.
        </p>
      </div>
    </div>
  );
}

export default BizKimiz;
