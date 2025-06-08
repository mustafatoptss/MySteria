import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

function Duzenle() {
  // Örnek kullanıcı verisi (gerçek veriyi API veya context'ten alabilirsin)
  const user = {
    name: 'Mustafa Yılmaz',
    email: 'mustafa@example.com',
    phone: '+90 555 123 45 67',
  };

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
          defaultValue={user.name}
          sx={{ mb: 3, input: { color: 'white' }, label: { color: 'lightgray' } }}
          InputProps={{ disableUnderline: true }}
        />
        <TextField
          label="E-posta"
          variant="filled"
          fullWidth
          defaultValue={user.email}
          sx={{ mb: 3, input: { color: 'white' }, label: { color: 'lightgray' } }}
          InputProps={{ disableUnderline: true }}
        />
        <TextField
          label="Telefon"
          variant="filled"
          fullWidth
          defaultValue={user.phone}
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
          // TODO: Kaydet işlemi burada yapılabilir
          onClick={() => alert('Bilgiler kaydedildi!')}
        >
          Kaydet
        </Button>
      </Paper>
    </Box>
  );
}

export default Duzenle;
