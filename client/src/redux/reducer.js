import { CLEAN_MESSAGE, FILTER_API, FILTER_DB, GET_DOGS, LOG_OUT, NOT_FOUND_MESSAGE, ORDER_ASC, ORDER_ASC_W, ORDER_DSC, ORDER_DSC_W, SET_USER, SHOW_RESULT } from "./actionsTypes";

const initialState = {
    user: {
        session: false,
        userId: '',
        userName: '',
        userEmail: '',
        // userLikes: []
    },
    allDogs: [],
    dogsToShow: [],
    message: ''
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
        case SHOW_RESULT:
            return {
                ...state,
                dogsToShow: payload
            };          
        case ORDER_ASC:
            const allDogs = [...state.dogsToShow]
            return {
                ...state,
                dogsToShow: allDogs.sort((a, b) => a.name.localeCompare(b.name))
            };
        case ORDER_DSC:
            const allDogs1 = [...state.dogsToShow]
            return {
                ...state,
                dogsToShow: allDogs1.sort((a, b) => b.name.localeCompare(a.name))
            };
        case ORDER_ASC_W:
            const allDogs2 = [...state.dogsToShow]
            return {
                ...state,
                dogsToShow: allDogs2.sort((a, b) => {
                    const pesoA = +a.weight.metric.split(' ')[0];
                    const pesoB = +b.weight.metric.split(' ')[0];
                    return pesoA - pesoB;
                })
        };
        case ORDER_DSC_W:
            const allDogs3 = [...state.dogsToShow]
            return {
                ...state,
                dogsToShow: allDogs3.sort((a, b) => {
                    const pesoA = +a.weight.metric.split(' ')[0];
                    const pesoB = +b.weight.metric.split(' ')[0];
                    return pesoB - pesoA;
                })
            };
        case FILTER_API:
            const allDogsCopy = [...state.allDogs]
            return {
                ...state,
                dogsToShow: allDogsCopy.filter(dog => typeof dog.id === 'number') 
            };
        case FILTER_DB:
            const allDogsCopy1 = [...state.allDogs]
            return {
                ...state,
                dogsToShow: allDogsCopy1.filter(dog => /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/.test(dog.id)) 
            };
        case NOT_FOUND_MESSAGE:
            return {
                ...state,
                message:payload
            };
        case CLEAN_MESSAGE:
            return {
                ...state,
                message: ''
            };    
        default:
            return {...state}
    }
};


export default reducer;