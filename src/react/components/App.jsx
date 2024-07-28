import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Typography, Box, Container } from '@mui/material';
import solglyph from "../assets/SolGlyph_android.png"

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const promotedItems = [
    {
      title: 'Banter Bubbles ($GUMMY)',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'Param Gaming ($PARAM)',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'Beyond Blitz ($BEYOND)',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'Grass ($GRASS)',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'Imaginary Ones ($BUBBLE)',
      description: 'Description',
      image: solglyph,
    },
  ];

  const newItems = [
    {
      title: 'Zesh ($ZESH)',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'Wizard Mana ($WIZM)',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'Clout ($CLOUT)',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'Immortal Rising 2 ($IMT)',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'DuckCoop ($DUCK)',
      description: 'Description',
      image: solglyph,
    },
  ];

  const NFTItems = [
    {
      title: 'nftperp',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'BLASTR',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'Whales Market',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'Magic Eden',
      description: 'Description',
      image: solglyph,
    },
    {
      title: 'Wild Forest',
      description: 'Description',
      image: solglyph,
    },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: '#161E2F' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                backgroundColor: '#B8B2A9',
              }
            }}
          >
            <Tab
              label="Promoted"
              sx={{ color: '#B8B2A9', '&.Mui-selected': { color: '#D4D0CA' } }}
            />
            <Tab
              label="New"
              sx={{ color: '#B8B2A9', '&.Mui-selected': { color: '#D4D0CA' } }}
            />
            <Tab
              label="NFT"
              sx={{ color: '#B8B2A9', '&.Mui-selected': { color: '#D4D0CA' } }}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Container maxWidth="md" sx={{ mt: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                borderRadius: 2,
                py: 2,
                px: 1,
                boxShadow: 3,
              }}
            >
              {promotedItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: '100%',
                    border: '1px solid #2C7484',
                    borderRadius: 2,
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#1F2937',
                  }}
                >
                  <Box>
                    <img src={item.image} alt={"img"} style={{ width: 35, height: 35, marginRight: 16 }} />
                  </Box>

                  <Box>
                    <Typography sx={{ color: '#fff' }}>{item.title}</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#D4D0CA' }}>{item.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Container maxWidth="md" sx={{ mt: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                borderRadius: 2,
                py: 2,
                px: 1,
                boxShadow: 3,
              }}
            >
              {newItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: '100%',
                    border: '1px solid #2C7484',
                    borderRadius: 2,
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#1F2937',
                  }}
                >
                  <Box>
                    <img src={item.image} alt={"img"} style={{ width: 35, height: 35, marginRight: 16 }} />
                  </Box>

                  <Box>
                    <Typography sx={{ color: '#fff' }}>{item.title}</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#D4D0CA' }}>{item.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Container maxWidth="md" sx={{ mt: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                borderRadius: 2,
                py: 2,
                px: 1,
                boxShadow: 3,
              }}
            >
              {NFTItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: '100%',
                    border: '1px solid #2C7484',
                    borderRadius: 2,
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#1F2937',
                  }}
                >
                  <Box>
                    <img src={item.image} alt={"img"} style={{ width: 35, height: 35, marginRight: 16 }} />
                  </Box>

                  <Box>
                    <Typography sx={{ color: '#fff' }}>{item.title}</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#D4D0CA' }}>{item.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </TabPanel>
      </Box>
    </>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography sx={{ color: 'white' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default App;
