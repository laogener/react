import React, {Component} from 'react';
import Store from '../redux/index'
import {actions,ADDNUM} from '../redux/index2'


class Child extends Component {
    constructor(props){
        super(props);
    }
    addNumHandle(){
        Store.dispatch(actions[ADDNUM]());
    }
    render() {
        return (
            <div>
                <h2>子组件</h2>
                <button onClick={() => this.addNumHandle()}>增加数值</button>
            </div>
        );
    }
}

export default Child;