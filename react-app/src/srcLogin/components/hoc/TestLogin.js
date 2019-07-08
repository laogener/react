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
                axios.post('/singlePoetry',{sid:sessionStorage.getItem('userId')},(res)=>{
                    if(res.code = '200'){
                        this.setState({Com:Com})
                    }else{

                    }
                })
            }else{

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