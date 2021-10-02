import { createSelector, createStructuredSelector } from "reselect";   

const selectSideBar = state => state.sidebar;

export const selectSideBarHidden = createSelector(
   [selectSideBar],
   sidebar => sidebar.hidden
);