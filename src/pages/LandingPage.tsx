import React, { useEffect } from 'react';
import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Scroll reveal observer
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function ScrollToTop() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 400 });
  return (
    <Zoom in={trigger}>
      <Box
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{ position: 'fixed', bottom: { xs: 20, md: 30 }, right: { xs: 16, md: 28 }, zIndex: 999 }}
      >
        <Fab
          size="medium"
          sx={{
            background: 'linear-gradient(135deg,#c0392b,#96281b)',
            color: 'white',
            boxShadow: '0 6px 24px rgba(192,57,43,0.5)',
            '&:hover': { background: '#96281b', transform: 'translateY(-2px)' },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}

export default function LandingPage() {
  useScrollReveal();

  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </Box>
  );
}
