import {ADDNUM} from "./action_types";

export default {
    [ADDNUM](text){
        return {
            type:ADDNUM,
            text:text
        }
    }
}