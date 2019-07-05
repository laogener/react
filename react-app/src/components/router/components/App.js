import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul className='app'>
                <li><Link to='/tab'>tab</Link></li>
                <li><Link to='/hocgetdata'>高阶组件获取数据</Link></li>
                <li><Link to='/hocgetdataasync'>高阶组件获取数据，接口间存在依赖</Link></li>
                <li><Link to='/hocHandleData'>高阶组件获取数据并处理数据，双重高阶</Link></li>
                <li><Link to='/lazyComponent'>组件懒加载</Link></li>
                {this.props.children}
            </ul>
        );
    }

}

export default App;
