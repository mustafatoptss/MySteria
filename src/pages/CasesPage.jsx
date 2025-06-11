import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { FaMagnifyingGlass, FaFolder, FaClock, FaUserSecret } from 'react-icons/fa6';

function CaseFilePage() {
  const location = useLocation();
  const caseData = location.state?.caseData;

  if (!caseData) {
    return (
      <div className="min-h-screen bg-noir-900 flex items-center justify-center">
        <div className="bg-noir-800 text-rose-400 p-8 rounded-lg shadow-2xl border-l-4 border-rose-500">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaMagnifyingGlass className="animate-pulse" /> DOSYA BULUNAMADI
          </h2>
          <p className="mt-2 text-noir-300">Vaka kayıtlarına erişilemiyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-noir-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Dosya Başlığı */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-noir-800 rounded-t-xl p-6 border-b border-noir-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-amber-400 font-serif tracking-wide">
                {caseData.title}
              </h1>
              <div className="flex items-center mt-2 text-noir-400">
                <FaUserSecret className="mr-2" />
                <span className="text-sm">Dosya No: {caseData.caseId}</span>
              </div>
            </div>
            <div className="bg-noir-700 px-4 py-2 rounded-lg flex items-center gap-2">
              <FaClock className="text-amber-400" />
              <span className="text-noir-300 text-sm">{caseData.date}</span>
            </div>
          </div>
        </div>

        {/* Dosya İçeriği */}
        <div className="bg-noir-800 rounded-b-xl shadow-2xl overflow-hidden">
          {/* Sekmeler */}
          <div className="flex border-b border-noir-700">
            <button className="px-6 py-3 text-amber-400 border-b-2 border-amber-400 font-medium flex items-center gap-2">
              <FaFolder className="text-sm" /> Vaka Detayları
            </button>
            {/* Diğer sekme butonları buraya eklenebilir */}
          </div>

          {/* İçerik Alanı */}
          <div className="p-6 sm:p-8">
            {/* Özet Bilgi */}
            <div className="bg-noir-700 rounded-lg p-6 mb-8 border-l-4 border-amber-400">
              <h3 className="text-xl font-semibold text-amber-300 mb-3">Vaka Özeti</h3>
              <p className="text-noir-300 leading-relaxed">{caseData.summary}</p>
            </div>

            {/* Kanıtlar */}
            {caseData.evidence && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-amber-300 mb-4 flex items-center gap-2">
                  <FaMagnifyingGlass /> Kanıtlar ve İpuçları
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseData.evidence.map((item, index) => (
                    <li key={index} className="bg-noir-700 p-4 rounded-lg border border-noir-600 hover:border-amber-400 transition-colors">
                      <h4 className="font-medium text-amber-400">{item.title}</h4>
                      <p className="text-noir-300 text-sm mt-1">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Detaylı Rapor */}
            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-amber-300 mb-4">Detaylı Rapor</h3>
              <ReactMarkdown>{caseData.content}</ReactMarkdown>
            </div>
          </div>
        </div>

        {/* Not Alanı */}
        <div className="mt-8 bg-noir-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-amber-300 mb-4">Dedektif Notları</h3>
          <textarea
            className="w-full bg-noir-700 border border-noir-600 rounded-lg p-4 text-noir-300 focus:border-amber-400 focus:ring-amber-400"
            rows="4"
            placeholder="Bu vaka hakkındaki notlarınızı buraya yazın..."
          ></textarea>
          <div className="mt-3 flex justify-end">
            <button className="bg-amber-500 hover:bg-amber-600 text-noir-900 font-medium py-2 px-6 rounded-lg transition-colors">
              Notları Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseFilePage;