import React from 'react';
import { useLocation } from 'react-router-dom';

function PayScreen() {
  const location = useLocation();
  const pdfName = location.state?.pdfName || null;

  const handlePayment = () => {
    if (pdfName) {
      const link = document.createElement('a');
      link.href = `/pdfs/${pdfName}`;
      link.download = pdfName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("İndirilecek PDF bulunamadı.");
    }
  };

  return (
    <div className="min-h-screen bg-[#111] text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl bg-[#1d1d1d] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

        {/* Sol: Ürün Bilgisi */}
        <div className="md:w-1/2 p-10 bg-[#252525] flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Sipariş Özeti</h2>
          <p className="text-lg mb-4 text-gray-300">Seçilen hikaye PDF olarak indirilecek:</p>
          <div className="bg-[#333] p-6 rounded-lg shadow-inner mb-6">
            <h3 className="text-xl font-semibold">{pdfName || 'Hikaye PDF'}</h3>
            <p className="text-sm text-gray-400 mt-2">Tek seferlik lisanslı kullanım hakkı.</p>
          </div>
          <div className="mt-auto">
            <p className="text-xl font-bold">Toplam: <span className="text-purple-400">₺29,90</span></p>
            <p className="text-sm text-gray-500 mt-1">KDV dahildir.</p>
          </div>
        </div>

        {/* Sağ: Kart Bilgisi */}
        <div className="md:w-1/2 p-10 bg-[#1d1d1d]">
          <h2 className="text-3xl font-bold mb-6">Kart Bilgileri</h2>
          <form onSubmit={(e) => { e.preventDefault(); handlePayment(); }} className="space-y-6">
            <div>
              <label className="block text-sm mb-1 text-gray-400">Kart Üzerindeki İsim</label>
              <input
                type="text"
                placeholder="Ad Soyad"
                required
                className="w-full px-4 py-3 rounded-md bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-400">Kart Numarası</label>
              <input
                type="text"
                placeholder="**** **** **** ****"
                maxLength={19}
                required
                className="w-full px-4 py-3 rounded-md bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm mb-1 text-gray-400">SKT (AA/YY)</label>
                <input
                  type="text"
                  placeholder="12/26"
                  maxLength={5}
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm mb-1 text-gray-400">CVV</label>
                <input
                  type="password"
                  placeholder="***"
                  maxLength={4}
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#2c2c2c] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300 text-lg"
            >
              Ödemeyi Yap ve PDF’i İndir
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default PayScreen;
