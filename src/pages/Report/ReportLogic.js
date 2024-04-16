import axios from 'axios';
import { useState } from 'react';
import PageLogicHelper from '../../helpers/PageLogicHelper';

const ReportLogic = () => {
  const { navigate, useLoadPage, API_ORIGIN, pageStatus, setPageStatus } =
    PageLogicHelper();

  useLoadPage(() => {
    setPageStatus('active');
  });

  return {};
};

export default ReportLogic;
