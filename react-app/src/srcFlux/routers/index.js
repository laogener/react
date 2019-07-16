import React,{Component} from "react";
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import App from '../components/app';

// Index直接抛路由
import Index from '../components/index';


export default ()=>{
    return (
        <Router>
            <App>
                <Index />
            </App>
        </Router>
    )
}