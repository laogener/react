import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
class Child1 extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h2>NavLink组件child1</h2>
            </div>
        );
    }

}

export default Child1;
