import React, { useContext } from 'react';
import ErrorHandlerContext from '../../ErrorHandlerContext';

import { Link, Typography } from '@mui/material';

function Page500() {
  const { setErrorCode } = useContext(ErrorHandlerContext);
  return <Typography>Site a crashé</Typography>;
}

export default Page500;
