import React, {Component} from 'react';
import axios from 'axios';

// 模拟登陆检测
export default (Com)=>{
    return class TestLogin extends Component {
        constructor(props){
            super(props);
            this.state = {
                Com:null
            }

        }
        componentWillMount(){
            // 模拟登陆检测
            if(sessionStorage.getItem('userId')){
                axios.get('/singlePoetry',{sid:sessionStorage.getItem('userId')}).then((res)=>{
                    console.log(res);
                    if(res.data.code == '200'){
                        this.setState({Com:Com})
                    }else{
                        // 指定跳转
                        sessionStorage.setItem('url',this.props.match.path);
                        this.props.history.push('/user/login');
                        // this.props.history.push({
                        //     pathname:'/user/login',
                        //     state:{url:this.props.match.path}
                        // });
                    }
                })
            }else{
                sessionStorage.setItem('url',this.props.match.path);
                this.props.history.push('/user/login');
            }
        }
        render() {

            let {Com} = this.state;
            return (
                <div>
                    {Com ? <Com {...this.props}/> : null}
                </div>
            );
        }
    }
};