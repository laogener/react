import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
class NavLinks extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h2>NavLink组件</h2>
                <NavLink to='/navlink/child1' activeStyle={{color:'red'}}>点击child1</NavLink>
            </div>
        );
    }

}

export default NavLinks;
