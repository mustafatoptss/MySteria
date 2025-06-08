import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { Typography, Paper, Box } from "@mui/material";

const auth = getAuth();

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  if (!user) {
    return (
      <Typography variant="h6" sx={{ mt: 4, textAlign: "center" }}>
        Profil bilgisi yüklenemedi. Lütfen giriş yapınız.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        height: '100vh',               // Tam ekran yüksekliği
        display: 'flex',               // Flexbox aç
        justifyContent: 'center',      // Yatay ortala
        alignItems: 'center',          // Dikey ortala
        padding: 2,
        backgroundColor: '#1a1a1a',   // İstersen arka plan rengi verilebilir
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, minWidth: 800, maxWidth: 1600 }}>
        <Typography variant="h4" gutterBottom>
          Profil Bilgileriniz
        </Typography>
        <Typography variant="h5" sx={{ mb: 1 }}>
          <strong>İsim:</strong> {user.displayName || "Tanımlı değil"}
        </Typography>
        <Typography variant="h5">
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="h5">
          <strong>password: *******</strong> {user.password}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Profile;
