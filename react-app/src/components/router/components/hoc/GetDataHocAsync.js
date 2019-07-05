import React,{Component} from 'react';
import axios from 'axios';


// 1.高阶组件抛出函数而不是组件
// 2.函数里面抛出组件
// 3.高阶组件使用时会接收一个组件作为参数
// 4.一般用state的状态来管理是否渲染传入组件的时间
// 5.如果处理数据。获取数据或其他的业务处理完毕，再渲染传入的组件
let GetDataHocAsync = (Com,urlList)=>{
    return (class Index extends Component{
        constructor(props){
            super(props);
            this.state = {
                state:false,
                list:[]
            }
        }
        async componentWillMount (){
            let data = [];
            for(var i = 0;i<urlList.length;i++){
                data[i] = await axios(urlList[i])
            }
            console.log(data);
            this.setState({
                state:true,
                list:data
            },()=>{
                console.log(this.state);
            })
        }

        render(){
            return <div>{this.state.state ? <Com getData={this.state.list} /> : null}</div>
        }

    })
}


export default GetDataHocAsync;
