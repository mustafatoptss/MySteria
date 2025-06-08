import React, { useState } from 'react';
import { 
  Button, 
  TextField, 
  Typography, 
  Box, 
  Paper, 
  Divider, 
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import {
  Google as GoogleIcon,
  Visibility,
  VisibilityOff,
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon
} from '@mui/icons-material';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  updateProfile
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const LoginPage = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      if (isLogin) {
        // Giriş yap
        const userCredential = await signInWithEmailAndPassword(
          auth, 
          formData.email, 
          formData.password
        );
        handleAuthSuccess(userCredential.user);
      } else {
        // Kayıt ol
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Şifreler eşleşmiyor');
        }
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        // Kullanıcı adını güncelle
        await updateProfile(userCredential.user, {
          displayName: formData.name
        });
        handleAuthSuccess({
          ...userCredential.user,
          displayName: formData.name
        });
      }
    } catch (error) {
      setMessage({ 
        text: error.message.replace('Firebase: ', ''), 
        type: 'error' 
      });
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      handleAuthSuccess(result.user);
    } catch (error) {
      setMessage({ 
        text: error.message.replace('Firebase: ', ''), 
        type: 'error' 
      });
      setLoading(false);
    }
  };

  const handleAuthSuccess = (user) => {
    setUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || user.email.split('@')[0],
      photoURL: user.photoURL
    });
    setLoading(false);
    navigate('/');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#121212',
        p: 2
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: '100%',
          maxWidth: 500,
          p: 4,
          bgcolor: '#1e1e1e',
          color: 'white'
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#ffb700'
          }}
        >
          {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
        </Typography>

        {message.text && (
          <Typography
            color={message.type === 'error' ? 'error' : 'primary'}
            sx={{ mb: 2, textAlign: 'center' }}
          >
            {message.text}
          </Typography>
        )}

        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          {!isLogin && (
            <TextField
              fullWidth
              label="Ad Soyad"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon color="primary" />
                  </InputAdornment>
                )
              }}
              sx={{
                '& .MuiInputBase-input': {
                  color: 'white'
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)'
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffb700'
                  }
                }
              }}
            />
          )}

          <TextField
            fullWidth
            type="email"
            label="E-posta"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="primary" />
                </InputAdornment>
              )
            }}
            sx={{
              '& .MuiInputBase-input': {
                color: 'white'
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)'
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.23)'
                },
                '&:hover fieldset': {
                  borderColor: '#ffb700'
                }
              }
            }}
          />

          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            label="Şifre"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff color="primary" /> : <Visibility color="primary" />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            sx={{
              '& .MuiInputBase-input': {
                color: 'white'
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)'
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.23)'
                },
                '&:hover fieldset': {
                  borderColor: '#ffb700'
                }
              }
            }}
          />

          {!isLogin && (
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              label="Şifre Tekrar"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon color="primary" />
                  </InputAdornment>
                )
              }}
              sx={{
                '& .MuiInputBase-input': {
                  color: 'white'
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)'
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffb700'
                  }
                }
              }}
            />
          )}

          {isLogin && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Beni hatırla"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              />
              <Button 
                size="small" 
                sx={{ color: '#ffb700' }}
                onClick={() => navigate('/reset-password')}
              >
                Şifremi Unuttum
              </Button>
            </Box>
          )}

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              mt: 3,
              mb: 2,
              py: 1.5,
              bgcolor: '#ffb700',
              color: '#121212',
              '&:hover': {
                bgcolor: '#ffa000'
              }
            }}
          >
            {loading ? 'İşleniyor...' : isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </Button>

          <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.12)' }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              VEYA
            </Typography>
          </Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleSignIn}
            disabled={loading}
            sx={{
              py: 1.5,
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                borderColor: '#ffb700',
                color: '#ffb700'
              }
            }}
          >
            Google ile {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </Button>

          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {isLogin ? 'Hesabın yok mu?' : 'Zaten hesabın var mı?'}
              <Button 
                size="small" 
                sx={{ ml: 1, color: '#ffb700' }}
                onClick={() => {
                  setIsLogin(!isLogin);
                  setMessage({ text: '', type: '' });
                }}
              >
                {isLogin ? 'Kayıt Ol' : 'Giriş Yap'}
              </Button>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;