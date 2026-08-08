import React from 'react';
import { Typography, Container, Box, TextField, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  return (
    <Container maxWidth="md">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Typography variant="h1" align="center" gutterBottom sx={{ mt: 4 }}>
          Let's <span className="text-gradient-primary">Connect</span>
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 8 }}>
          Have a project in mind? We'd love to hear about it.
        </Typography>
        
        <Paper elevation={0} className="glass" sx={{ p: { xs: 4, md: 6 }, borderRadius: 4 }}>
          <form noValidate autoComplete="off">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="First Name" 
                  variant="outlined" 
                  sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(0,0,0,0.2)' } } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Last Name" 
                  variant="outlined" 
                  sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(0,0,0,0.2)' } } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  fullWidth 
                  label="Email Address" 
                  variant="outlined" 
                  type="email"
                  sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(0,0,0,0.2)' } } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  fullWidth 
                  label="Message" 
                  variant="outlined" 
                  multiline
                  rows={6}
                  sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(0,0,0,0.2)' } } }}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                <Button variant="contained" size="large" endIcon={<SendIcon />} sx={{ px: 6 }}>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Contact;
