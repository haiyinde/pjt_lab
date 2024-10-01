import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{ 
        textAlign: 'center', 
        padding: '20px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f1f1f1'
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2024 온보딩. 모든 권리 보유.
      </Typography>
    </Box>
  );
};

export default Footer;
