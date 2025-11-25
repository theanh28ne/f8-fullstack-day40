import { SET_POSTS } from "./consts";

const initState = {
    posts: []
};
const reducer = (state = initState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.payload,
            }
        default:
            return state;
    
    }

}
export default reducer;