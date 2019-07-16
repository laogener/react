import initState from './state';
import {ADDNUM} from "./action_types";

export default (state=initState,actions)=>{
    const {type,text} = actions;
    switch (actions.type) {
        case ADDNUM:{
            return Object.assign({},state,{num:state.num+1})
        }
        default:{
            return state
        }
    }
}