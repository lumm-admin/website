import { Box } from '@mui/material';

function EmptySpace({ under, height }) {
  return (
    <Box
      sx={{
        height: height
          ? { xs: height / 2, sm: height }
          : under === 'h1'
          ? { xs: 24, sm: 68 }
          : under === 'h2'
          ? { xs: 24, sm: 68 }
          : under === 'h4'
          ? { xs: 2, sm: 4 }
          : { xs: 80, sm: 140 },
      }}
    />
  );
}

export default EmptySpace;
