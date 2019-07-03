import React,{Component} from 'react';
import {
    HashRouter as Router,//后面带#
    // BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Index from './components/Index';
// import Tab from './components/Tab';
import Tab from './components/tab/Index';
import Tab1 from './components/tab/Tab1';
import Tab2 from './components/tab/Tab2';
import App from './components/App';

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
let RouterBase = ()=>{
    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/tab" component={childRouter} />
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
