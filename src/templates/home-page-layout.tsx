import React from 'react'


import { Container, Box, Typography, Paper, Grid } from '@mui/material';


interface HomePageLayoutProps {
    children: React.ReactNode;
}

function HomePageLayout({children}: HomePageLayoutProps) {
    
    
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh">
            {/* Header */}
            <Paper sx={{ padding: 2, backgroundColor: '#F5E5B3' }}>
                <Typography variant="h4" component="header" align="center">
                    HEADER
                </Typography>
            </Paper>
            {/* Main Content */}
            <Box flexGrow={1}>
            {/* Main Image */}
                <Box
                    sx={{
                    height: 200,
                    backgroundColor: '#FFF8E1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 2
                    }}
                >
                <Typography variant="h5">IMG</Typography>
            </Box>
            {/* Container for Categories and Products */}
            <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
                <Grid container spacing={2}>
                {/* Category Section */}
                <Grid item xs={12} md={3}>
                    <Paper sx={{ height: '100%', backgroundColor: '#D3D3D3' }}>
                        <Typography variant="h6" align="center">
                            CATEGORY
                        </Typography>
                    </Paper>
                </Grid>
                {/* Products Container */}
                <Grid item xs={12} md={9}>
                    <Paper sx={{ height: 300, backgroundColor: '#FFF8E1' }}>
                        <Typography variant="h6" align="center">
                            CONTAINER CATEGORY PRODUCTS
                        </Typography>
                    </Paper>
                </Grid>
                </Grid>
            </Container>
            </Box>
            {/* Footer */}
            <Paper sx={{ padding: 2, backgroundColor: '#8F9779' }}>
                <Typography variant="h6" component="footer" align="center">
                    FOOTER
                </Typography>
            </Paper>
      </Box>
    );
}

export default HomePageLayout;
