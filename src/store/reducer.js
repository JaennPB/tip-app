import { createReducer, createAction } from '@reduxjs/toolkit';

export const openTipCalculator = createAction('tip/open');
export const calculateBill = createAction('tip/calculate');

const initialState = {
  openTipCalculator: false,
  openResultsSection: false,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(openTipCalculator, (state) => {
    state.openTipCalculator = true;
  });
  builder.addCase(calculateBill, (state) => {
    state.openResultsSection = true;
  });
});

export default rootReducer;
