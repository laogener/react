import React,{Component} from 'react';
import getDataHoc from './hoc/getDataHoc';
class Hocgetdata extends Component{
    constructor(props){
        super(props);
        console.log(this.props.getData);
        this.state = {
            state:this.props.getData
        }

    }

    render(){
        return (
            <div>
                <h3>高阶组件请求数据</h3>
                <ul>
                    <li>渲染数据1：{this.state.state[0].data.result[0].name}</li>
                    <li>渲染数据2：{this.state.state[1].data.result.name}</li>
                </ul>
            </div>
        );
    }

}
let Com = getDataHoc(Hocgetdata,[{url:'/getJoke',method:'post',params:{page: 1, count: 10, type: 'video'}},{url:'/getSingleJoke',method:'get',params:{sid: 28654780}}]);
export default Com;
