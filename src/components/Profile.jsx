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
    <Box sx={{ width: '100vh', marginTop: '399px', padding: 3 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Profil Bilgileriniz
        </Typography>
        <Typography variant="body1">
          <strong>İsim:</strong> {user.displayName || "Tanımlı değil"}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {user.email}
        </Typography>
        {/* İstersen başka profil bilgileri de ekleyebilirsin */}
      </Paper>
    </Box>
  );
};

export default Profile;
