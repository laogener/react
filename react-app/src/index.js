import React from 'react';
import ReactDOM from 'react-dom';
// import LifeCycle from './components/LifeCycle';
// import IfElseMap from './components/IfElseMap';
// import Com from './components/Com';
// import Style from './components/Style';
//  import Parent from './components/message/Parent';
//  import Index from './components/shoping/Index';
//  import Ref from './components/ref/Ref';
//  import Main from './components/router/Main';
//  import Router from './srcLogin/routers/Index';
 import Router from './srcFlux/routers/Index';


// import './static/reset.css';

// ReactDOM.render(<Style />, document.getElementById('root'));
// ReactDOM.render(<LifeCycle />, document.getElementById('root'));
// ReactDOM.render(<IfElseMap />, document.getElementById('root'));
// ReactDOM.render(<Com />, document.getElementById('root'));
// ReactDOM.render(<Parent />, document.getElementById('root'));
// ReactDOM.render(<Ref />, document.getElementById('root'));
// ReactDOM.render(<Index />, document.getElementById('root'));
// ReactDOM.render(<Main />, document.getElementById('root'));
ReactDOM.render(<Router />, document.getElementById('root'));


// 销毁组件
// setTimeout(() =>{
//     let domFn = () => {
//         return (<div>新组件</div>)
//     }
//     ReactDOM.render(domFn(), document.getElementById('root'));
// });