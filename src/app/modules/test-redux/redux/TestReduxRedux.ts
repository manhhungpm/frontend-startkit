import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

export const actions = {
    add: (data: any) => ({
        type: "ADD",
        payload: data
    }),
    sub: (data: any) => ({
        type: "SUB",
        payload: data
    })
}

const initialAuthState: object = {
    strOutput: 'initialAuthState string',
}

export const reducer = persistReducer({storage, key: 'root'}, (state: object = initialAuthState, action: any) => {

    switch (action.type) {
        case "ADD": {
            const strOutput = action.payload + "+" + Math.random()
            return {...state , strOutput};
        }
        case "SUB": {
            const strOutput = action.payload + "-" + Math.random()
            return {...state, strOutput}
        }
        default:
            return initialAuthState;
    }
})