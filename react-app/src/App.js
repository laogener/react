import React,{Component} from 'react';


class App extends Component{
    constructor(props){
        // 做数据相关的操作
        // 1.数据的请求
        // 2.当前组建的检测
        super(props);
        this.state = {
            num:this.props.num ? this.props.num : 1
        };
        // this.changeFn = this.changeFn.bind(this);
        console.log('constructor');
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
        // 1.不能吊桶setstate进行数据的改变
        // 2.不做数据的产生和保存
        // 3.返回数据和拼接好的jsx结构
        console.log('render');
        return (
            <div>
                <p>{this.state.num}</p>
              {/*生命周期：<button onClick={this.changeFn}>点击</button>*/}
              {/*生命周期：<button onClick={this.changeFn.bind(this)}>点击</button>*/}
              生命周期：<button onClick={() => this.changeFn()}>点击</button>
            </div>
        );
    }
    componentDidMount(){
        // 编译完成，并且渲染到真时的dom中
        // 可以做dom的处理
        // 可以做具体的事件监听
        // 某些插件的实例
        console.log('componentDidMount');
    }
    componentWillReceiveProps (props){
        console.log(props);
        console.log('componentWillReceiveProps');

    }
}

export default App;
