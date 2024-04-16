import React, { useState } from 'react';

import { HashLink, HashLink as RouterLink } from 'react-router-hash-link';
import { Typography, Box, ButtonBase, Divider, InputBase } from '@mui/material';

import { PiSmileyWink } from 'react-icons/pi';

import LatestReportsLogic from './LatestReportsLogic';
import Palette from '../../theme/palette';
import EmptySpace from '../EmptySpace/EmptySpace';
import BottomSheet from '../BottomSheet/BottomSheet';
import ReportList from '../ReportList/ReportList';
import SearchBox from '../SearchBox/SearchBox';

function LatestReports({
  focusOnMap,
  reports,
  setFocusOnMap,
  reportButton,
  hidden,
  sx,
  ...props
}) {
  const { SPACE_CADET, STATE_GREY } = Palette();
  const { onSearchChange, filteredReports } = LatestReportsLogic({ reports });

  return (
    <BottomSheet
      open={!focusOnMap}
      hidden={hidden}
      setOpen={(open) => {
        setFocusOnMap(!open);
      }}
      titleSection={
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h4'>Signalements récents</Typography>
          <Typography>⚠️</Typography>
        </Box>
      }
      componentAbove={reportButton}
      {...props}
    >
      <SearchBox
        placeholder={'Chercher ligne ou arrêt'}
        onChange={onSearchChange}
        sx={{ px: 3 }}
      />
      {filteredReports.length > 0 ? (
        <ReportList reports={filteredReports} onChange={onSearchChange} />
      ) : (
        <Typography mt={4} mb={5} variant='body2' color={SPACE_CADET}>
          Aucun signalement reporté 😉
        </Typography>
      )}
    </BottomSheet>
  );
}

export default LatestReports;
