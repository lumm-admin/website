import { Box } from '@mui/material';

function SquarredLine({ sx }) {
  const headStyle = {
    transform: 'rotate(45deg)',
    width: 32,
    height: 32,
    backgroundColor: 'primary.main',
  };
  return (
    <Box
      sx={{
        width: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Box sx={headStyle} />
      <Box
        sx={{
          width: '11px',
          flexGrow: 1,
          backgroundColor: 'primary.main',
        }}
      />
      <Box sx={headStyle} />
    </Box>
  );
}

export default SquarredLine;
