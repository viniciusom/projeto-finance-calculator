import React from 'react';
import { Typography } from '@material-ui/core';

function AdditionalEarning() {
  return(
    <>
      <Typography variant="h6" component="h2">
        AdditionalEarning
      </Typography>
      <label>Name</label>
      <input type="text" id="ae-name" placeholder="name"/>
      <label>Value</label>
      <input type="value" id="ae-value" placeholder="value"/>
      <label>Manytimes</label>
      <input type="number" id="ae-times" placeholder="manytimes"/>
    </>
  );
}
export default AdditionalEarning;