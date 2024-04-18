import { Box } from '@mui/material';
import React from 'react';

const Map = () => {
  // Use the place's URL or coordinates in place of YOUR_LOCATION_HERE
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1372.7822993233672!2d6.628986417443838!3d46.51672840000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2fc59f4d287d%3A0x7026302e1dca9898!2sLa%20Rasude!5e0!3m2!1sfr!2sch!4v1713432821836!5m2!1sfr!2sch';

  const cornerCutSize = '40px';
  return (
    <Box
      sx={{
        position: 'relative',
        clipPath: `polygon(
          0 0, 
          calc(100% - ${cornerCutSize}) 0, /* Top right cut */
          100% ${cornerCutSize}, 
          100% 100%, 
          ${cornerCutSize} 100%, /* Bottom left cut */
          0 calc(100% - ${cornerCutSize})
        )`,
      }}
    >
      <iframe
        title='Google Map'
        width='400'
        height='400'
        src={mapSrc}
        style={{ border: 0 }}
        allowFullScreen={true}
        aria-hidden='false'
        tabIndex='0'
      ></iframe>
    </Box>
  );
};

export default Map;
