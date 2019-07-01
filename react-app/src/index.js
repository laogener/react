import React from 'react';
import ReactDOM from 'react-dom';
// import LifeCycle from './components/LifeCycle';
// import IfElseMap from './components/IfElseMap';
import Com from './components/Com';
// import Style from './components/Style';
// import './static/reset.css';

// ReactDOM.render(<Style />, document.getElementById('root'));
// ReactDOM.render(<LifeCycle />, document.getElementById('root'));
// ReactDOM.render(<IfElseMap />, document.getElementById('root'));
ReactDOM.render(<Com />, document.getElementById('root'));


// 销毁组件
// setTimeout(() =>{
//     let domFn = () => {
//         return (<div>新组件</div>)
//     }
//     ReactDOM.render(domFn(), document.getElementById('root'));
// });