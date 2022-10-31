import {types} from "../types";
const initialState = {
    result: 0
}
export const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PLUS:
            return {...state, result:action.payload}
        default: return state
    }
}