import React,{Component} from 'react';

class Child2 extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                Child2  {this.props.name}
            </div>
        );
    }

}

export default Child2;
