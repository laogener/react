import React, {Component} from 'react';
import Store,{actions,ADDNUM} from '../redux/index';


class Child extends Component {
    constructor(props){
        super(props);
        this.state={
            num:props.num
        }
    }
    addNumHandle(){
        console.log(111);
        Store.dispatch(actions[ADDNUM]());
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({num:nextProps.num})
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