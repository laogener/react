import React, {Component} from 'react';
import {Route,Link} from "react-router-dom";
import PropTypes from 'prop-types';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            usernams:'',
            password:''
        }
    }
    login(){

        // 登陆请求成功后
        sessionStorage.setItem('userId','123123');
        alert('登陆成功');
        this.props.history.push('/')
    }
    register(){

    }
    changeData(e){
        this.setState({
            [e.target.name]:e.target.value
        },()=>{console.log(this.state)})
    }
    render() {
        return (
            <div>
                <h2>这是登陆界面</h2>
                <ul>
                    <li>
                        <label htmlFor="userName">用户名：</label>
                        <input type="text" id='userName' name='usernams' onChange={(e)=>this.changeData(e)}/>
                    </li>
                    <li>
                        <label htmlFor="passWord">密码：</label>
                        <input type="password" id='passWord' name='password' onChange={(e)=>this.changeData(e)}/>
                    </li>
                    <li>
                        <button onClick={()=>this.login()}>登陆</button>
                        <Link to='/user/register'>注册</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

let routerHandle = ()=>{
    return <Route  path='/user/login' component={Login}/>
}
export default routerHandle;