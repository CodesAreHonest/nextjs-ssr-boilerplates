import * as type from "./types";
import { createReducer } from "../../util";

const initialState = {
    value: ""
};

const testReducer = createReducer(initialState)({
    [type.DO_SOMETHING]: (state, action) => ({
        ...state,
        value: action.payload
    })
});

export default testReducer;