import React, {Component} from 'react';
import {Route} from "react-router";
import Login from './Login';


class User extends Component {
    render() {
        return (
            <div>
                <h2>用户信息</h2>
                {this.props.children}
            </div>
        );
    }
}
let childrenRouter = ()=>{
    return <User><Login/></User>
}
let routerHandle = ()=>{
    return <Route  path='/user' component={childrenRouter}/>
}
export default routerHandle;