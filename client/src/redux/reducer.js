import { FILTER, GET_DOGS, LOG_OUT, ORDER_ASC, ORDER_ASC_W, ORDER_DSC, ORDER_DSC_W, SET_USER, SHOW_RESULT } from "./actionsTypes";

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
        case SHOW_RESULT:
            return {
                ...state,
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
        case ORDER_ASC:
            const allDogs = [...state.allDogs]
            return {
                ...state,
                dogsToShow: allDogs.sort((a, b) => a.name.localeCompare(b.name))
            };
        case ORDER_DSC:
            const allDogs1 = [...state.allDogs]
            return {
                ...state,
                dogsToShow: allDogs1.sort((a, b) => b.name.localeCompare(a.name))
            };
        case ORDER_ASC_W:
            const allDogs2 = [...state.allDogs]
            return {
                ...state,
                dogsToShow: allDogs2.sort((a, b) => {
                    const pesoA = +a.weight.metric.split(' ')[0];
                    const pesoB = +b.weight.metric.split(' ')[0];
                    return pesoA - pesoB;
                })
            };
        case ORDER_DSC_W:
            const allDogs3 = [...state.allDogs]
            return {
                ...state,
                dogsToShow: allDogs3.sort((a, b) => {
                    const pesoA = +a.weight.metric.split(' ')[0];
                    const pesoB = +b.weight.metric.split(' ')[0];
                    return pesoB - pesoA;
                })
            };

        default:
            return {...state}
    }
};


export default reducer;