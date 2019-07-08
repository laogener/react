import React, {Component} from 'react';
import {Route} from "react-router-dom";
import TestLogin from './hoc/TestLogin';
class Index extends Component {
    render() {
        return (
            <div>
                首页
            </div>
        );
    }
}
let Com = TestLogin(Index);
let routerHandle = ()=>{
    return <Route exact path='/' component={Com}/>
}
export default routerHandle;