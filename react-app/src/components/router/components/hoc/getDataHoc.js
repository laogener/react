import React,{Component} from 'react';
import axios from 'axios';


// 1.高阶组件抛出函数而不是组件
// 2.函数里面抛出组件
// 3.高阶组件使用时会接收一个组件作为参数
// 4.一般用state的状态来管理是否渲染传入组件的时间
// 5.如果处理数据。获取数据或其他的业务处理完毕，再渲染传入的组件
let getDataHoc = (Com)=>{
    return (class Index extends Component{
        constructor(props){
            super(props);
            this.state = {
                state:false,
                list:[]
            }
        }
        componentWillMount(){
            axios.post('/getJoke',  {
                params: {
                    page: 1,
                    count: 10,
                    type: 'video',
                }
        }).then((res)=>{
                this.setState({
                    state:true,
                    list:res.data.result
                })
            })
        }
        componentWillReceiveProps(nextProps) { // 父组件重传props时就会调用这个方法
            this.setState({
                state:nextProps.state,
                list:nextProps.list
            });
        }
        render(){
            return <div>
                {this.state.state?<Com getDtat={this.state.list} />:null}</div>
        }

    })
}


export default getDataHoc;
