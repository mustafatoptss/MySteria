import React from 'react';

function BizKimiz() {
  return (
    <div
      style={{fontFamily: 'Roboto !important' }}
      className="roboto-font min-h-screen bg-[#1a1a1a] text-gray-100 flex items-center justify-center px-6 py-20"
    >
      <div className="bg-[#2a2a2a] p-12 rounded-2xl shadow-2xl max-w-4xl w-full">
        <h1 className="text-5xl font-extrabold mb-8 text-white text-center">Ben Kimim?</h1>

        <p className="text-xl leading-relaxed text-gray-300">
          Merhaba! Ben <strong className="text-purple-400">Mustafa İsmail Toptaş</strong>. 
          <span className="text-purple-300 font-medium"> Süleyman Demirel Üniversitesi </span> Bilgisayar Mühendisliği 2. sınıf öğrencisiyim.
          Yazılım dünyasına ilgim lise yıllarında başladı ve o zamandan beri bu alana duyduğum heyecan her geçen gün arttı.
        </p>

        <p className="mt-6 text-xl leading-relaxed text-gray-300">
          Özellikle <span className="text-teal-400 font-semibold">mobil uygulama geliştirme</span> ve 
          <span className="text-blue-400 font-semibold"> web teknolojileri</span> ile ilgileniyorum.
          Şu anda React ve Flutter gibi teknolojiler üzerine odaklanıyorum. Kullanıcı dostu, estetik arayüzler tasarlamaya özen gösteriyorum.
        </p>

        <p className="mt-6 text-xl leading-relaxed text-gray-300">
          Öğrenmeyi, üretmeyi ve yeni şeyler denemeyi seviyorum. Takım içinde iletişime önem veririm ve gelişime her zaman açığım. 
          Yazılımın sadece kod değil, aynı zamanda bir problem çözme sanatı olduğuna inanıyorum.
        </p>

        <p className="mt-6 text-xl leading-relaxed text-gray-300">
          Gelecekte hem bireysel hem de ekip projelerinde yer alarak sektörde kalıcı bir iz bırakmak istiyorum.
          Hedefim, sadece iyi bir yazılımcı değil; aynı zamanda çözüm odaklı düşünen, yaratıcı ve vizyon sahibi bir mühendis olmak.
        </p>

    
      </div>
    </div>
  );
}

export default BizKimiz;
