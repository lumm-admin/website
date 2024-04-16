import React, { useState } from 'react';

import { HashLink, HashLink as RouterLink } from 'react-router-hash-link';
import { Typography, Box, ButtonBase, Divider } from '@mui/material';

import StopViewLogic from './StopViewLogic';
import Palette from '../../theme/palette';
import EmptySpace from '../EmptySpace/EmptySpace';
import BottomSheet from '../BottomSheet/BottomSheet';
import ReportList from '../ReportList/ReportList';

function StopView({
  currBusStop,
  focused,
  reports,
  setFocusOnMap,
  hidden,
  sx,
  ...props
}) {
  const { filteredReports } = StopViewLogic({ currBusStop, reports });
  const formatedName = currBusStop && currBusStop.name.split(',').join('\n');

  return (
    <BottomSheet
      open={focused}
      hidden={hidden}
      titleSection={
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography variant='h4' margin={'left'}>
              {currBusStop && currBusStop.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant='body3' margin={'auto'}>
              Lignes à risque
            </Typography>
            <Typography variant='body2' margin={'auto'}>
              🚏
            </Typography>
          </Box>
        </>
      }
    >
      {filteredReports.length > 0 ? (
        <ReportList reports={filteredReports} />
      ) : (
        <Typography mt={4} mb={5} variant='body2' color={'black'}>
          Aucun signalement reporté 😉
        </Typography>
      )}
    </BottomSheet>
  );
}

export default StopView;
