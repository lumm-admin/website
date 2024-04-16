import React, { useState } from 'react';

import { HashLink, HashLink as RouterLink } from 'react-router-hash-link';
import { Typography, Box, ButtonBase, Divider } from '@mui/material';

import NewReportLogic from './NewReportLogic';
import Palette from '../../theme/palette';
import EmptySpace from '../EmptySpace/EmptySpace';
import BottomSheet from '../BottomSheet/BottomSheet';
import ReportList from '../ReportList/ReportList';

function NewReport({ hidden, sx, ...props }) {
  const {} = NewReportLogic({});

  return (
    <BottomSheet
      open={true}
      fixed={true}
      hidden={hidden}
      titleSection={<></>}
      {...props}
    ></BottomSheet>
  );
}

export default NewReport;
