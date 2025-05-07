import * as React from 'react';
import { Box, ThemeProvider, createTheme, Container, Grid, Stack } from '@mui/system';
import { styled } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
  },
});


const MyHeader = styled('header')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
  marginBottom: 4
});

const MyButton = styled('button')(({ theme }) => ({
  color: 'white',
  backgroundColor: '#1976d2',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const Item = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',
  border: '1px solid',
  borderColor: '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
    borderColor: '#444d58',
  }),
}));

export default function MuiSystem() {
  return (
    <>
      <Container maxWidth="xl" fixed>        
        <MyHeader>
          <Box component="h1" sx={{m:0}}>
            MUI System
          </Box>
        </MyHeader>
      
        <Grid container spacing={2}>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
        </Grid>

        {/* <Stack direction="row" spacing={2}> */}
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>

        <MyButton>Click me</MyButton>      

        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: '#007FFF',
                dark: '#0066CC',
              },
            },
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: 1,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          />
        </ThemeProvider>

        <ThemeProvider theme={theme}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              minWidth: 300,
            }}
          >
            <Box component="h2" sx={{ color: 'text.secondary', m:0, p:0 }}>Sessions</Box>
            <Box component="h3" sx={{ color: 'text.primary', m:0, p:0, fontSize: 34, fontWeight: 'medium' }}>
              98.3 K
            </Box>
            <Box
              component="p"
              sx={{
                color: 'success.dark',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 14,
              }}
            >
              +18.77%
            </Box>
            <Box component="p" sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
              vs. last week
            </Box>
          </Box>
        </ThemeProvider>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'background.default',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            overflow: 'clip',
            width: {
              xs: 100, // theme.breakpoints.up('xs')
              sm: 200, // theme.breakpoints.up('sm')
              md: 300, // theme.breakpoints.up('md')
              lg: 900, // theme.breakpoints.up('lg')
              xl: 1000, // theme.breakpoints.up('xl')
            },
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
          <Box
            sx={{
              p: 3,
              minWidth: { md: 350 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 0.5,
            }}
          >
            <Box component="span" sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
              123 Main St, Phoenix AZ
            </Box>
            <Box
              component="span"
              sx={{ color: 'primary.main', fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              $280,000 — $310,000
            </Box>
            <Box
              sx={{
                py: 0.5,
                px: 1,
                backgroundColor: 'rgba(46, 125, 50, 0.1)',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                border: '1px solid',
                borderColor: 'rgba(46, 125, 50, 0.1)',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
                textTransform: 'uppercase',
                color: 'success.main',
              }}
            >
              Confidence score: 85%
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
