import { SET_USER } from "./actionsTypes";

const initialState = {
    user: {
        session: false,
        userId: '',
        userName: '',
        userEmail: '',
        // userLikes: []
    }
};

const reducer = (state = initialState, { type, payload }) => {
    switch( type ){
        case SET_USER:
            return {
                ...state,
                user:{
                session: true,
                userId: payload.id,
                userName: payload.name,
                userEmail: payload.email,
                // userLikes: payload.userLikes
            }
        }
        default:
            return {...state}
    }
};


export default reducer;