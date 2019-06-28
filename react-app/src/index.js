import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './static/reset.css';

ReactDOM.render(<App />, document.getElementById('root'));


// 销毁组件
// setTimeout(() =>{
//     let domFn = () => {
//         return (<div>新组件</div>)
//     }
//     ReactDOM.render(domFn(), document.getElementById('root'));
// });