import React, {Component} from 'react';
import {Route} from "react-router-dom";

import Store,{actions,GETDATALIST} from "../redux/index";
import {connect} from "react-redux";

import Child from './Child';


class Index extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            num:this.props.num
        };
        Store.dispatch(actions[GETDATALIST]())
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({num:nextProps.num})
    }

    render() {
        console.log(222);
        console.log(this.props);
        return (
            <div>
                首页
                {this.state.num}
                <main>
                    <Child num={this.state.num}/>
                </main>
                <div>{this.props.dataList}</div>
            </div>
        );
    }
    // componentWillUnmount() {
    //     Store.unsubscribe(()=>this.reduxListen());
    // }
}

let select = (state)=>{
    return state
};
let dataHandleIndex = connect(select)(Index);

let routerHandle = ()=>{
    return <Route exact path='/' component={dataHandleIndex}/>
};
export default routerHandle;