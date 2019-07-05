import React,{Component} from 'react';
import GetDataHocAsync from './hoc/GetDataHocAsync';
import HandleDataHoc from './hoc/HandleDataHoc';
class HocHandleData extends Component{
    constructor(props){
        super(props);
        console.log(111)
        // {...this.props} 
        console.log(this.props)
        this.state = {
            state:this.props.initdata
        }

    }

    render(){
        return (
            <div>
                <h3>高阶组件请求添加时间</h3>
                <ul>
                    {
                        this.state.state.map((i,index) => {
                            return (
                                <li key ={index} >{i.time}  -- {i.text}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

}
let Com = GetDataHocAsync(HandleDataHoc(HocHandleData),[{url:'/getJoke',method:'post',params:{page: 1, count: 10, type: 'video'}}]);
export default Com;
