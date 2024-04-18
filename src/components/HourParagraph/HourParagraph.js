import { Box, ButtonBase, Divider, Typography } from '@mui/material';
import Palette from '../../theme/palette';
import LineLogo from '../LineLogo/LineLogo';
import Helper from '../../helpers';

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
      <Typography variant='h2'>{hour + 'h00'}</Typography>
      {text.split('<br/>').map((line, index) => (
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
