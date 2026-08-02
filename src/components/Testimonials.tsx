import React, { useState, useEffect, useRef } from 'react';
import {
  Box, Container, Typography, Paper, Avatar, Rating,
  IconButton, useTheme, useMediaQuery,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { TESTIMONIALS } from '../data/academyData';

export default function Testimonials() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleCount = isMobile ? 1 : isTablet ? 2 : 3;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((p) => (p + 1) % TESTIMONIALS.length);
    }, 4000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prev = () => { setIndex((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); startTimer(); };
  const next = () => { setIndex((p) => (p + 1) % TESTIMONIALS.length); startTimer(); };

  const visible = Array.from({ length: visibleCount }, (_, i) =>
    TESTIMONIALS[(index + i) % TESTIMONIALS.length]
  );

  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 9, md: 13 },
        background: 'linear-gradient(135deg, #060e22 0%, #0d1b3e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorations */}
      <Box sx={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, background: 'rgba(192,57,43,0.12)', borderRadius: '50%' }} />
      <Box sx={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, background: 'rgba(245,166,35,0.08)', borderRadius: '50%' }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.2)', borderRadius: 99, px: 2, py: 0.8, mb: 2 }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#e74c3c' }} />
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
              Testimonials
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.6rem' }, color: 'white', mb: 1.5 }}>
            What Our <Box component="span" sx={{ color: '#e74c3c' }}>Community</Box> Says
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.65)', maxWidth: 500, mx: 'auto', fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.75 }}>
            Real stories from students and parents who have experienced the Suvin's Academy difference.
          </Typography>
        </Box>

        {/* Cards */}
        <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${visibleCount}, 1fr)`, gap: 2.5, mb: 5 }}>
          {visible.map((t, i) => (
            <Paper
              key={`${t.name}-${i}`}
              elevation={0}
              sx={{
                background: 'rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 4, p: { xs: 3, md: 3.5 },
                transition: 'all 0.4s ease',
                '&:hover': { background: 'rgba(255,255,255,0.12)', transform: 'translateY(-4px)' },
              }}
            >
              {/* Quote icon */}
              <FormatQuoteIcon sx={{ color: '#c0392b', fontSize: '2.2rem', mb: 1, opacity: 0.8 }} />

              {/* Rating */}
              <Rating value={t.rating} readOnly size="small" sx={{ mb: 2, '& .MuiRating-iconFilled': { color: '#f5a623' } }} />

              {/* Text */}
              <Typography sx={{ color: 'rgba(255,255,255,0.82)', fontSize: { xs: '0.84rem', md: '0.88rem' }, lineHeight: 1.8, fontStyle: 'italic', mb: 3 }}>
                "{t.text}"
              </Typography>

              {/* Author */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Avatar
                  sx={{
                    width: 44, height: 44, background: t.color,
                    fontFamily: '"Playfair Display",serif', fontSize: '0.9rem', fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </Avatar>
                <Box>
                  <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.2 }}>
                    {t.name}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.52)', fontSize: '0.72rem', mt: 0.3 }}>
                    {t.role}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
          <IconButton
            onClick={prev}
            sx={{
              background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.2)',
              color: 'white', transition: 'all 0.3s ease',
              '&:hover': { background: '#c0392b', borderColor: '#c0392b' },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          {/* Dots */}
          <Box sx={{ display: 'flex', gap: 0.8 }}>
            {TESTIMONIALS.map((_, i) => (
              <Box
                key={i}
                onClick={() => { setIndex(i); startTimer(); }}
                sx={{
                  width: i === index ? 22 : 8, height: 8,
                  borderRadius: 99, cursor: 'pointer',
                  background: i === index ? '#c0392b' : 'rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={next}
            sx={{
              background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.2)',
              color: 'white', transition: 'all 0.3s ease',
              '&:hover': { background: '#c0392b', borderColor: '#c0392b' },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
