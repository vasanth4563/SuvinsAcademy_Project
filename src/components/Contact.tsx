import React, { useState } from 'react';
import {
  Box, Container, Typography, Grid, Paper, TextField,
  MenuItem, Button, Snackbar, Alert, CircularProgress,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { Url } from '../config/api';

const INFO = [
  { icon: <LocationOnIcon />, label: 'Address',       value: '42, Knowledge Street, Anna Nagar\nChennai – 600 040, Tamil Nadu' },
  { icon: <PhoneIcon />,      label: 'Phone',          value: '+91 44 2345 6789\n+91 98765 43210' },
  { icon: <EmailIcon />,      label: 'Email',           value: 'info@suvinsacademy.edu.in\nadmissions@suvinsacademy.edu.in' },
  { icon: <AccessTimeIcon />, label: 'Working Hours',  value: 'Mon – Sat: 5:00 PM – 8:00 PM\nSunday: Closed' },
];

const EMPTY = { full_name: '', mobile_number: '', school_name: '', class_name: '', standard: '' };

export default function Contact() {
  const [form, setForm]       = useState(EMPTY);
  const [errors, setErrors]   = useState<Partial<typeof EMPTY>>({});
  const [loading, setLoading] = useState(false);
  const [snack, setSnack]     = useState<{ open: boolean; msg: string; severity: 'success' | 'error' }>({
    open: false, msg: '', severity: 'success',
  });

  // ── Validation ────────────────────────────────────────────────────────────
  const validate = () => {
    const e: Partial<typeof EMPTY> = {};
    if (!form.full_name.trim())                              e.full_name     = 'Full name is required';
    if (!form.mobile_number.trim())                          e.mobile_number = 'Mobile number is required';
    else if (!/^\d{10,13}$/.test(form.mobile_number.trim())) e.mobile_number = 'Enter a valid 10-digit mobile number';
    if (!form.school_name.trim())                            e.school_name   = 'School name is required';
    if (!form.class_name)                                    e.class_name    = 'Please select a class';
    if (!form.standard.trim())                               e.standard      = 'Standard is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch(Url.enquiry, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || 'Submission failed');
      }

      const data = await res.json();
      setSnack({ open: true, msg: data.message, severity: 'success' });
      setForm(EMPTY);
      setErrors({});
    } catch (err: any) {
      setSnack({ open: true, msg: err.message || 'Something went wrong. Please try again.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const field = (key: keyof typeof EMPTY) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm({ ...form, [key]: e.target.value }),
    error: !!errors[key],
    helperText: errors[key] || '',
    sx: { background: 'white', borderRadius: 2 },
  });

  return (
    <Box id="contact" sx={{ py: { xs: 9, md: 13 }, background: 'white' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, background: 'rgba(192,57,43,0.08)', border: '1.5px solid rgba(192,57,43,0.2)', borderRadius: 99, px: 2, py: 0.8, mb: 2 }}>
            <EmailIcon sx={{ color: '#c0392b', fontSize: '0.9rem' }} />
            <Typography sx={{ color: '#c0392b', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
              Contact Us
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.6rem' }, color: 'primary.main', mb: 1.5 }}>
            Get In <Box component="span" sx={{ color: 'secondary.main' }}>Touch</Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto', lineHeight: 1.75, fontSize: { xs: '0.9rem', md: '1rem' } }}>
            Have questions about admissions? Fill in the form and our team will reach out within 24 hours.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">

          {/* Info Cards */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {INFO.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: 'flex', alignItems: 'flex-start', gap: 2,
                    p: 2.5, borderRadius: 3, border: '1.5px solid #e8ecf5',
                    background: '#f4f6fb', transition: 'all 0.3s ease',
                    '&:hover': { borderColor: '#c0392b', transform: 'translateX(4px)', background: 'white' },
                  }}
                >
                  <Box sx={{ width: 44, height: 44, flexShrink: 0, borderRadius: 2, background: 'linear-gradient(135deg, #0d1b3e, #1e3560)', display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { color: 'white', fontSize: '1.1rem' } }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: 'text.secondary', letterSpacing: 1.2, textTransform: 'uppercase', mb: 0.5 }}>{item.label}</Typography>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: 'primary.main', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Enquiry Form */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              component="form"
              onSubmit={handleSubmit}
              sx={{ p: { xs: 3, md: 5 }, borderRadius: 5, border: '1.5px solid #e8ecf5', background: '#f4f6fb', boxShadow: '0 8px 32px rgba(13,27,62,0.08)' }}
            >
              <Typography variant="h4" sx={{ color: 'primary.main', mb: 0.8, fontSize: { xs: '1.2rem', md: '1.45rem' } }}>
                Admission Enquiry
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 3.5 }}>
                All fields are required. Your details are saved securely.
              </Typography>

              <Grid container spacing={2.5}>
                {/* Full Name */}
                <Grid item xs={12} sm={6}>
                  <TextField label="Full Name" required fullWidth {...field('full_name')} />
                </Grid>

                {/* Mobile Number */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Mobile Number" required fullWidth
                    type="tel" inputProps={{ maxLength: 13 }}
                    {...field('mobile_number')}
                  />
                </Grid>

                {/* School Name */}
                <Grid item xs={12}>
                  <TextField label="School Name" required fullWidth {...field('school_name')} />
                </Grid>

                {/* Class */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    select label="Class" required fullWidth
                    value={form.class_name}
                    onChange={(e) => setForm({ ...form, class_name: e.target.value })}
                    error={!!errors.class_name}
                    helperText={errors.class_name || ''}
                    sx={{ background: 'white', borderRadius: 2 }}
                  >
                    {[6, 7, 8, 9, 10, 11, 12].map((g) => (
                      <MenuItem key={g} value={`${g}`}>Class {g}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                {/* Standard */}
                <Grid item xs={12} sm={6}>
                  <TextField label="Standard (e.g. CBSE)" required fullWidth {...field('standard')} />
                </Grid>

                {/* Submit */}
                <Grid item xs={12} sm={12} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Button
                    type="submit" variant="contained" color="secondary"
                    fullWidth size="large" endIcon={loading ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                    disabled={loading}
                    sx={{ borderRadius: 99, py: 1.75, fontWeight: 700, fontSize: '0.97rem', height: 56 }}
                  >
                    {loading ? 'Submitting…' : 'Submit Enquiry'}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={snack.open}
        autoHideDuration={5000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snack.severity} onClose={() => setSnack({ ...snack, open: false })} sx={{ fontWeight: 600 }}>
          {snack.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
