import React,{Component} from 'react';
import {
    HashRouter as Router,//后面带#
    // BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Index from './components/Index';
// import Tab from './components/Tab';
import Tab from './components/tab/Index';
import Tab1 from './components/tab/Tab1';
import Tab2 from './components/tab/Tab2';
import App from './components/App';
import NavLinks from './components/navlink/NavLinks';
import Hocgetdata from './components/Hocgetdata';
import Hocgetdataasync from './components/Hocgetdataasync';
import HocHandleData from './components/HocHandleData';

// 封装了一个组件，采用属性传值得方式，将将要加载的组件使用import方法进行包装，传入LazyComponent组件，然后进行异步加载，加载完毕进行渲染（封装的LazyComponent组件）
import LazyComponent from './tool/lazyComponent';
let lazyComponentHandle = ()=>{
    return <LazyComponent lazy={() => {return import('./components/LazyCom')}} />
}

let childRouter = () => {
    return (
        <Tab>
            <Switch>
            <Route path="/tab/tab1" component={Tab1} />
            <Route path="/tab/tab2" component={Tab2} />
            </Switch>
        </Tab>
    )
}

let NavLinkRouter = () => {
    return (
        <NavLinks>
            <Switch>
                <Route path="/navlink/child1" render={() => <h3>子组件child1</h3>} />
                <Route path="/navlink/child2" render={() => <h3>子组件child2</h3>} />
            </Switch>
        </NavLinks>
    )
}

let RouterRedirect = ()=>{
    return (<Redirect to='/Index' />)
}

let RouterBase = ()=>{
    return (
        <Router>
            <App>
                <Switch>
                    {/*1.越详细的路由越靠前*/}
                    {/*2.给权限大的路由加一个exact属性，精确匹配*/}
                    {/*3.路由组件渲染方式：*/}
                        {/*1.component，可以渲染状态组件和无状态组件*/}
                        {/*2.render只可以渲染无状态组件*/}

                    <Route exact path="/" component={Index}/>
                    {/*<Route path="/tab" component={childRouter} />*/}
                    <Route path="/tab" render={childRouter} />
                    <Route path="/navlink" render={NavLinkRouter} />
                    <Route path="/hocgetdata" component={Hocgetdata} />
                    <Route path="/hocgetdataasync" component={Hocgetdataasync} />
                    <Route path="/hocHandleData" component={HocHandleData} />
                    <Route path="/test" render={RouterRedirect} />

                    <Route path="/lazyComponent" component={lazyComponentHandle} />

                </Switch>
            </App>
        </Router>
    )
}
// class Main extends Component{
//     constructor(props){
//         super(props);
//     }
//
//     render(){
//         return (
//             <Router>
//                 <App>
//                     <Switch>
//                         {/*1.越详细的路由越靠前*/}
//                         {/*2.给权限大的路由加一个exact属性，精确匹配*/}
//                         <Route exact path="/" component={Index}/>
//                         <Route exact path="/tab" component={Tab} />
//                     </Switch>
//                 </App>
//
//
//             </Router>
//         );
//     }
//
// }
//
// export default Main;
export default RouterBase;
