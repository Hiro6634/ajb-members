import { MemberActionTypes } from "./member.types"; 

export const setCurrentMember = member => ({
    type: MemberActionTypes.SET_CURRENT_MEMBER,
    payload: member
});