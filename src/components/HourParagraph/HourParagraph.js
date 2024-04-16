import { Box, ButtonBase, Divider, Typography } from '@mui/material';
import Palette from '../../theme/palette';
import LineLogo from '../LineLogo/LineLogo';
import Helper from '../../helpers';

function HourParagraph({ left, hour, text }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: left ? 'flex-start' : 'flex-end',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h3'>{hour + 'h00'}</Typography>
      <Typography variant='body1' sx={{ textAlign: left ? 'left' : 'right' }}>
        text
      </Typography>
    </Box>
  );
}

export default HourParagraph;
