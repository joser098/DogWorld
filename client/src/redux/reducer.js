import { FILTER, GET_DOGS, LOG_OUT, ORDER, SET_USER, SHOW_RESULT } from "./actionsTypes";

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
            const allDogsCopy = [...state.allDogs]
            return {
                ...state,
                dogsToShow: 
                payload === 'API'
                ? allDogsCopy.filter(dog =>  Object.keys(dog).length > 5)
                : allDogsCopy.filter(dog =>  Object.keys(dog).length <= 5)
            };
        case ORDER:
            const dogsToShowCopy = [...state.dogsToShow]
            return {
                ...state,
                dogsToShow: 
                payload === 'A'
                ? dogsToShowCopy.sort((a, b) => a.name.localeCompare(b.name))
                : dogsToShowCopy.sort((a, b) => b.name.localeCompare(a.name))
            };
        case SHOW_RESULT:
            return {
                ...state,
                dogsToShow: payload
            };      
            
        default:
            return {...state}
    }
};


export default reducer;