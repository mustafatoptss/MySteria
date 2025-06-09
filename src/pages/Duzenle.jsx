import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Snackbar, Alert } from '@mui/material';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateProfile, updateEmail } from 'firebase/auth';

function Duzenle() {
  const { user, setUser } = useUser();
  const [name, setName] = useState(user.displayName || '');
  const [email, setEmail] = useState(user.email || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSave = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    try {
      // Firebase: displayName güncelle
      await updateProfile(currentUser, {
        displayName: name,
        // Firebase default profile objesinde phoneNumber yok, özel db gerekiyorsa ayrı kayıt et.
      });

      // Firebase: email güncelle
      if (email !== currentUser.email) {
        await updateEmail(currentUser, email);
      }

      // React context güncelle
      setUser(prev => ({
        ...prev,
        displayName: name,
        email,
        phone,
      }));

      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (err) {
      console.error('Güncelleme hatası:', err);
      setError('Bilgiler güncellenemedi: ' + err.message);
    }
  };

  return (
    <Box sx={{ marginTop: '120px', minHeight: 'calc(100vh - 120px)', backgroundColor: '#121212', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: 4 }}>
      <Paper elevation={5} sx={{ padding: 4, width: '400px', backgroundColor: '#1e1e1e', borderRadius: 3, color: 'white' }}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Profil Bilgileri
        </Typography>

        <TextField
          label="İsim"
          variant="filled"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 3, input: { color: 'white' }, label: { color: 'lightgray' } }}
          InputProps={{ disableUnderline: true }}
        />
        <TextField
          label="E-posta"
          variant="filled"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 3, input: { color: 'white' }, label: { color: 'lightgray' } }}
          InputProps={{ disableUnderline: true }}
        />
        <TextField
          label="Telefon"
          variant="filled"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          sx={{ mb: 4, input: { color: 'white' }, label: { color: 'lightgray' } }}
          InputProps={{ disableUnderline: true }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: 'deepskyblue',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: 'dodgerblue' },
          }}
          onClick={handleSave}
        >
          Kaydet
        </Button>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="info" sx={{ width: '100%' }}>
          Bilgiler güncellendi!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Duzenle;
