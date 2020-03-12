import React from 'react';

function AdditionalCosts() {
  return(
    <>
      <h4>AdditionalCosts</h4>
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