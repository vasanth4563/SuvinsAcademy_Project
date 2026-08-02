import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { STATS } from '../data/academyData';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const NAVY = '#192b5c';

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(target / (1800 / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const CAT_COLOR: Record<string, string> = {
  Academic: '#192b5c', Rank: '#c0392b', Olympiad: '#00695c', Sports: '#d84315', Cultural: '#7b1fa2',
};

export default function Achievements() {
  return (
    <Box id="achievements" sx={{ py: { xs: 9, md: 13 }, background: 'white' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(192,57,43,0.08)', border: '1.5px solid rgba(192,57,43,0.2)', borderRadius: 99, px: 2, py: 0.8, mb: 2 }}>
            <EmojiEventsIcon sx={{ color: '#c0392b', fontSize: '0.9rem' }} />
            <Typography sx={{ color: '#c0392b', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
              Our Achievements
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.6rem' }, color: 'primary.main', mb: 1.5 }}>
            A Legacy of <Box component="span" sx={{ color: 'secondary.main' }}>Excellence</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto', lineHeight: 1.75, fontSize: { xs: '0.9rem', md: '1rem' } }}>
            2+ years of academic achievements, national recognitions, and proud students who have gone on to shape the nation.
          </Typography>
        </Box>

        {/* ── Counter Cards — fixed equal size, centered ── */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 2, md: 2.5 },
            mb: 8,
          }}
        >
          {STATS.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                width: {
                  xs: 'calc(50% - 8px)',     /* 2 per row on mobile */
                  md: 'calc(25% - 15px)',    /* 4 per row on desktop */
                },
                display: 'flex',
              }}
            >
              <Paper elevation={0} sx={{
                background: `linear-gradient(135deg, ${NAVY} 0%, #243d7a 100%)`,
                borderRadius: 4,
                width: '100%',
                height: { xs: 155, md: 175 },   /* fixed equal height */
                textAlign: 'center', position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 20px 50px rgba(25,43,92,0.3)' },
              }}>
                <Box sx={{ position: 'absolute', top: -15, right: -15, width: 70, height: 70, background: 'rgba(192,57,43,0.25)', borderRadius: '50%' }} />
                <Box sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 1, position: 'relative', zIndex: 1 }}>{stat.emoji}</Box>
                <Typography sx={{
                  fontFamily: '"Playfair Display",serif', fontWeight: 800,
                  fontSize: { xs: '1.8rem', md: '2.4rem' }, color: 'white', lineHeight: 1, position: 'relative', zIndex: 1,
                }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: { xs: '0.7rem', md: '0.8rem' }, mt: 1, letterSpacing: 0.5, position: 'relative', zIndex: 1 }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>




      </Container>
    </Box>
  );
}
