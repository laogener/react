import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
class NavLinks extends Component{
    constructor(props){
        super(props);
    }
    fn(e){
        console.log(e)
    }
    render(){
        return (
            <div>
                <h2>NavLink组件</h2>
                <NavLink to='/navlink/child1' isActive={(e) => this.fn(e)} activeStyle={{color:'red'}}>点击child1</NavLink>
                <NavLink to='/navlink/child2' activeStyle={{color:'red'}}>点击child2</NavLink>
            </div>
        );
    }

}

export default NavLinks;
