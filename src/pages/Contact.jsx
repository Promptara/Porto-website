import React, { useState } from 'react';
import { Typography, Container, Box, TextField, Button, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const services = ['Web Development', 'Mobile App', 'UI/UX Design', 'Branding', 'Digital Product'];
const budgets = ['< $5k', '$5k - $10k', '$10k - $25k', '$25k+'];

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMessage('Please fill in your name and email address.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <Container maxWidth="md" sx={{ pt: 10, pb: 20 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h1" gutterBottom sx={{ color: '#1D1D1F', mb: 8, lineHeight: 1.1 }}>
          got a project <br />
          in mind? <br />
          <span style={{ color: '#00E5FF' }}>let's talk!</span>
        </Typography>

        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <Box 
              sx={{ 
                mt: 6, 
                p: 6, 
                borderRadius: '30px', 
                backgroundColor: '#f5f5f7', 
                border: '1px solid #00E5FF',
                textAlign: 'center' 
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 64, color: '#00E5FF', mb: 2 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#1D1D1F' }}>
                Message Sent Successfully!
              </Typography>
              <Typography variant="body1" sx={{ color: '#86868b', fontSize: '1.2rem', mb: 4 }}>
                Thank you, {name}. We will review your request for {selectedServices.join(', ') || 'your project'} and get back to you within 24 hours.
              </Typography>
              <Button 
                variant="outlined" 
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                  setSelectedServices([]);
                  setSelectedBudget('');
                }}
                sx={{ borderRadius: '100px', px: 4, py: 1.5, borderColor: '#1D1D1F', color: '#1D1D1F' }}
              >
                Send Another Request
              </Button>
            </Box>
          </motion.div>
        ) : (
          <Box sx={{ mt: 10 }}>
            {errorMessage && (
              <Alert severity="error" sx={{ mb: 4, borderRadius: '16px' }}>
                {errorMessage}
              </Alert>
            )}
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                
                {/* Services Selector */}
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>I'm interested in...</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {services.map((service) => (
                      <Box 
                        key={service}
                        className="hover-target"
                        onClick={() => toggleService(service)}
                        sx={{ 
                          border: selectedServices.includes(service) ? '2px solid #00E5FF' : '1px solid #d2d2d7',
                          borderRadius: '100px',
                          px: 3, py: 1.5,
                          cursor: 'pointer',
                          color: selectedServices.includes(service) ? '#00E5FF' : '#1D1D1F',
                          fontWeight: 600,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderColor: '#00E5FF'
                          }
                        }}
                      >
                        {service}
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Input Fields */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
                  <TextField 
                    fullWidth 
                    required
                    placeholder="Your Name *" 
                    variant="standard" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ '& .MuiInputBase-root': { fontSize: '1.5rem', py: 1 } }}
                  />
                  <TextField 
                    fullWidth 
                    required
                    placeholder="Your Email *" 
                    variant="standard" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ '& .MuiInputBase-root': { fontSize: '1.5rem', py: 1 } }}
                  />
                </Box>

                <TextField 
                  fullWidth 
                  placeholder="Tell us about your project..." 
                  variant="standard" 
                  multiline
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  sx={{ '& .MuiInputBase-root': { fontSize: '1.5rem', py: 1 } }}
                />

                {/* Budget Selector */}
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>Project Budget</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {budgets.map((budget) => (
                      <Box 
                        key={budget}
                        className="hover-target"
                        onClick={() => setSelectedBudget(budget)}
                        sx={{ 
                          border: selectedBudget === budget ? '2px solid #00E5FF' : '1px solid #d2d2d7',
                          borderRadius: '100px',
                          px: 3, py: 1.5,
                          cursor: 'pointer',
                          color: selectedBudget === budget ? '#00E5FF' : '#1D1D1F',
                          fontWeight: 600,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            borderColor: '#00E5FF'
                          }
                        }}
                      >
                        {budget}
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Button 
                    type="submit" 
                    className="hover-target" 
                    variant="contained" 
                    size="large" 
                    endIcon={<SendIcon />} 
                    sx={{ px: 6, py: 2, fontSize: '1.2rem', borderRadius: '100px', backgroundColor: '#1D1D1F', '&:hover': { backgroundColor: '#00E5FF', color: '#1D1D1F' } }}
                  >
                    Submit Request
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        )}
      </motion.div>
    </Container>
  );
};

export default Contact;
