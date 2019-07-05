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
                    <Route path="/test" render={RouterRedirect} />
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
