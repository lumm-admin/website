import { Box, ButtonBase, Divider, Typography } from '@mui/material';
import Palette from '../../theme/palette';
import LineLogo from '../LineLogo/LineLogo';
import Helper from '../../helpers';

function ReportList({ reports, sx }) {
  const { SPACE_CADET } = Palette();
  const { howManyMinutesBetween } = Helper();

  return (
    <Box
      sx={{
        overflowY: 'scroll',
        width: '100%',
        ...sx,
      }}
    >
      {reports.map((report, id) => {
        const minSinceReport = Math.floor((Date.now() - report.time) / 60000);
        const formatedTime = howManyMinutesBetween(
          new Date(report.time),
          new Date()
        );

        const stopReport = report.direction.length === 0;

        return (
          <Box key={id}>
            <ButtonBase
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%',
                py: 3,
                px: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  minWidth: '50%',
                  alignItems: 'center',
                }}
              >
                {stopReport ? (
                  <Typography sx={{ minWidth: 35 }}>🚏</Typography>
                ) : (
                  <LineLogo line={report.lines[0]} />
                )}

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    ml: 1,
                  }}
                >
                  <Typography
                    variant='body2'
                    sx={{ textTransform: 'capitalize', textAlign: 'left' }}
                    component='div'
                  >
                    {report.stop.name.split(',')[1]}
                  </Typography>
                  <Typography variant='body3' color={SPACE_CADET}>
                    {report.direction}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexGrow: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  pl: 2,
                }}
              >
                <Typography variant='body1'>
                  {report.schtroumpfNmbr} 🤠
                </Typography>
                <Typography variant='caption' color={SPACE_CADET}>
                  {formatedTime}
                </Typography>
              </Box>
            </ButtonBase>
            {id !== reports.length - 1 && <Divider />}
          </Box>
        );
      })}
    </Box>
  );
}

export default ReportList;
