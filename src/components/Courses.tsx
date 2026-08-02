import React, { useState, useEffect, useRef } from 'react';
import {
  Box, Container, Typography, Tabs, Tab, Grid,
  Accordion, AccordionSummary, AccordionDetails, Paper,
  useTheme, useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Syllabus, SUBJECTS_LOWER, SUBJECTS_UPPER, GRADES } from '../data/academyData';

export default function Courses() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState<number | false>(false);
  const syllabus = Syllabus[activeTab];

  return (
    <Box id="courses" sx={{ py: { xs: 9, md: 13 }, background: '#f4f6fb' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(192,57,43,0.08)', border: '1.5px solid rgba(192,57,43,0.2)', borderRadius: 99, px: 2, py: 0.8, mb: 2 }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#c0392b' }} />
            <Typography sx={{ color: '#c0392b', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
              Courses & Syllabus
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.6rem' }, color: 'primary.main', mb: 1.5 }}>
            Classes 6–12 Across <Box component="span" sx={{ color: 'secondary.main' }}>5 Syllabus</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: { xs: '0.9rem', md: '1rem' }, maxWidth: 580, mx: 'auto', lineHeight: 1.75 }}>
            Select your board to explore subjects taught for every class, from Middle School to Senior Secondary.
          </Typography>
        </Box>

        {/* Syllabus Tabs */}
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={activeTab}
            onChange={(_, v) => { setActiveTab(v); setExpanded(false); }}
            variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile
            TabIndicatorProps={{ style: { display: 'none' } }}
            sx={{
              background: 'white', borderRadius: 99,
              border: '1.5px solid #e8ecf5', p: 0.7,
              boxShadow: '0 4px 16px rgba(25,43,92,0.06)', minHeight: 'auto',
              '& .MuiTabs-flexContainer': { gap: 0.5 },
            }}
          >
            {Syllabus.map((s) => (
              <Tab
                key={s.id} label={s.name}
                sx={{
                  borderRadius: 99, px: { xs: 1.5, sm: 2.5 }, py: 1,
                  minHeight: 'auto', fontSize: { xs: '0.78rem', sm: '0.88rem' },
                  color: 'text.secondary', fontWeight: 600, transition: 'all 0.3s ease',
                  '&.Mui-selected': { color: 'white', background: syllabus.color, boxShadow: '0 4px 14px rgba(0,0,0,0.2)' },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Syllabus Info Banner */}
        <Paper elevation={0} sx={{
          background: `linear-gradient(135deg, ${syllabus.color} 0%, ${syllabus.color}cc 100%)`,
          borderRadius: 4, p: { xs: 2.5, md: 3.5 }, mb: 4,
          display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 2.5, flexDirection: { xs: 'column', sm: 'row' },
          position: 'relative', overflow: 'hidden',
        }}>
          <Box sx={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
          <Box sx={{ background: 'rgba(255,255,255,0.2)', borderRadius: 99, px: 2, py: 0.6, flexShrink: 0 }}>
            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.78rem', letterSpacing: 1.5, textTransform: 'uppercase' }}>
              {syllabus.name}
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '0.92rem', md: '1rem' }, mb: 0.5 }}>
              {syllabus.fullName}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.82)', fontSize: { xs: '0.8rem', md: '0.87rem' }, lineHeight: 1.65 }}>
              {syllabus.desc}
            </Typography>
          </Box>
        </Paper>

        {/* Classes Accordion */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {GRADES.map((grade, i) => {
            const isOpen = expanded === i;
            const label = grade <= 8 ? 'Middle School' : grade <= 10 ? 'Secondary' : 'Senior Secondary';
            // 6–9 → Science & Social Studies; 10–12 → Physics, Chemistry, Biology
            const subjectList = grade <= 9 ? SUBJECTS_LOWER : SUBJECTS_UPPER;
            return (
              <Accordion
                key={grade} expanded={isOpen}
                onChange={() => setExpanded(isOpen ? false : i)}
                elevation={0}
                sx={{
                  border: `1.5px solid ${isOpen ? syllabus.color : '#e8ecf5'}`,
                  borderRadius: '14px !important', background: 'white',
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? '0 8px 28px rgba(25,43,92,0.1)' : 'none',
                  overflow: 'hidden',
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Box sx={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: isOpen ? syllabus.color : '#f4f6fb',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease', flexShrink: 0,
                    }}>
                      <ExpandMoreIcon sx={{ color: isOpen ? 'white' : 'text.secondary', fontSize: '1.1rem', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />
                    </Box>
                  }
                  sx={{ px: { xs: 2, md: 3 }, py: 1.5, minHeight: 'auto' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{
                      width: 46, height: 46, borderRadius: 2.5, flexShrink: 0,
                      background: isOpen
                        ? `linear-gradient(135deg, ${syllabus.color}, ${syllabus.color}bb)`
                        : 'linear-gradient(135deg, #192b5c, #243d7a)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease',
                    }}>
                      <Typography sx={{ color: 'white', fontWeight: 800, fontSize: '0.88rem' }}>
                        {grade}th
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: 'primary.main', fontSize: { xs: '0.9rem', md: '0.97rem' } }}>
                        Class {grade}
                      </Typography>
                      <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary', mt: 0.3 }}>
                        {label} · {subjectList.length} Subjects
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>

                <AccordionDetails sx={{ px: { xs: 2, md: 3 }, pb: 2.5, pt: 0 }}>
                  {/* ── Equal-height equal-width subject cards ── */}
                  <Grid container spacing={1.5} alignItems="stretch">
                    {subjectList.map((sub) => (
                      <Grid
                        item xs={6} sm={4} md={3} key={sub.id}
                        sx={{ display: 'flex' }}
                      >
                        <Box
                          sx={{
                            display: 'flex', alignItems: 'center', gap: 1.2,
                            p: { xs: '10px 12px', md: '14px 16px' },
                            borderRadius: 2.5,
                            border: `1.5px solid ${sub.bg}`,
                            background: sub.bg,
                            width: '100%',               /* fill grid cell */
                            minHeight: 64,               /* uniform height */
                            transition: 'all 0.25s ease',
                            cursor: 'default',
                            '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' },
                          }}
                        >
                          <Box sx={{
                            width: 38, height: 38, borderRadius: 2,
                            background: sub.color, display: 'flex', alignItems: 'center',
                            justifyContent: 'center', fontSize: '1rem', flexShrink: 0,
                            boxShadow: `0 3px 10px ${sub.color}55`,
                          }}>
                            {sub.emoji}
                          </Box>
                          <Typography sx={{ fontSize: { xs: '0.76rem', md: '0.82rem' }, fontWeight: 700, color: sub.color, lineHeight: 1.2 }}>
                            {sub.name}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
