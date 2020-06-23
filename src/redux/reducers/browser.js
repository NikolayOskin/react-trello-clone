import { REDIRECT } from "../actions/actions";

const browser = (state = {}, action) => {
    switch (action.type) {
        case REDIRECT:
            return { redirectTo: action.payload };
        default:
            return state;
    }
};

export default browser;

