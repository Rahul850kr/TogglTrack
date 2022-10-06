import * as types from "./actionTypes";

const init = {
    token:"",
    signupError:false
}

export const reducer = (state=init,{type,payload})=>{
    switch(type){
        case types.LOGIN_SUCCESS : {
            localStorage.setItem("token",JSON.stringify(payload))
            console.log(payload)
            return {
                ...state,
                signupError:false,
                token:payload
            }
        }
        case types.SIGNUP_FAILURE : {
            return {
                ...state,
                signupError:true
            }
        }
        default:return state;
    }
}
