import * as types from "./actionTypes";

const init = {
    token:""
}

export const reducer = (state=init,{type,payload})=>{
    switch(type){
        case types.LOGIN_SUCCESS : {
            localStorage.setItem("token",JSON.stringify(payload))
            console.log(payload)
            return {
                ...state,
                token:payload
            }
        }
        default:return state;
    }
}
