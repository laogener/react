import React from 'react';
import ReactDOM from 'react-dom';
// import LifeCycle from './components/LifeCycle';
// import IfElseMap from './components/IfElseMap';
// import Com from './components/Com';
// import Style from './components/Style';
//  import Parent from './components/message/Parent';
//  import Index from './components/shoping/Index';
 import Ref from './components/ref/Ref';


// import './static/reset.css';

// ReactDOM.render(<Style />, document.getElementById('root'));
// ReactDOM.render(<LifeCycle />, document.getElementById('root'));
// ReactDOM.render(<IfElseMap />, document.getElementById('root'));
// ReactDOM.render(<Com />, document.getElementById('root'));
// ReactDOM.render(<Parent />, document.getElementById('root'));
// ReactDOM.render(<Index />, document.getElementById('root'));
ReactDOM.render(<Ref />, document.getElementById('root'));


// 销毁组件
// setTimeout(() =>{
//     let domFn = () => {
//         return (<div>新组件</div>)
//     }
//     ReactDOM.render(domFn(), document.getElementById('root'));
// });