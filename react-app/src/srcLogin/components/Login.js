import React, {Component} from 'react';
import {Route} from "react-router";

class Login extends Component {
    render() {
        return (
            <div>
                <h2>这是登陆界面</h2>
                <ul>
                    <li>
                        <label htmlFor="userName">用户名：</label>
                        <input type="text" id='userName'/>
                    </li>
                    <li>
                        <label htmlFor="passWord">密码：</label>
                        <input type="text" id='passWord'/>
                    </li>
                    <li>
                        <button>登陆</button>
                    </li>
                </ul>
            </div>
        );
    }
}

let routerHandle = ()=>{
    return <Route exact path='/login' component={Login}/>
}
export default routerHandle;