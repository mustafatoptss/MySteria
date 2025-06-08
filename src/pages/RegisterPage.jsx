import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { auth, db } from './firebase'; // firebase.js yoluna göre güncelle
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

function Duzenle() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    // Giriş yapan kullanıcıyı dinle
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid); // Firestore'da "users" koleksiyonunda UID ile kayıt var
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log('Kullanıcı verisi bulunamadı.');
        }
      }
    });

    return () => unsubscribe(); // Component unmount olunca dinlemeyi bırak
  }, []);

  return (
    <Box
      sx={{
        marginTop: '120px',
        minHeight: 'calc(100vh - 120px)',
        backgroundColor: '#121212',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 4,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          width: '400px',
          backgroundColor: '#1e1e1e',
          borderRadius: 3,
          color: 'white',
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Profil Bilgileri
        </Typography>

        <TextField
          label="İsim"
          variant="filled"
          fullWidth
          value={userData.name}
          sx={{ mb: 3, input: { color: 'white' }, label: { color: 'lightgray' } }}
          InputProps={{ disableUnderline: true }}
        />
        <TextField
          label="E-posta"
          variant="filled"
          fullWidth
          value={userData.email}
          sx={{ mb: 3, input: { color: 'white' }, label: { color: 'lightgray' } }}
          InputProps={{ disableUnderline: true }}
        />
        <TextField
          label="Telefon"
          variant="filled"
          fullWidth
          value={userData.phone}
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
          onClick={() => alert('Bilgiler kaydedildi!')}
        >
          Kaydet
        </Button>
      </Paper>
    </Box>
  );
}

export default Duzenle;
