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
  signInWithPopup, 
  GoogleAuthProvider,
  sendEmailVerification,
  signOut
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const LoginPage = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleResendVerification = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      await signOut(auth);
      setMessage({ 
        text: 'Yeni doğrulama maili gönderildi. Lütfen e-postanızı kontrol edin.', 
        type: 'success' 
      });
    } catch (error) {
      setMessage({ 
        text: error.message.replace('Firebase: ', ''), 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      
      await userCredential.user.reload();
      const updatedUser = auth.currentUser;
      
      if (!updatedUser.emailVerified) {
        await signOut(auth);
        setMessage({ 
          text: 'E-posta doğrulaması yapılmamış. Lütfen e-postanızı kontrol edin.', 
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

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
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
          </Typography>
        )}

        {message.type === 'warning' && (
          <Button
            fullWidth
            variant="outlined"
            color="warning"
            onClick={() => handleResendVerification(formData.email, formData.password)}
            disabled={loading}
            sx={{ mb: 2 }}
          >
            Doğrulama Mailini Yeniden Gönder
          </Button>
        )}

        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
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
            onClick={handleGoogleSignIn}
            sx={{
              color: 'white',
              borderColor: 'rgba(255,255,255,0.7)',
              '&:hover': {
                borderColor: '#ffb700',
                color: '#ffb700',
                bgcolor: 'rgba(255, 183, 0, 0.1)'
              }
            }}
            disabled={loading}
          >
            Google ile Giriş Yap
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;