import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='app'>
                <Link to='/tab'>tab</Link>
                {this.props.children}
            </div>
        );
    }

}

export default App;
