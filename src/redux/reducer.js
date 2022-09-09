import { SET_NOMBRE } from "./actions";

const initialState = {
    nombre: "Diego"
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NOMBRE:
            return {
                ...state,
                nombre: action.payload
            };
        default:
            return state;
    }
}

export default rootReducer;