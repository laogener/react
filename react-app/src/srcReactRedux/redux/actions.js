import {ADDNUM,GETDATALIST,SETDATALIST} from "./action_types";
import axios from 'axios';


export const actions={
    [ADDNUM](text){
        return {
            type:ADDNUM,
            text:text
        }
    },
    // 请求到数据后将数据设置到redux中
    [SETDATALIST](text){
        return {
            type:SETDATALIST,
            text:text
        }
    },
    [GETDATALIST](text){
        return function (dispath) {
            console.log(111)
            axios.get('/singlePoetry',{sid:11121}).then((res)=>{
                console.log(actions)
                dispath(actions[SETDATALIST](res.data.result))
            }).catch((err)=>{

            })
        }
    }
}