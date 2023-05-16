import { FILTER, GET_DOGS, LOG_OUT, ORDER, SET_USER } from "./actionsTypes";

const initialState = {
    user: {
        session: false,
        userId: '',
        userName: '',
        userEmail: '',
        // userLikes: []
    },
    allDogs: [],
    dogsToShow: []
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
        case GET_DOGS:
            return {
                ...state,
                allDogs: payload,
                dogsToShow: payload
            }; 
        case FILTER:
            return {
                ...state,
                dogsToShow: 
                payload === 'API'
                ? state.allDogs.filter(dog =>  Object.keys(dog).length > 5)
                : state.allDogs.filter(dog =>  Object.keys(dog).length <= 5)
            };
        case ORDER:
            const dogsToShowCopy = [...state.dogsToShow]
            return {
                ...state,
                dogsToShow: 
                payload === 'A'
                ? dogsToShowCopy.sort((a, b) => a.id - b.id)
                : dogsToShowCopy.sort((a, b) => b.id - a.id)
            }        
        default:
            return {...state}
    }
};


export default reducer;