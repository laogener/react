import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Store from '../redux/index'
import Child from './Child';


class Index extends Component {
    constructor(props){
        super(props);
        console.log(Store.getState());
        this.state = {
            num:Store.getState().num
        };
        Store.subscribe(()=>this.reduxListen());

        // Store.getState().num = 3;
        // console.log(Store.getState().num )
    }
    reduxListen(){
        this.setState({
            num:Store.getState().num
        });
    }
    render() {

        return (
            <div>
                首页
                {this.state.num}
                <main>
                    <Child/>
                </main>
            </div>
        );
    }
    componentWillUnmount() {
        Store.unsubscribe(()=>this.reduxListen());
    }
}

let routerHandle = ()=>{
    return <Route exact path='/' component={Index}/>
}
export default routerHandle;