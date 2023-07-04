//state-count:0
//action - increment,decrement,reset
//reducer
//store

const { createStore } = require("redux")
//constant
const ADD_USER = "ADD_USER";


const initialState = {
    users: ['sazzad'],
    count: 1,
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    }
}


//creating reducer
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }


        default:
            return state;
    }
}

//store

const store = createStore(userReducer)
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser("rafiq"));
store.dispatch(addUser("shuchi"));
