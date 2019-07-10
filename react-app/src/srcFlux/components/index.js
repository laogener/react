import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Store,{actions} from '../flux/Index';
import Child from './Child';


class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            num:Store.getDate('num')
        };
        Store.observer(()=>{
            this.setState({num:Store.getDate('num')})
        })
        // flux.observer.$on('change',()=>{
        //     this.setState({num:flux.initState.num})
        // })
        // setInterval(()=>{
        //     flux.initState.num++
        //     flux.observer.$emit('change');
        // },1000)
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
}

let routerHandle = ()=>{
    return <Route exact path='/' component={Index}/>
}
export default routerHandle;