import React, {Component} from 'react';
import {Route} from "react-router-dom";
class Index extends Component {
    render() {
        return (
            <div>
                首页
            </div>
        );
    }
}
let routerHandle = ()=>{
    return <Route exact path='/' component={Index}/>
}
export default routerHandle;