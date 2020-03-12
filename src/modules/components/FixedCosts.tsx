import React from 'react';
import { Typography } from '@material-ui/core';

function FixedCosts() {
  return(
    <>
      <Typography variant="h6" component="h2">
        FixedCosts
      </Typography>
      <label>Name</label>
      <input type="text" id="fc-name" placeholder="name"/>
      <label>Value</label>
      <input type="value" id="fc-value" placeholder="value"/>
    </>
  );
}
export default FixedCosts;