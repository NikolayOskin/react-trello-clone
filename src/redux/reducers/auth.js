import {
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    SIGNIN_SUCCESS,
    SIGNIN_ERROR
} from "../actions/auth";

const auth = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return { signedUp: true };
        case SIGNUP_ERROR:
            return { error: action.payload}
        case SIGNIN_SUCCESS:
            return { authenticated: true }
        case SIGNIN_ERROR:
            return { authenticated: false, signInError: action.payload}
        default:
            return state;
    }
};

export default auth;