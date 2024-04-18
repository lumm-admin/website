import { Box, Typography } from '@mui/material';

function LineLogo({ line }) {
  return (
    <Box
      sx={{
        borderRadius: 0.5,
        backgroundColor: line.color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 1,
        py: 1,
        minWidth: 35,
      }}
    >
      <Typography variant='body3' sx={{ color: 'white' }}>
        {line.name}
      </Typography>
    </Box>
  );
}

export default LineLogo;
