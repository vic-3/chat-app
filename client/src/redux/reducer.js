import store from "./store";

const reducer = (state = store, action) => {
    switch (action.type){
        case 'ADD_MESSAGE':
            return{
                ...state, messages:[
                    ...state.messages,{
                        message:action.payload.message,
                        username:action.payload.username,
                        userid:action.payload.userId
                    },
                ]
            } 
            case 'SET_ID':
                return {
                    ...state, userId: action.payload
                }   
            
        default:
            return state
    }
}

export default reducer