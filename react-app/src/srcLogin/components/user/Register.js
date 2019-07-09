import React, {Component} from 'react';
import {Route,Link} from "react-router-dom";

class Register extends Component {

    constructor(props,contextTypes){
        super(props);
        this.state={
            usernams:'',
            password:''
        }
    }

    registerFn(){
        // 注册请求成功后
        sessionStorage.setItem('userId','12');
        alert('注册成功');
        this.props.history.push('/user/login')
    }
    changeData(e){
        this.setState({
            [e.target.name]:e.target.value
        },()=>{console.log(this.state)})
    }
    render() {
        return (
            <div>
                <h2>这是注册界面</h2>
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
                        <button onClick={()=>this.registerFn()}>注册</button>
                    </li>
                </ul>
            </div>
        );
    }
}

let routerHandle = ()=>{
    return <Route  path='/user/register' component={Register}/>
}
export default routerHandle;