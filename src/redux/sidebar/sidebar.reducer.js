import SideBarActionTypes from "./sidebar.types";

const INITIAL_STATE = {
    hidden: true
};

const sideBarReducer = (state=INITIAL_STATE, action) =>{
    switch (action.type){
        case SideBarActionTypes.TOGGLE_SIDEBAR_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            } 
        default:
            return state;
    }  
} 

export default sideBarReducer;