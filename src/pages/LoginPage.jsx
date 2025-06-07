import React from 'react';

function LoginPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#2a2a2a] rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Giriş Yap</h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              placeholder="Şifreniz"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 rounded-md transition-colors duration-300"
          >
            Giriş Yap
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Hesabın yok mu?{' '}
          <a href="/register" className="text-amber-400 hover:underline">
            Kayıt Ol
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
