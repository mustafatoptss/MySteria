// src/components/Navbar.js
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';  // Context'ten çekiyoruz
import { 
  AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Box, Divider, Avatar
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  ContactMail as ContactIcon,
  SportsEsports as GameIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  People as PeopleIcon
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const { user } = useUser();   // Burada user'ı context'ten alıyoruz
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleLogout = () => {
    if (onLogout) onLogout();
    handleMenuClose();
    navigate('/login');
  };

  const navItems = [
    { name: 'Anasayfa', path: '/', icon: <HomeIcon /> },
    { name: 'Hakkımızda', path: '/hakkimizda/biz-kimiz', icon: <InfoIcon /> },
    { name: 'Nasıl Oynanır?', path: '/howtoplay', icon: <GameIcon /> },

    { name: 'Cevaplar', path: '/answer', icon: <PeopleIcon /> },
        { name: 'İletişim', path: '/iletisim', icon: <ContactIcon /> },
  ];

  const profileMenuItems = [
    { name: 'Profil', path: '/profile', icon: <AccountCircleIcon /> },
    { name: 'Ayarlar', path: '/duzenle', icon: <SettingsIcon /> },
    { name: 'Çıkış Yap', action: handleLogout, icon: <LogoutIcon /> }
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ height: 80, backgroundColor: '#1a1a1a', boxShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
        <Toolbar sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', paddingX: { xs: 2, md: 4 } }}>
          {/* Sol Taraf */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <MenuIcon fontSize="large" />
            </IconButton>

            <Typography variant="h4" component={Link} to="/" sx={{ color: '#ffb700', fontWeight: 'bold', textDecoration: 'none', fontFamily: '"Roboto Condensed", sans-serif', letterSpacing: 1.5 }}>
              MySteria
            </Typography>
          </Box>

          {/* Orta Kısım (Desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                startIcon={item.icon}
                sx={{
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 500,
                  '&:hover': { color: '#ffb700' }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Sağ Taraf */}
          <Box>
            {user ? (
              <>
                <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                  <Avatar 
                    alt={user.displayName} 
                    src={user.photoURL}
                    sx={{ width: 40, height: 40, bgcolor: '#ffb700', color: '#1a1a1a' }}
                  >
                    {user.displayName?.charAt(0) || user.email?.charAt(0)}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  PaperProps={{
                    sx: {
                      mt: 1.5,
                      minWidth: 200,
                      bgcolor: '#2a2a2a',
                      color: 'white',
                      '& .MuiMenuItem-root': { gap: 1.5, py: 1.5 }
                    }
                  }}
                >
                  <Box sx={{ px: 2, py: 1.5 }}>
                    <Typography fontWeight="bold">{user.displayName}</Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>{user.email}</Typography>
                  </Box>
                  <Divider sx={{ borderColor: '#444', my: 1 }} />
                  {profileMenuItems.map((item) => (
                    <MenuItem
                      key={item.name}
                      onClick={() => {
                        handleMenuClose();
                        item.path ? navigate(item.path) : item.action?.();
                      }}
                      sx={{ '&:hover': { bgcolor: 'rgba(255, 183, 0, 0.1)' } }}
                    >
                      {item.icon}
                      {item.name}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button
                component={Link}
                to="/login"
                startIcon={<LoginIcon />}
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': { color: '#ffb700', borderColor: '#ffb700' }
                }}
              >
                Giriş Yap
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobil Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: 250, bgcolor: '#1a1a1a', color: 'white' } }}
      >
        <Box sx={{ p: 2, height: 80, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">MySteria</Typography>
        </Box>
        <Divider sx={{ borderColor: '#333' }} />
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.name}
              component={Link}
              to={item.path}
              onClick={toggleDrawer(false)}
              sx={{ '&:hover': { bgcolor: 'rgba(255, 183, 0, 0.1)' } }}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderColor: '#333' }} />
        <List>
          {user ? (
            profileMenuItems.map((item) => (
              <ListItem
                button
                key={item.name}
                onClick={() => {
                  toggleDrawer(false)();
                  item.path ? navigate(item.path) : item.action?.();
                }}
                sx={{ '&:hover': { bgcolor: 'rgba(255, 183, 0, 0.1)' } }}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))
          ) : (
            <ListItem button component={Link} to="/login" onClick={toggleDrawer(false)}>
              <ListItemText primary="Giriş Yap" />
            </ListItem>
          )}
        </List>
      </Drawer>

      {/* AppBar yüksekliği için boşluk */}
      <Toolbar sx={{ height: 80 }} />
    </>
  );
};

export default Navbar;
