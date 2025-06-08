import React, { useState } from "react";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";


import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  // Register state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [regMessage, setRegMessage] = useState("");

  // Email/password login
  const loginSubmit = (e) => {
    e.preventDefault();
    setLoginMessage("");
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        navigate('/')
        // Giriş başarılı
        const user = userCredential.user;
        setLoginMessage(`Hoşgeldin, ${user.email}`);
      })
      .catch((error) => {
        setLoginMessage(error.message);
      });
  };

  // Email/password kayıt
  const registerSubmit = (e) => {
    e.preventDefault();
    setRegMessage("");
    if (password !== confirmPassword) {
      setRegMessage("Şifreler eşleşmiyor");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Kayıt başarılı
        const user = userCredential.user;
        setRegMessage(`Kayıt başarılı! Hoşgeldin, ${user.email}`);
      })
      .catch((error) => {
        setRegMessage(error.message);
      });
  };

  // Google ile giriş
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setLoginMessage(`Google ile giriş başarılı! Hoşgeldin, ${user.email}`);
      })
      .catch((error) => {
        setLoginMessage(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#2a2a2a] rounded-lg shadow-lg p-8">
        {isLogin ? (
          <>
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Giriş Yap
            </h2>

            <form onSubmit={loginSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email_field"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="email_field"
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="password_field"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Şifre
                </label>
                <input
                  type="password"
                  id="password_field"
                  placeholder="Şifreniz"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 rounded-md transition-colors duration-300"
              >
                Giriş Yap
              </button>
            </form>

            {loginMessage && (
              <p className="mt-4 text-center text-red-500 font-semibold">
                {loginMessage}
              </p>
            )}

            <p className="mt-6 text-center text-gray-400">
              Hesabın yok mu?{" "}
              <button
                onClick={() => {
                  setIsLogin(false);
                  setLoginMessage("");
                  setRegMessage("");
                }}
                className="text-amber-400 hover:underline"
              >
                Kayıt Ol
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Kayıt Ol
            </h2>

            <form onSubmit={registerSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name_field"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  İsim
                </label>
                <input
                  type="text"
                  id="name_field"
                  placeholder="İsminiz"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="email_field"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="email_field"
                  placeholder="example@mail.com"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="password_field"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Şifre
                </label>
                <input
                  type="password"
                  id="password_field"
                  placeholder="Şifreniz"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="confirm_password_field"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Şifre Tekrar
                </label>
                <input
                  type="password"
                  id="confirm_password_field"
                  placeholder="Şifrenizi tekrar girin"
                  className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 rounded-md transition-colors duration-300"
              >
                Kayıt Ol
              </button>
            </form>

            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-gray-400">Ya da</p>

              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                onClick={googleSignIn}
                sx={{
                  color: "white",
                  borderColor: "#fff",
                  textTransform: "none",
                  px: 4,
                  py: 1.5,
                  width: "100%",
                  maxWidth: "300px",
                  "&:hover": {
                    borderColor: "#ffb800",
                    backgroundColor: "#ffb800",
                    color: "#000",
                  },
                }}
              >
                Google ile Giriş Yap
              </Button>
            </div>

            {regMessage && (
              <p className="mt-6 text-center text-red-500 font-semibold">
                {regMessage}
              </p>
            )}

            <p className="mt-6 text-center text-gray-400">
              Hesabın var mı?{" "}
              <button
                onClick={() => {
                  setIsLogin(true);
                  setLoginMessage("");
                  setRegMessage("");
                }}
                className="text-amber-400 hover:underline"
              >
                Giriş Yap
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
