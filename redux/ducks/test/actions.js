import * as type from "./types";

export const doSomething = () => dispatch => {

    dispatch ({
        type: type.DO_SOMETHING,
        payload: 'test'
    })

}