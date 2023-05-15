import { LOG_OUT, SET_USER } from "./actionsTypes";

const initialState = {
    user: {
        session: false,
        userId: '',
        userName: '',
        userEmail: '',
        // userLikes: []
    },
    temperaments: []
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
        };
        case LOG_OUT:
            return {
                ...state,
                user: {
                    session: false,
                    userId: '',
                    userName: '',
                    userEmail: '',
                    // userLikes: []
                }
            };
        default:
            return {...state}
    }
};


export default reducer;