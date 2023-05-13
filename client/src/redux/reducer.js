

const initialState = {
    user: {
        userId: '',
        userName: '',
        userEmail: '',
        userLikes: []
    }
};

const reducer = (state = initialState, { type, payload }) => {
    switch( type ){
        default:
            return {...state}
    }
};


export default reducer;