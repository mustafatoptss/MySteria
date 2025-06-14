import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';

function RegisterForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert('Şifreler eşleşmiyor!');
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);
      await signOut(auth);

      setMessage({
        type: 'success',
        text: 'Kayıt başarılı! Lütfen e-posta adresinize gönderilen doğrulama mailini kontrol edin. Doğrulama yapmadan giriş yapamazsınız.'
      });

      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message
      });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-3xl font-bold mb-4">Kayıt Ol</h2>

      {message && (
        <div
          className={`p-3 rounded-md ${
            message.type === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}
        >
          {message.text}
        </div>
      )}

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          disabled={loading}
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Şifre:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          disabled={loading}
        />
      </div>

      <div>
        <label className="block text-gray-700 font-semibold mb-2">Şifre (Tekrar):</label>
        <input
          type="password"
          required
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-md transition"
        disabled={loading}
      >
        {loading ? 'Yükleniyor...' : 'Kayıt Ol'}
      </button>
    </form>
  );
}

export default RegisterForm;