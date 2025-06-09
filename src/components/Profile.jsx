import React, { useEffect, useState } from "react";
import { getAuth, updatePassword } from "firebase/auth";
import {
  Typography,
  Paper,
  Box,
  Avatar,
  Divider,
  Button,
  TextField,
  Alert,
} from "@mui/material";

const auth = getAuth();

const Profile = () => {
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  const handleChangePassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      setStatus({
        type: "error",
        message: "Şifre en az 6 karakter olmalıdır.",
      });
      return;
    }

    try {
      await updatePassword(user, newPassword);
      setStatus({ type: "success", message: "Şifre başarıyla değiştirildi." });
      setNewPassword("");
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message:
          error.code === "auth/requires-recent-login"
            ? "Şifre değiştirmek için tekrar giriş yapmalısınız."
            : "Şifre değiştirilemedi: " + error.message,
      });
    }
  };

  if (!user) {
    return (
      <Typography variant="h6" sx={{ mt: 4, textAlign: "center", color: "white" }}>
        Profil bilgisi yüklenemedi. Lütfen giriş yapınız.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        padding: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          maxWidth: 500,
          width: "100%",
          bgcolor: "#1e1e1e",
          color: "white",
          borderRadius: 3,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Avatar
            src={user.photoURL}
            alt={user.displayName}
            sx={{
              width: 100,
              height: 100,
              margin: "0 auto",
              bgcolor: "#ffb700",
              color: "#1a1a1a",
              fontSize: 40,
            }}
          >
            {user.displayName?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
          </Avatar>
          <Typography variant="h4" sx={{ mt: 2 }}>
            {user.displayName || "İsimsiz Kullanıcı"}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Kullanıcı Profili
          </Typography>
        </Box>

        <Divider sx={{ my: 3, borderColor: "#333" }} />

        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Email:</strong> {user.email}
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Şifre:</strong> ********
        </Typography>

        {/* Şifre değiştirme alanı */}
        <TextField
          type="password"
          label="Yeni Şifre"
          variant="outlined"
          fullWidth
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          sx={{ mt: 2, input: { color: 'white' }, label: { color: 'gray' } }}
        />

        <Button
          variant="outlined"
          fullWidth
          sx={{
            mt: 2,
            borderColor: "#ffb700",
            color: "#ffb700",
            "&:hover": {
              backgroundColor: "rgba(255,183,0,0.1)",
              borderColor: "#ffb700",
            },
          }}
          onClick={handleChangePassword}
        >
          Şifreyi Değiştir
        </Button>

        {status.message && (
          <Alert severity={status.type} sx={{ mt: 2 }}>
            {status.message}
          </Alert>
        )}
      </Paper>
    </Box>
  );
};

export default Profile;
