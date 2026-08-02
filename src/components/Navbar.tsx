import React, { useState } from 'react';
import {
  AppBar, Toolbar, Box, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  useScrollTrigger, useTheme, useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NAV_LINKS = [
  { label: 'Home',         href: '#hero' },
  { label: 'About',        href: '#about' },
  { label: 'Courses',      href: '#courses' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 60 });

  const scrollTo = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 6 : 0}
        sx={{
          background: trigger
            ? 'rgba(25, 43, 92, 0.97)'
            : 'linear-gradient(180deg, rgba(25,43,92,0.88) 0%, transparent 100%)',
          backdropFilter: trigger ? 'blur(20px)' : 'none',
          transition: 'all 0.4s ease',
          py: trigger ? 0.3 : 0.8,
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, mx: 'auto', width: '100%', px: { xs: 2, md: 4 } }}>

          {/* ── Logo ── */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexGrow: 1, cursor: 'pointer' }}
            onClick={() => scrollTo('#hero')}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Suvin's Academy Logo"
              sx={{
                width: { xs: 48, md: 58 },
                height: { xs: 48, md: 58 },
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0,
                border: '1px solid rgba(255,255,255,0.25)',
                outline: '2.5px solid #F5A623',
                boxShadow: '0 0 12px rgba(245,166,35,0.45), 0 4px 16px rgba(0,0,0,0.35)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.06)' },
              }}
            />
            <Box sx={{ display: 'block' }}>
              <Typography
                sx={{
                  color: 'white',
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 800,
                  fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.18rem' },
                  lineHeight: 1.1,
                  letterSpacing: 0.3,
                }}
              >
                Suvin's Academy
              </Typography>
              <Typography sx={{
                color: 'rgba(255,255,255,0.58)',
                fontSize: { xs: '0.55rem', sm: '0.6rem' },
                letterSpacing: { xs: 1.5, sm: 2.5 },
                textTransform: 'uppercase',
                mt: 0.2,
                display: { xs: 'none', sm: 'block' },   /* tagline hidden on very small */
              }}>
                Learn · Grow · Excel
              </Typography>
            </Box>
          </Box>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mr: 2 }}>
              {NAV_LINKS.slice(0, 6).map((link) => (
                <Button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  sx={{
                    color: 'rgba(255,255,255,0.82)', fontWeight: 500,
                    fontSize: '0.85rem', borderRadius: 99, px: 1.6, py: 0.8,
                    '&:hover': { color: 'white', background: 'rgba(255,255,255,0.12)' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined" color="inherit"
              onClick={() => window.location.href = '/admin'}
              sx={{
                borderRadius: 99, px: { xs: 1.5, sm: 3 }, py: { xs: 0.6, sm: 0.9 },
                fontWeight: 700, fontSize: { xs: '0.72rem', sm: '0.85rem' },
                borderColor: 'rgba(255,255,255,0.3)', color: 'white',
                '&:hover': { borderColor: 'white', background: 'rgba(255,255,255,0.1)' }
              }}
            >
              Admin
            </Button>
            {/* Enquire Now — always visible in top navbar */}
            <Button
              variant="contained" color="secondary"
              onClick={() => scrollTo('#contact')}
              sx={{
                borderRadius: 99,
                px: { xs: 1.5, sm: 3 },
                py: { xs: 0.6, sm: 0.9 },
                fontWeight: 700,
                fontSize: { xs: '0.72rem', sm: '0.85rem' },
                whiteSpace: 'nowrap',
                minWidth: 'auto',
              }}
            >
              Enquire Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '80vw', maxWidth: 320,
            background: 'linear-gradient(160deg, #101d3e 0%, #192b5c 100%)',
            pt: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, pb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              component="img"
              src="/logo.png"
              alt="Suvin's Academy Logo"
              sx={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.25)', outline: '2.5px solid #F5A623', outlineOffset: '3px', boxShadow: '0 0 10px rgba(245,166,35,0.4)' }}
            />
            <Typography sx={{ color: 'white', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1rem', lineHeight: 1.2 }}>
              Suvin's<br />Academy
            </Typography>
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 2 }}>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => scrollTo(link.href)}
                sx={{ borderRadius: 2, color: 'rgba(255,255,255,0.82)', '&:hover': { background: 'rgba(255,255,255,0.1)', color: 'white' } }}
              >
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 600, fontSize: '1rem' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
