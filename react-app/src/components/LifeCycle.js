import React,{Component,Fragment} from 'react';


class LifeCycle extends Component{
    constructor(props){
        // 做数据相关的操作
        // 1.数据的请求
        // 2.当前组建的检测
        super(props);
        this.state = {
            // num:this.props.num ? this.props.num : 1
            num:true
        };
        // this.changeFn = this.changeFn.bind(this);
        console.log('constructor');
        setTimeout(() => {
            this.setState({num : false})
        },3000);
    }
    componentWillMount(){
        console.log('componentWillMount');

    }
    changeFn(){
        console.log(this);
        // this.setState({
        //     num:this.state.num+1
        // });
        // console.log(this.state.num);
        // 获取数据更新后的新值
        this.setState({
            num:this.state.num+1
        },() =>{console.log(this.state.num);});
    }
    render(){
        // 纯函数
        // 1.不能调用setstate进行数据的改变
        // 2.不做数据的产生和保存
        // 3.返回数据和拼接好的jsx结构
        console.log('render');
        return (
            <Fragment>
                <p>{this.props.name}</p>
                <p>{this.state.num?1:0}</p>
                {/*生命周期：<button onClick={this.changeFn}>点击</button>*/}
                {/*生命周期：<button onClick={this.changeFn.bind(this)}>点击</button>*/}
                生命周期：<button onClick={() => this.changeFn()}>点击</button>
            </Fragment>
        );
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentDidMount(){
        // 编译完成，并且渲染到真时的dom中
        // 可以做dom的处理
        // 可以做具体的事件监听
        // 某些插件的实例
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        // 跟dom相关的操作，在组件销毁前，一定在这里做相关操作
        // 比如事件的监听，计时器，插件的dom实例化
        console.log('componentWillUnmount');
    }

}

export default LifeCycle;
