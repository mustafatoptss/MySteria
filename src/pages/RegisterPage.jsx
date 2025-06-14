import React, { useState, useContext } from 'react';
import { 
  Button, 
  TextField, 
  Typography, 
  Box, 
  Paper, 
  Divider, 
  IconButton,
  InputAdornment
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
  auth,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut
} from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function RegisterPage() {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setMessage({ text: 'Şifreler eşleşmiyor!', type: 'error' });
      return;
    }

    setLoading(true);
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      await signOut(auth);
      
      setMessage({ 
        text: 'Kayıt başarılı! Lütfen e-postanızı doğrulayın. Doğrulama linki gönderildi.', 
        type: 'success' 
      });
      
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setMessage({ 
        text: error.message.replace('Firebase: ', ''), 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser({
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName || result.user.email.split('@')[0],
        photoURL: result.user.photoURL || ''
      });
      navigate('/');
    } catch (error) {
      setMessage({ 
        text: error.message.replace('Firebase: ', ''), 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  const goToLogin = () => {
    navigate('/login');
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
          Kayıt Ol
        </Typography>

        {message.text && (
          <Typography
            color={message.type === 'error' ? 'error' : 'success'}
            sx={{ mb: 2, textAlign: 'center' }}
          >
            {message.text}
          </Typography>
        )}

        <Box 
          component="form" 
          onSubmit={handleRegister}
          sx={{ mt: 3 }}
        >
          <TextField
            fullWidth
            label="Ad Soyad"
            margin="normal"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon color="primary" />
                </InputAdornment>
              ),
              sx: {
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
              }
            }}
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="primary" />
                </InputAdornment>
              ),
              sx: {
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
              }
            }}
          />

          <TextField
            fullWidth
            label="Şifre"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
              ),
              sx: {
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
              }
            }}
          />

          <TextField
            fullWidth
            label="Şifre Tekrar"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="primary" />
                </InputAdornment>
              ),
              sx: {
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
              }
            }}
          />

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
            {loading ? 'Kayıt Olunuyor...' : 'Kayıt Ol'}
          </Button>

          <Divider sx={{ my: 2, color: 'rgba(255,255,255,0.3)' }}>VEYA</Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleRegister}
            disabled={loading}
            sx={{
              color: 'white',
              borderColor: 'rgba(255,255,255,0.7)',
              '&:hover': {
                borderColor: '#ffb700',
                color: '#ffb700',
                bgcolor: 'rgba(255, 183, 0, 0.1)'
              }
            }}
          >
            Google ile Kayıt Ol
          </Button>

          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 3, color: 'rgba(255, 255, 255, 0.7)' }}
          >
            Zaten hesabınız var mı?{' '}
            <Button
              onClick={goToLogin}
              color="primary"
              size="small"
              sx={{ 
                color: '#ffb700',
                textTransform: 'none'
              }}
            >
              Giriş Yapın
            </Button>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default RegisterPage;