import axios from 'axios';
import { useState } from 'react';
import PageLogicHelper from '../../helpers/PageLogicHelper';

const StopViewLogic = ({ currBusStop, reports }) => {
  if (!currBusStop) return { filteredReports: [] };
  const filteredReports = reports.filter((report) => {
    for (let i = 0; i < report.lines.length; i++) {
      for (let y = 0; y < currBusStop.lines.length; y++) {
        if (report.lines[i].id === currBusStop.lines[y].name) {
          return true;
        }
      }
    }
    return false;
  });
  return { filteredReports, reportedLines: currBusStop.lines };
};

export default StopViewLogic;
