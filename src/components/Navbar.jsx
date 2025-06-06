import React, { useState } from 'react';
import navbarlogo from '../images/navbar-logo2.png'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleAboutMenuClick = (path) => {
    handleMenuClose();
    navigate(path);
  };

  // Ortak button stili:
  const buttonStyle = {
    fontSize: '24px',
    color: 'white',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    padding: '8px 16px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color: 'white',
    },
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          height: '120px',
          backgroundColor: 'black',
          zIndex: 1300,
          display: 'flex',
          justifyContent: 'center',
          paddingX: 2,
        }}
      >
        <Toolbar sx={{ height: '100%', paddingLeft: 0, gap: 2 }}>
          {/* Menü İkonu ve Logo Kapsayıcısı */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'black',
              borderRadius: '12px',
              padding: '8px 16px',
              gap: '12px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <IconButton
              edge="start"
              onClick={toggleDrawer(true)}
              color="inherit"
              aria-label="menu"
              sx={{
                width: 56,
                height: 56,
                fontSize: 40,
                padding: 0,
              }}
            >
              <MenuIcon fontSize="inherit" />
            </IconButton>

            <Typography
              variant="h4"
              noWrap
              sx={{
                color: 'white',
                fontWeight: 'bold',
                userSelect: 'none',
                letterSpacing: 2,
                backgroundColor: "black",
                fontSize: "40px",
                borderRadius: "8px",
                padding: "4px"
              }}
            >
             MySteria
            </Typography>
          </div>

          {/* Menü Butonları */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              height: '64px',
              marginLeft: 'auto',
            }}
          >
            <Button sx={buttonStyle} component={Link} to="/">
              Anasayfa
            </Button>

            <Button sx={buttonStyle} onClick={handleMenuClick}>
              Hakkımızda
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: '#222', // koyu arka plan
                  color: 'white',
                },
              }}
            >
              <MenuItem onClick={() => handleAboutMenuClick('/hakkimizda/biz-kimiz')}>
                Biz Kimiz?
              </MenuItem>
              <MenuItem onClick={() => handleAboutMenuClick('/hakkimizda/vizyon')}>
                Vizyon & Misyon
              </MenuItem>
              <MenuItem onClick={() => handleAboutMenuClick('/hakkimizda/ekibimiz')}>
                Ekibimiz
              </MenuItem>
            </Menu>

            <Button sx={buttonStyle} component={Link} to="/iletisim">
              İletişim
            </Button>


              <Button sx={buttonStyle} component={Link} to="/howtoplay">
             Nasıl Oynanır ?
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            top: '120px',
            backgroundColor: '#2c2c2c',
            height: 'calc(100% - 120px)',
          },
        }}
      >
        <List sx={{ width: 250 }}>
          {['Profil', 'Ayarlar', 'Çıkış Yap'].map((text) => (
            <ListItem
              button
              key={text}
              onClick={toggleDrawer(false)}
              sx={{
                color: 'white',
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'black',
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
