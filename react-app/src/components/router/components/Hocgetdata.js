import React,{Component} from 'react';
import getDataHoc from './hoc/getDataHoc';
class Hocgetdata extends Component{
    constructor(props){
        super(props);
        console.log(this.props.getData);
        this.state = {
            state:this.props.getData,
        }

    }

    render(){
        return (
            <div>
                <h3>高阶组件请求数据</h3>
                <ul>{this.state.state}</ul>
            </div>
        );
    }

}
let Com = getDataHoc(Hocgetdata);
export default Com;
