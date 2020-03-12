import React from 'react';
import { Typography, Button } from '@material-ui/core';

function FixedEarning() {
  return(
    <>
      <Typography variant="h5">
        FixedEarning
      </Typography>
      <Typography variant="h6">
        Name
      </Typography>
      <input type="text" id="fe-name" placeholder="name"/>
      <Typography variant="h6" component="h2">
        Value
      </Typography>
      <input type="value" id="fe-value" placeholder="value"/>
      <Button variant="contained" color="primary">
        Adicionar
      </Button>
    </>
  );
}
export default FixedEarning;