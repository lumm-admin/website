import axios from 'axios';
import { useState } from 'react';
import PageLogicHelper from '../../helpers/PageLogicHelper';

const LatestReportsLogic = ({ reports }) => {
  const { navigate, useLoadPage, API_ORIGIN } = PageLogicHelper();

  /* TODO
  Example of report :
   {
     id: 4324321,
     stop: "Epenex",
     direction: "Lausanne-Flon",
     line : {
      name: "M1",
      color: '#0000FF'
     },
     time: 1595276260000,
   } */

  const [filteredReports, setFilteredReports] = useState(reports);

  const onSearchChange = (search) => {
    if (search === '') {
      setFilteredReports(reports);
    } else {
      const searchLower = search.toLowerCase();
      const filtered = reports.filter(
        (report) =>
          report.stop.name.toLowerCase().includes(searchLower) ||
          report.lines[0].id.toLowerCase().includes(searchLower)
      );
      setFilteredReports(filtered);
    }
  };

  return { onSearchChange, filteredReports };
};

export default LatestReportsLogic;
