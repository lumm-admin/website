import { Box, InputBase } from '@mui/material';
import Palette from '../../theme/palette';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

function SearchBox({ sx, placeholder, onChange, ...props }) {
  const { GHOST_WHITE } = Palette();

  return (
    <Box sx={{ width: '100%', ...sx }} {...props}>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <InputBase
          sx={{
            px: 3,
            py: 1,
            width: '100%',
            borderRadius: 1,
            backgroundColor: GHOST_WHITE,
          }}
          inputProps={{
            sx: { fontSize: 16 },
          }}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
        <Box
          component={PiMagnifyingGlassBold}
          sx={{
            position: 'absolute',
            right: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            height: 20,
            opacity: 0.4,
          }}
        />
      </Box>
    </Box>
  );
}

export default SearchBox;
