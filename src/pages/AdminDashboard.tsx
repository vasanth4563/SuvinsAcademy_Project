import React, { useState, useEffect } from 'react';
import {
  Box, Container, Typography, TextField, Button, Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Alert, CircularProgress
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Url } from '../config/api';

type Enquiry = {
  id: number;
  full_name: string;
  mobile_number: string;
  school_name: string;
  class_name: string;
  standard: string;
  submitted_at: string;
};

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      setError('');
      fetchEnquiries();
    } else {
      setError('Invalid username or password');
    }
  };

  const [dashboardError, setDashboardError] = useState('');

  const fetchEnquiries = async () => {
    setLoading(true);
    setDashboardError('');
    try {
      // Add a timeout to prevent infinite loading
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      const res = await fetch(Url.enquiry, { signal: controller.signal });
      clearTimeout(timeoutId);
      
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data);
      } else {
        const errText = await res.text();
        setDashboardError(`Server Error: ${res.status} - ${errText}`);
      }
    } catch (err: any) {
      console.error("Failed to fetch enquiries", err);
      setDashboardError(`Failed to fetch: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f4f6fb' }}>
        <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 400, borderRadius: 3, textAlign: 'center' }}>
          <Box
            component="img"
            src="/logo.png"
            alt="Suvin's Academy Logo"
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              objectFit: 'cover',
              mb: 2,
              border: '2px solid rgba(25, 43, 92, 0.2)',
              outline: '3px solid #F5A623',
              outlineOffset: '2px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'primary.main' }}>
            Admin Login
          </Typography>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth label="Username" margin="normal"
              value={username} onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              fullWidth label="Password" type="password" margin="normal"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <Button fullWidth type="submit" variant="contained" size="large" sx={{ mt: 3, py: 1.5 }}>
              Login to Dashboard
            </Button>
            <Button
              fullWidth
              variant="text"
              color="inherit"
              onClick={() => window.location.href = '/'}
              sx={{ mt: 2, color: 'text.secondary', fontWeight: 600 }}
            >
              Back to Profile
            </Button>
          </form>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f6fb', py: 5 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Admission Enquiries
          </Typography>
          <Button variant="outlined" color="primary" onClick={() => setIsLoggedIn(false)}>
            Logout
          </Button>
        </Box>

        <Paper elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', border: '1px solid #e0e0e0' }}>
          {dashboardError && (
            <Alert severity="error" sx={{ m: 2 }}>{dashboardError}</Alert>
          )}
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TableContainer>
              <Table>
                <TableHead sx={{ bgcolor: 'primary.main' }}>
                  <TableRow>
                    <TableCell sx={{ color: 'white', fontWeight: 700 }}>ID</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 700 }}>Date</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 700 }}>Name</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 700 }}>Mobile</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 700 }}>School</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 700 }}>Class</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 700 }}>Standard</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {enquiries.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} align="center" sx={{ py: 3 }}>
                        No enquiries found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    enquiries.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{new Date(row.submitted_at).toLocaleDateString()}</TableCell>
                        <TableCell sx={{ fontWeight: 600 }}>{row.full_name}</TableCell>
                        <TableCell>{row.mobile_number}</TableCell>
                        <TableCell>{row.school_name}</TableCell>
                        <TableCell>{row.class_name}</TableCell>
                        <TableCell>{row.standard}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </Container>
    </Box>
  );
}
