import React, {useState} from 'react';
import {AppBar, Tabs, Tab, Typography, Box, Container} from '@mui/material';
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedItem(null); // Reset selected item when tab changes
  };

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

  if (selectedItem) {
    return <Details item={selectedItem} onBack={() => setSelectedItem(null)} />;
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar
        sx={{
          background: '#161E2F',
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
          variant="fullWidth"
          TabIndicatorProps={{style: {backgroundColor: '#B8B2A9'}}}>
          <Tab
            label="New"
            sx={{color: '#B8B2A9', '&.Mui-selected': {color: '#D4D0CA'}}}
          />
          <Tab
            label="Promoted"
            sx={{color: '#B8B2A9', '&.Mui-selected': {color: '#D4D0CA'}}}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography
          sx={{
            fontSize: '18px',
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            mt: 7,
            py: 2,
          }}>
          {newItems.length} airdrops listed
        </Typography>
        <ItemList items={newItems} onItemClick={handleItemClick} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ItemList items={promotedItems} onItemClick={handleItemClick} />
      </TabPanel>
    </Box>
  );
};

const ItemList = ({items, onItemClick}) => {
  return (
    <Container maxWidth="sm">
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
        {/* Check if the items array is empty */}
        {items.length === 0 ? (
          <Typography
            sx={{
              color: '#fff',
              fontSize: '15px',
              textAlign: 'center',
              mt: 2, // Add some margin for spacing
              py: 10,
            }}>
            No promoted airdrops yet, visit solglyph to promote your airdrop.
          </Typography>
        ) : (
          items.map((item, index) => (
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
          ))
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
            Visit Solglyph
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

const TabPanel = props => {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{p: 0}}>
          <Typography sx={{color: 'white'}}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default App;
