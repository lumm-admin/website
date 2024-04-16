import { Typography, Box } from '@mui/material';
import Palette from '../../theme/palette';

function FormField({
  label,
  placeholder,
  multiline,
  rows,
  error,
  register,
  id,
  options,
  ...props
}) {
  const { STATE_GREY, GHOST_WHITE, FRENCH_GREY, NIGHT, RED } = Palette();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        variant='caption'
        color={STATE_GREY}
        mb={1}
        textTransform='capitalize'
      >
        {label}
      </Typography>
      <Box
        component={rows && rows > 0 ? 'textarea' : 'input'}
        {...register(id, options)}
        placeholder={placeholder || label}
        rows={rows && rows > 0 ? rows.toString() : ''}
        sx={{
          border: 'none',
          minHeight: 48,
          backgroundColor: GHOST_WHITE,
          px: 2,
          borderRadius: 1,
          width: '100%',
          outline: error ? '1px solid ' + RED : '',
          ':focus': {
            outline: error ? '1px solid ' + RED : 'none !important',
          },
          '::placeholder': {
            fontFamily: '"Outfit", "Helvetica", "Arial", sans-serif',
            fontSize: 20,
            lineHeight: 1.2,
            color: FRENCH_GREY,
          },
          pt: rows && rows > 0 ? 1 : 0,
          fontFamily: '"Outfit", "Helvetica", "Arial", sans-serif',
          fontSize: 20,
          lineHeight: 1.2,
          color: NIGHT,
          resize: 'none',
        }}
        {...props}
      />
      <Typography
        variant='caption'
        sx={{
          color: RED,
          mt: 0.5,
          alignSelf: 'flex-end',
        }}
      >
        {error && error.message}
      </Typography>
    </Box>
  );
}

export default FormField;
