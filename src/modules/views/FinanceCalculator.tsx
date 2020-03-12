import React from 'react';
import FixedEarning from '../components/FixedEarning';
import AdditionalEarning from '../components/AdditionalEarning';
import FixedCosts from '../components/FixedCosts';
import AdditionalCosts from '../components/AdditionalCosts';


function FinanceCalculator() {
  return(
    <>
      <FixedEarning/>
      <AdditionalEarning/>
      <FixedCosts/>
      <AdditionalCosts/>
    </>
  );
}
export default FinanceCalculator;