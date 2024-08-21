import React, {useState} from 'react';
import {
  Typography,
  Box,
  Container,
  Pagination,
  InputBase,
  InputAdornment,
  IconButton,
  CircularProgress,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material'; // Import necessary components from MUI

import solglyph from '../assets/SolGlyph_android.png';

const App = () => {

  return (
    <Box sx={{flexGrow: 1, mt: 3, width: '100%'}}>
      <Container maxWidth="sm">
          <Box
            component="img"
            src={solglyph}
            alt="img"
            sx={{
              width: '40px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          />

        <Typography
          sx={{
            fontSize: '18px',
            color: 'white',
            textAlign: 'center',
            py: 2,
          }}>
          {newItems.length} AIRDROPS LISTED
        </Typography>
        
      </Container>
    </Box>
  );
};

export default App;
