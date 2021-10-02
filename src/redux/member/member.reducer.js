import { MemberActionTypes } from './member.types';

const INITIAL_STATE = {
    currentMember: null
} 

const memeberReducer = (state = INITIAL_STATE, action)  => {
    switch(action.type){
        case MemberActionTypes.SET_CURRENT_MEMBER:
            return {
                ...state,
                currentMember: action.payload
            }; 
        default:
            return state;
    } 
} 

export default memeberReducer;