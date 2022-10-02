import { DeleteProject } from "./action";
import { ADDCLIENT, ADDPROJECT, DELETEPROJECT, GETCLIENT, GETPROJECT } from "./actionTypes";

const intialState ={
    data:[],
    client:[]
}

export const reducer =(state=intialState,{type,payload})=>{
    

   switch (type) {
    
    case ADDPROJECT:
        return {...state,data:[...state.data,payload]}
    
    case GETPROJECT:
        
      return {...state,data:[...payload]}    
    
    case DELETEPROJECT:
        return {...state}  
    
    case ADDCLIENT:
        return {...state,client:[...state.client,payload]}    


    case GETCLIENT:
        return {...state,client:[...payload]}
    default:
        return state
   }
}




