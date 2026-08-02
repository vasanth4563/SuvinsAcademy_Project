import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Chip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { FACULTY } from '../data/academyData';

const NAVY = '#192b5c';

export default function Faculty() {
  return (
    <Box id="faculty" sx={{ py: { xs: 9, md: 13 }, background: '#f4f6fb' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(192,57,43,0.08)', border: '1.5px solid rgba(192,57,43,0.2)', borderRadius: 99, px: 2, py: 0.8, mb: 2 }}>
            <PersonIcon sx={{ color: '#c0392b', fontSize: '0.9rem' }} />
            <Typography sx={{ color: '#c0392b', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
              Our Faculty
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.6rem' }, color: 'primary.main', mb: 1.5 }}>
            Meet Our <Box component="span" sx={{ color: 'secondary.main' }}>Expert Teachers</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 540, mx: 'auto', lineHeight: 1.75, fontSize: { xs: '0.9rem', md: '1rem' } }}>
            Our faculty combines deep subject expertise with a passion for teaching — guiding every student toward academic excellence.
          </Typography>
        </Box>

        {/* ── Faculty Cards — equal size, perfectly centered ── */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',   /* center ALL cards including last lone card */
            gap: { xs: 2, md: 3 },
          }}
        >
          {FACULTY.map((f) => (
            <Box
              key={f.name}
              sx={{
                width: {
                  xs: 'calc(50% - 8px)',    /* 2 per row mobile */
                  sm: 'calc(50% - 12px)',   /* 2 per row tablet */
                  md: 'calc(33.33% - 16px)', /* 3 per row desktop */
                },
                display: 'flex',
              }}
            >
              <Paper elevation={0} sx={{
                p: { xs: 2, md: 3 }, borderRadius: 4,
                border: '1.5px solid #e8ecf5',
                background: 'white',
                position: 'relative', overflow: 'hidden',
                width: '100%',
                height: { xs: 250, sm: 240, md: 260 },
                display: 'flex', flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 16px 48px rgba(25,43,92,0.14)`,
                  borderColor: NAVY,
                },
                '&::before': {
                  content: '""', position: 'absolute',
                  top: 0, left: 0, right: 0, height: '4px',
                  background: `linear-gradient(90deg, ${NAVY}, #c0392b)`,
                },
              }}>
                {/* Avatar — centered */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{
                    width: 60, height: 60,
                    background: `linear-gradient(135deg, ${f.color}, ${f.color}bb)`,
                    fontFamily: '"Playfair Display",serif',
                    fontSize: '1.2rem', fontWeight: 700,
                    boxShadow: `0 6px 20px ${f.color}55`,
                    mb: 1.2,
                  }}>
                    {f.initials}
                  </Avatar>
                  <Typography sx={{ fontWeight: 700, color: 'primary.main', fontSize: { xs: '0.88rem', md: '0.97rem' }, lineHeight: 1.25 }}>
                    {f.name}
                  </Typography>
                  <Typography sx={{ color: 'secondary.main', fontSize: '0.73rem', fontWeight: 600, mt: 0.3 }}>
                    {f.role}
                  </Typography>
                </Box>

                {/* Qual & Exp */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.6, mb: 2, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
                    <WorkspacePremiumIcon sx={{ color: '#f5a623', fontSize: '0.95rem', mt: '2px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.76rem', color: 'text.secondary', textAlign: 'center' }}>{f.qual}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.74rem', color: 'text.secondary' }}>
                    Experience: <strong style={{ color: NAVY }}>{f.exp}</strong>
                  </Typography>
                </Box>

                {/* Subject chips — centered at bottom */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 'auto', justifyContent: 'center' }}>
                  {f.subjects.map((s) => (
                    <Chip key={s} label={s} size="small"
                      sx={{
                        background: `rgba(25,43,92,0.07)`, color: NAVY,
                        fontWeight: 600, fontSize: '0.68rem', borderRadius: 99,
                        border: `1px solid rgba(25,43,92,0.12)`,
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Bottom banner */}
        <Paper elevation={0} sx={{
          mt: 5, p: { xs: 3, md: 4 }, borderRadius: 4,
          background: `linear-gradient(135deg, ${NAVY} 0%, #243d7a 100%)`,
          display: 'flex', alignItems: 'center', gap: 3,
          flexDirection: { xs: 'column', sm: 'row' },
          textAlign: { xs: 'center', sm: 'left' },
        }}>
          <Box sx={{ fontSize: '3rem', flexShrink: 0 }}>👨‍🏫</Box>
          <Box>
            <Typography sx={{ color: 'white', fontWeight: 700, fontFamily: '"Playfair Display",serif', fontSize: { xs: '1.1rem', md: '1.3rem' }, mb: 0.5 }}>
              10+ Expert Faculty Members
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '0.82rem', md: '0.88rem' }, lineHeight: 1.7 }}>
              Each teacher at Suvin's Academy is carefully selected, regularly trained, and deeply committed to every student's success across all Syllabus.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
