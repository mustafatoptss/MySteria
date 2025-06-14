import React, { useState, useContext } from 'react';
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
  Lock as LockIcon
} from '@mui/icons-material';
import { 
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  sendEmailVerification
} from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function LoginPage() {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await userCredential.user.reload();
      const updatedUser = auth.currentUser;
      
      if (!updatedUser.emailVerified) {
        await signOut(auth);
        setMessage({ 
          text: 'Lütfen e-postanızı doğrulayın. Doğrulama linki gönderilsin mi?', 
          type: 'warning' 
        });
        return;
      }
      
      setUser({
        uid: updatedUser.uid,
        email: updatedUser.email,
        displayName: updatedUser.displayName || updatedUser.email.split('@')[0],
        photoURL: updatedUser.photoURL || ''
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

  const handleGoogleLogin = async () => {
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

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      setMessage({ text: 'Lütfen email adresinizi girin', type: 'error' });
      return;
    }
    
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setMessage({ 
        text: 'Şifre sıfırlama linki gönderildi. Lütfen e-postanızı kontrol edin.', 
        type: 'success' 
      });
      setShowResetForm(false);
    } catch (error) {
      setMessage({ 
        text: error.message.replace('Firebase: ', ''), 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  const goToRegister = () => {
    navigate('/register');
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
          Giriş Yap
        </Typography>

        {message.text && (
          <Typography
            color={message.type === 'error' ? 'error' : message.type === 'warning' ? 'warning.main' : 'primary'}
            sx={{ mb: 2, textAlign: 'center' }}
          >
            {message.text}
            {message.type === 'warning' && (
              <Button 
                onClick={() => sendEmailVerification(auth.currentUser).then(() => {
                  setMessage({ text: 'Doğrulama maili tekrar gönderildi', type: 'success' });
                })}
                color="warning"
                size="small"
                sx={{ ml: 1 }}
                disabled={loading}
              >
                Link Gönder
              </Button>
            )}
          </Typography>
        )}

        {!showResetForm ? (
          <Box 
            component="form" 
            onSubmit={handleLogin}
            sx={{ mt: 3 }}
          >
            <TextField
              fullWidth
              type="email"
              label="E-posta"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
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
              type={showPassword ? 'text' : 'password'}
              label="Şifre"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                onClick={() => setShowResetForm(true)}
              >
                Şifremi Unuttum
              </Button>
            </Box>

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
              {loading ? 'İşleniyor...' : 'Giriş Yap'}
            </Button>

            <Divider sx={{ my: 2, color: 'rgba(255,255,255,0.3)' }}>VEYA</Divider>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleLogin}
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
              Google ile Giriş Yap
            </Button>

            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 3, color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Hesabınız yok mu?{' '}
              <Button
                onClick={goToRegister}
                color="primary"
                size="small"
                sx={{ 
                  color: '#ffb700',
                  textTransform: 'none'
                }}
              >
                Kayıt Olun
              </Button>
            </Typography>
          </Box>
        ) : (
          <Box sx={{ mt: 2 }}>
            <Typography gutterBottom sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Şifre sıfırlama linkini göndermek için email adresinizi girin:
            </Typography>
            
            <TextField
              fullWidth
              type="email"
              label="E-posta"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              margin="normal"
              required
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

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => setShowResetForm(false)}
                disabled={loading}
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.7)'
                }}
              >
                İptal
              </Button>
              
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handlePasswordReset}
                disabled={loading}
                sx={{
                  bgcolor: '#ffb700',
                  color: '#121212',
                  '&:hover': {
                    bgcolor: '#ffa000'
                  }
                }}
              >
                {loading ? 'Gönderiliyor...' : 'Gönder'}
              </Button>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default LoginPage;