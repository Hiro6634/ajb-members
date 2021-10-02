import {createSelector}  from 'reselect';

const selectMember = state => state.member;

export const selectCurrentMember = createSelector(
  [selectMember],
  member => member.currentMember  
);