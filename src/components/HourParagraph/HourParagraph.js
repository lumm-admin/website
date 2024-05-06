import { Box, Typography } from '@mui/material';

function HourParagraph({ rightAligned, hour, text, sx }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: rightAligned ? 'flex-end' : 'flex-start',
        justifyContent: 'center',
        ...sx,
      }}
    >
      <Typography variant='h2'>{hour}</Typography>
      {text.split('<br/>').map((line) => (
        <Typography
          variant={'body1'}
          sx={{ textAlign: rightAligned ? 'right' : 'left' }}
        >
          {line}
        </Typography>
      ))}
    </Box>
  );
}

export default HourParagraph;
