import React from 'react';

function AdditionalEarning() {
  return(
    <>
      <h4>AdditionalEarning</h4>
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