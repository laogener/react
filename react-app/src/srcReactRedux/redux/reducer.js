import initState from './state';
import {ADDNUM,SETDATALIST} from "./action_types";

export default (state=initState,actions)=>{
    const {type,text} = actions;
    switch (actions.type) {
        case ADDNUM:{
            return Object.assign({},state,{num:state.num+1})
        }
        case SETDATALIST:{
            return Object.assign({},state,{dataList:text})
        }
        default:{
            return state
        }
    }
}