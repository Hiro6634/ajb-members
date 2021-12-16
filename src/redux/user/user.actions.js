import UserActionTypes from "./user.types";

export const setCurrentUser = user => 
{
    console.log("UserAction:", user);
    return ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})
};