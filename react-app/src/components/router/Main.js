import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './components/Index'
class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Router>
                <Route path="/" component={Index}/>
            </Router>
        );
    }

}

export default Main;
