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

import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon from MUI icons

import solglyph from '../assets/SolGlyph_android.png';
import clout from '../assets/clout_logo.png';
import nx from '../assets/nx_logo.png';
import socrates from '../assets/socrates_logo.png';
import grass from '../assets/grass_logo.png';

import Details from './Details'; // Import the Details component
import airdropData from '../assets/airdropData.json'; // Import the JSON file

const App = () => {
  const [value, setValue] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  // Add state for search query
  const [searchQuery, setSearchQuery] = useState('');

  const [page, setPage] = useState(1);
  const itemsPerPage = 10; // Set the number of items per page

  // Mapping title to corresponding logo
  const getLogo = title => {
    switch (title) {
      case 'NX Finance':
        return nx;
      case 'Grass':
        return grass;
      case 'Socrates GPT':
        return socrates;
      case 'Clout':
        return clout;
      default:
        return solglyph;
    }
  };

  // Use data from the JSON file
  const newItems = airdropData.newData.map(item => ({
    ...item,
    image: getLogo(item.title), // Assign the correct image
  }));

  const promotedItems = airdropData.promotedData.map(item => ({
    ...item,
    image: getLogo(item.title), // Assign the correct image
  }));

  const handleItemClick = item => {
    setSelectedItem(item);
  };

  // Function to handle search query changes
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  if (selectedItem) {
    return <Details item={selectedItem} onBack={() => setSelectedItem(null)} />;
  }

  return (
    <Box sx={{flexGrow: 1, mt: 3, width: '100%'}}>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 1,
            mx: -1,
          }}>
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

          {/* Search Bar */}
          <InputBase
            sx={{
              flexGrow: 1,
              ml: 2, //
              color: '#4E5861',
              backgroundColor: '#0D1B2A',
              borderRadius: '4px',
              padding: '4px 8px',
              fontSize: '14px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
            }}
            placeholder="Search for airdrop"
            inputProps={{'aria-label': 'search'}}
            value={searchQuery}
            onChange={handleSearchChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  sx={{p: '8px', color: '#46ACC2'}}
                  aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>

        <Typography
          sx={{
            fontSize: '18px',
            color: 'white',
            textAlign: 'center',
            py: 2,
          }}>
          {newItems.length} AIRDROPS LISTED
        </Typography>
        <ItemList
          items={newItems}
          onItemClick={handleItemClick}
          page={page}
          setPage={setPage}
          itemsPerPage={itemsPerPage}
        />
      </Container>
    </Box>
  );
};

const ItemList = ({items, onItemClick, page, setPage, itemsPerPage}) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        borderRadius: 2,
        pt: 1,
        px: 1,
        boxShadow: 3,
      }}>
      {paginatedItems.map((item, index) => (
        <Box
          key={index}
          onClick={() => onItemClick(item)}
          sx={{
            width: '100%',
            border: '1px solid #2C7484',
            borderRadius: 2,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#1F2937',
            cursor: 'pointer',
          }}>
          <Box>
            <img
              src={item.image}
              alt="img"
              style={{
                width: 40,
                height: 40,
                marginRight: 16,
                borderRadius: '50%', // Corrected borderRadius
                objectFit: 'cover', // Ensures the image covers the circle
              }}
            />
          </Box>
          <Box>
            <Typography sx={{color: '#fff'}}>{item.title}</Typography>
            <Typography
              sx={{
                fontSize: '12px',
                color: '#D4D0CA',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                width: '230px',
              }}>
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
      {items.length > itemsPerPage && (
        <Pagination
          count={Math.ceil(items.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="standard"
          sx={{
            mt: 2,
            mb: 1,
            '& .MuiPaginationItem-root': {
              color: '#fff',
            },
            '& .Mui-selected': {
              color: '#46ACC2',
            },
          }}
        />
      )}
      <Box
        onClick={() => window.open('https://solglyph.com', '_blank')}
        sx={{
          width: '100%',
          border: '1px solid #2C7484',
          borderRadius: 2,
          px: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          minHeight: '48px',
          mt: 2,
          mb: 2,
          background: 'linear-gradient(45deg, #40D7AC, #58E3D0, #6969E0)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 15px rgba(70, 172, 194, 0.5)',
          },
        }}>
        <Typography
          sx={{
            fontSize: '18px',
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          VISIT SOLGLYPH
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
