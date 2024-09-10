import { userConstants } from "../actions/constants"

const initState = {
    error: null,
    message: '',
    loading: false,
    signupsuccess: false
}

export default (state = initState, action) => {
    switch(action.type){
        case userConstants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: true,
                signupsuccess: false
            }
            break;
        case userConstants.USER_REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                signupsuccess: true,
                message: action.payload.message
            }
            break;
        case userConstants.USER_REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                signupsuccess: false,
                message: action.payload.error
            }
            break;
    }
    
    return state;
}