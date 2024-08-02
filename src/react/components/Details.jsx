import React from 'react';
import {Box, Typography, Container, IconButton} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import {FaDiscord, FaReddit} from 'react-icons/fa';
import ClearIcon from '@mui/icons-material/Clear';

const Details = ({item, onBack}) => {
  // Split the description into lines
  const descriptionLines = item.description.split('\n');

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 2,
        mb: 2,
        p: 1,
        maxHeight: '90vh', // Limit the container's height to 93% of the viewport
        boxShadow: 3,
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          px: 1,
          py: 2,
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end', // Aligns the IconButton to the right
            position: 'absolute', // Positions the IconButton within the container
            right: 8, // Right margin
            top: 14, // Top margin
            zIndex: 1, // Ensures the button is above other content
          }}>
          <IconButton
            onClick={onBack}
            sx={{
              color: '#46aCC2', // Icon color
              transition: 'transform 0.2s ease', // Transition for smooth scaling and shadow
              '&:hover': {
                transform: 'scale(1.1)', // Scale up on hover
                textShadow: 'rgba(70, 172, 194, 0.6)', // Glowing effect
              },
            }}>
            <ClearIcon sx={{fontSize: '32px'}} /> {/* Increase icon size */}
          </IconButton>
        </Box>
        <Box sx={{alignSelf: 'center', my: 2}}>
          <img src={item.image} alt="img" style={{width: '100px'}} />
        </Box>
        <Typography variant="h4" sx={{color: '#fff', fontWeight: 'bold'}}>
          {item.title}
        </Typography>
        {/* Social Media Icons with Hover Animation */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2, // Spacing between icons
            my: 2, // Margin to separate from the image
          }}>
          {item.website && (
            <IconButton
              sx={{
                bgcolor: '#1b263b', // Background color
                color: '#46aCC2', // Icon color
                borderRadius: '50%', // Circular shape
                width: 48,
                height: 48,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition for smooth scaling and shadow
                '&:hover': {
                  transform: 'scale(1.1)', // Scale up on hover
                  boxShadow: '0 0 10px 4px rgba(70, 172, 194, 0.6)', // Glowing effect
                  bgcolor: '#1b263b',
                },
              }}
              href={item.website} // Replace with actual link
              target="_blank"
              rel="noopener noreferrer">
              <LanguageIcon />
            </IconButton>
          )}
          {item.twitter && (
            <IconButton
              sx={{
                bgcolor: '#1b263b',
                color: '#46aCC2',
                borderRadius: '50%',
                width: 48,
                height: 48,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 0 10px 4px rgba(70, 172, 194, 0.6)',
                  bgcolor: '#1b263b',
                },
              }}
              href={item.twitter} // Replace with actual link
              target="_blank"
              rel="noopener noreferrer">
              <TwitterIcon />
            </IconButton>
          )}
          {item.telegram && (
            <IconButton
              sx={{
                bgcolor: '#1b263b',
                color: '#46aCC2',
                borderRadius: '50%',
                width: 48,
                height: 48,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0 0 10px 4px rgba(70, 172, 194, 0.6)',
                  bgcolor: '#1b263b',
                },
              }}
              href={item.telegram} // Replace with actual link
              target="_blank"
              rel="noopener noreferrer">
              <TelegramIcon />
            </IconButton>
          )}
          {item.discord && (
            <IconButton
              sx={{
                bgcolor: '#1b263b', // Background color
                color: '#46aCC2', // Icon color
                borderRadius: '50%', // Circular shape
                width: 48,
                height: 48,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition for smooth scaling and shadow
                '&:hover': {
                  transform: 'scale(1.1)', // Scale up on hover
                  boxShadow: '0 0 10px 4px rgba(70, 172, 194, 0.6)', // Glowing effect
                  bgcolor: '#1b263b',
                },
              }}
              href={item.discord} // Replace with actual link
              target="_blank"
              rel="noopener noreferrer">
              <FaDiscord />
            </IconButton>
          )}
          {item.reddit && (
            <IconButton
              sx={{
                bgcolor: '#1b263b', // Background color
                color: '#46aCC2', // Icon color
                borderRadius: '50%', // Circular shape
                width: 48,
                height: 48,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition for smooth scaling and shadow
                '&:hover': {
                  transform: 'scale(1.1)', // Scale up on hover
                  boxShadow: '0 0 10px 4px rgba(70, 172, 194, 0.6)', // Glowing effect
                  bgcolor: '#1b263b',
                },
              }}
              href={item.reddit} // Replace with actual link
              target="_blank"
              rel="noopener noreferrer">
              <FaReddit />
            </IconButton>
          )}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
            py: 1,
            borderBottom: '1px solid #2C7484',
          }}>
          <Typography sx={{color: '#fff', fontWeight: 'bold'}}>
            Chain:
          </Typography>
          <Typography sx={{color: '#fff'}}>{item.chain}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1,
            borderBottom: '1px solid #2C7484',
          }}>
          <Typography sx={{color: '#fff', fontWeight: 'bold'}}>
            Launch Date:
          </Typography>
          <Typography sx={{color: '#fff'}}>{item.launchDate}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1,
            mb: 2,
            width: '100%',
            borderBottom: '1px solid #2C7484',
          }}>
          <Typography sx={{color: '#fff', fontWeight: 'bold'}}>
            End Date:
          </Typography>
          <Typography sx={{color: '#fff'}}>{item.endDate}</Typography>
        </Box>
      </Box>
      <Box sx={{overflowY: 'auto', px: 1}}>
        {descriptionLines.map((line, index) => (
          <Typography
            key={index}
            sx={{
              fontSize: '12px',
              color: '#D4D0CA',
              whiteSpace: 'pre-line', // Keeps text formatting
              mb: 2, // Adds more space between paragraphs
            }}>
            {line.trim() && line.trim()}{' '}
            {/* Ensures blank lines are not added */}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};

export default Details;
