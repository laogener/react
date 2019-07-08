import React, {Component} from 'react';
import {Route} from "react-router";

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

let routerHandle = ()=>{
    return <Route exact path='/user' component={User}/>
}
export default routerHandle;