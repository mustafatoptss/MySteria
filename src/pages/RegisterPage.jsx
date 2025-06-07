import React from 'react';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#2a2a2a] rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-white text-center mb-8">Kayıt Ol</h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              İsim
            </label>
            <input
              type="text"
              id="name"
              placeholder="İsminiz"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

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

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
              Şifre Tekrar
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Şifrenizi tekrar girin"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 rounded-md transition-colors duration-300"
          >
            Kayıt Ol
          </button>
        </form>

        {/* Ya da Google ile giriş yap */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-gray-400">Ya da</p>

          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={() => alert('Google ile Giriş İşlemi')}
            sx={{
              color: 'white',
              borderColor: '#fff',
              textTransform: 'none',
              px: 4,
              py: 1.5,
              width: '100%',
              maxWidth: '300px',
              '&:hover': {
                borderColor: '#ffb800',
                backgroundColor: '#ffb800',
                color: '#000',
              },
            }}
          >
            Google ile Giriş Yap
          </Button>
        </div>

        <p className="mt-6 text-center text-gray-400">
          Hesabın var mı?{' '}
          <a href="/login" className="text-amber-400 hover:underline">
            Giriş Yap
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
