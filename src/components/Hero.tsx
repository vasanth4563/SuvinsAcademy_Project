import React, { useEffect, useRef, useState } from 'react';
import {
  Box, Container, Typography, Button, Grid, Chip, Avatar,
  useTheme, useMediaQuery,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutlined';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import { STATS, Syllabus, SUBJECTS } from '../data/academyData';

const Syllabus_COLORS = ['#0d1b3e','#880e4f','#006064','#e65100','#1b5e20'];

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeSyllabus, setActiveSyllabus] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSyllabus((p) => (p + 1) % Syllabus.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((p) => (p + 1) % 5);
    }, 3000);
    return () => clearInterval(slideTimer);
  }, []);

  const statIcons = [
    <SchoolIcon fontSize="medium" />,
    <GroupIcon fontSize="medium" />,
    <EmojiEventsIcon fontSize="medium" />,
    <StarIcon fontSize="medium" />,
  ];

  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100svh',
        background: 'linear-gradient(135deg, #101d3e 0%, #192b5c 55%, #243d7a 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: '90px', md: '100px' },
        pb: { xs: 6, md: 8 },
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <Box sx={{
        position: 'absolute', top: '-15%', right: '-8%',
        width: { xs: 280, md: 520 }, height: { xs: 280, md: 520 },
        background: 'radial-gradient(circle, rgba(192,57,43,0.18) 0%, transparent 70%)',
        borderRadius: '50%', animation: 'float 9s ease-in-out infinite',
        '@keyframes float': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
      }} />
      <Box sx={{
        position: 'absolute', bottom: '5%', left: '-5%',
        width: { xs: 180, md: 320 }, height: { xs: 180, md: 320 },
        background: 'radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)',
        borderRadius: '50%', animation: 'float 12s ease-in-out infinite 3s',
      }} />
      <Box sx={{
        position: 'absolute', top: '40%', right: '20%',
        width: { xs: 80, md: 140 }, height: { xs: 80, md: 140 },
        background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
        borderRadius: '50%', animation: 'float 7s ease-in-out infinite 1s',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            {/* Badge */}
            <Box
              sx={{
                display: 'inline-flex', alignItems: 'center', gap: 1,
                background: 'rgba(192,57,43,0.18)', border: '1.5px solid rgba(192,57,43,0.4)',
                borderRadius: 99, px: 2, py: 0.7, mb: 3,
                animation: 'fadeInUp 0.7s ease both',
              }}
            >
              <Box sx={{ width: 7, height: 7, borderRadius: '50%', background: '#e74c3c', animation: 'pulse-dot 1.5s ease-in-out infinite', '@keyframes pulse-dot': { '0%,100%': { opacity: 1, transform: 'scale(1)' }, '50%': { opacity: 0.5, transform: 'scale(1.5)' } } }} />
              <Typography sx={{ color: '#ff8a80', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
                2+ Years of Academic Excellence
              </Typography>
            </Box>

            {/* Heading */}
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
                fontWeight: 800,
                lineHeight: 1.15,
                mb: 2.5,
                animation: 'fadeInUp 0.7s ease 0.1s both',
                '@keyframes fadeInUp': { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
              }}
            >
              Welcome to{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(90deg, #f5a623, #f5a623)',
                backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
              Suvin's Academy
              </Box>
            </Typography>

            {/* ── Photo Slideshow ── */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 200, sm: 260, md: 300 },
                borderRadius: 4,
                overflow: 'hidden',
                mb: 3,
                boxShadow: '0 16px 48px rgba(0,0,0,0.45)',
                border: '2px solid rgba(255,255,255,0.12)',
                animation: 'fadeInUp 0.7s ease 0.15s both',
              }}
            >
              {['/academy1.jpg', '/academy2.jpg', '/academy3.jpg', '/academy4.jpg', '/academy5.jpg'].map((src, i) => (
                <Box
                  key={src}
                  component="img"
                  src={src}
                  alt={`Academy slide ${i + 1}`}
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: activeSlide === i ? 1 : 0,
                    transition: 'opacity 0.9s ease',
                  }}
                />
              ))}
              {/* Dark overlay gradient */}
              <Box sx={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,18,40,0.55) 0%, transparent 60%)',
                zIndex: 1,
              }} />
              {/* Dot indicators */}
              <Box sx={{
                position: 'absolute', bottom: 12, left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex', gap: 1, zIndex: 2,
              }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Box
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    sx={{
                      width: activeSlide === i ? 24 : 8,
                      height: 8, borderRadius: 99,
                      background: activeSlide === i ? '#f5a623' : 'rgba(255,255,255,0.5)',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                    }}
                  />
                ))}
              </Box>
            </Box>
            {/* Subtitle */}
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.72)', fontSize: { xs: '0.97rem', md: '1.08rem' },
                lineHeight: 1.8, mb: 4,
                animation: 'fadeInUp 0.7s ease 0.2s both',
              }}
            >
              Nurturing brilliance from Class 6 to 12 across{' '}
              <Box component="span" sx={{ color: '#f5a623', fontWeight: 600 }}>CBSE, ICSE, IGCSE, IB & TNBSE</Box>{' '}
              Syllabus. Empowering every student with knowledge, values, and confidence to excel.
            </Typography>

            {/* CTA Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5, animation: 'fadeInUp 0.7s ease 0.3s both' }}>
              <Button
                variant="contained" color="secondary" size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{ borderRadius: 99, px: 3.5, py: 1.5, fontWeight: 700, fontSize: '0.95rem' }}
              >
                Explore Courses
              </Button>
              <Button
                variant="outlined" size="large"
                startIcon={<PlayCircleOutlineIcon />}
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{
                  borderRadius: 99, px: 3.5, py: 1.5, fontWeight: 600,
                  color: 'white', borderColor: 'rgba(255,255,255,0.45)',
                  '&:hover': { borderColor: 'white', background: 'rgba(255,255,255,0.08)' },
                }}
              >
                Learn More
              </Button>
            </Box>

            {/* Stats Grid */}
            <Grid container spacing={1.5} sx={{ animation: 'fadeInUp 0.7s ease 0.4s both' }}>
              {STATS.map((stat, i) => (
                <Grid item xs={6} key={stat.label}>
                  <Box
                    sx={{
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 3, p: { xs: 1.5, sm: 2 },
                      display: 'flex', alignItems: 'center', gap: 1.5,
                      backdropFilter: 'blur(8px)',
                      transition: 'all 0.3s ease',
                      '&:hover': { background: 'rgba(255,255,255,0.12)', transform: 'translateY(-2px)' },
                    }}
                  >
                    <Box sx={{ fontSize: { xs: '1.4rem', sm: '1.7rem' } }}>{stat.emoji}</Box>
                    <Box>
                      <Typography sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '1.2rem', sm: '1.5rem' }, fontFamily: '"Playfair Display",serif', lineHeight: 1 }}>
                        {stat.value}{stat.suffix}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.58)', fontSize: { xs: '0.68rem', sm: '0.73rem' }, mt: 0.3 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Visual Card — hidden on mobile */}
          {!isMobile && (
            <Grid item md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ position: 'relative', width: '100%', maxWidth: 420 }}>
                {/* Back cards */}
                <Box sx={{ position: 'absolute', top: 18, left: 18, right: -18, bottom: -18, background: 'rgba(192,57,43,0.12)', border: '1px solid rgba(192,57,43,0.22)', borderRadius: 5, zIndex: 0 }} />
                <Box sx={{ position: 'absolute', top: 30, left: 30, right: -30, bottom: -30, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 5, zIndex: 0 }} />
                {/* Main card */}
                <Box
                  sx={{
                    position: 'relative', zIndex: 1,
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    borderRadius: 5, p: 4,
                  }}
                >
                  {/* Card header — exact original logo */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      component="img"
                      src="/logo.png"
                      alt="Suvin's Academy Logo"
                      sx={{
                        width: 64, height: 64,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        flexShrink: 0,
                        border: '2px solid rgba(255,255,255,0.25)',
                        outline: '2.5px solid #F5A623',
                        outlineOffset: '3px',
                        boxShadow: '0 0 14px rgba(245,166,35,0.5), 0 6px 20px rgba(0,0,0,0.4)',
                      }}
                    />
                    <Box>
                      <Typography sx={{ color: 'white', fontWeight: 700, fontFamily: '"Playfair Display",serif', fontSize: '1rem' }}>Suvin's Academy</Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.72rem', letterSpacing: 1.5, textTransform: 'uppercase' }}>Multi-Syllabus Institution</Typography>
                    </Box>
                  </Box>
                  {/* Syllabus chips */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {Syllabus.map((s, i) => (
                      <Chip
                        key={s.id} label={s.name} size="small"
                        sx={{
                          background: i === activeSyllabus ? s.color : 'rgba(255,255,255,0.1)',
                          color: 'white', fontWeight: 700, fontSize: '0.72rem',
                          border: `1.5px solid ${i === activeSyllabus ? s.color : 'rgba(255,255,255,0.2)'}`,
                          transition: 'all 0.4s ease',
                          transform: i === activeSyllabus ? 'scale(1.08)' : 'scale(1)',
                        }}
                      />
                    ))}
                  </Box>
                  {/* Subject grid */}
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                    {SUBJECTS.map((s) => (
                      <Box key={s.id} sx={{ display: 'flex', alignItems: 'center', gap: 1, background: 'rgba(255,255,255,0.06)', borderRadius: 2, p: '8px 12px' }}>
                        <Box sx={{ fontSize: '1rem' }}>{s.emoji}</Box>
                        <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 500 }}>{s.name}</Typography>
                      </Box>
                    ))}
                  </Box>
                  {/* Bottom badge */}
                  <Box sx={{ mt: 3, background: 'rgba(192,57,43,0.2)', borderRadius: 2, p: '10px 14px', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <EmojiEventsIcon sx={{ color: '#f5a623', fontSize: 20 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.78rem', fontWeight: 600 }}>
                      100% Board Pass Rate · 100+ Students
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>

      {/* Bottom wave */}
      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: '100%', height: 60 }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f4f6fb" />
        </svg>
      </Box>
    </Box>
  );
}
