import {createStore} from 'redux';

// let initState = {
//     num:1
// };
// export const actions={
//     addNum(text){
//         return {
//             type:'addnum',
//             text:text
//         }
//     }
// };
// const reducer = (state=initState,action) =>{
//
//     let {type,text} = action;
//     switch (action.type) {
//         case 'addnum':{
//             return Object.assign({},state,{num:state.num+1})
//         }
//
//         default:
//             return state
//     }
// }

import reducer from './reducer'
export default new createStore(reducer)