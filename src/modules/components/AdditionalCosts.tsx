import React from 'react';
import { Typography } from '@material-ui/core';

function AdditionalCosts() {
  return(
    <>
      <Typography variant="h6" component="h2">
        AdditionalCosts
      </Typography>
      <label>Name</label>
      <input type="text" id="ac-name" placeholder="name"/>
      <label>Value</label>
      <input type="value" id="ac-value" placeholder="value"/>
      <label>Manytimes</label>
      <input type="number" id="ac-times" placeholder="manytimes"/>
    </>
  );
}
export default AdditionalCosts;