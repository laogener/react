import React, {Component} from 'react';
import Store,{actions} from '../flux/Index'


class Child extends Component {
    constructor(props){
        super(props);
    }
    addNumHandle(){
        Store.dispatch(actions.addNum());
        console.log(Store.getDate('num'));
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