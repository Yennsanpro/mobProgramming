import React from 'react';
import { Box, Container, Typography } from '@mui/material'

function Footer() {
  return (
    <footer style={{ position: 'fixed', width: '100%', bottom: 0, left:0 }}>
      <Box textAlign={'center'} py={2} m={0} bgcolor="#102d4f" color={'white'} width="100%">
        <Container>
          <Typography>© Reboot Academy 2022 - All Rights Reserved</Typography>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer