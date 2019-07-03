import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Index extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                Tab页index
                <p>
                    <Link to='/tab/tab1'>tab1</Link>
                    <Link to='/tab/tab2'>tab2</Link>
                </p>

                <p>{this.props.children}</p>
            </div>
        );
    }

}

export default Index;
