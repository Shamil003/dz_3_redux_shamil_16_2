import {types} from "./types";

export const plusAction= (result) => {
    return {
        type: types.PLUS,
        payload: result
    }
}
