import { SET_USERS } from "./consts";

const initState = {
    users: [],
    
};
const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state;
    
    }

}
export default reducer;