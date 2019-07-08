import React,{Component} from "react";
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import App from '../components/App';

// Index直接抛路由
import Index from '../components/Index';


import User from '../components/user/User'

export default ()=>{
    return (
        <Router>
            <App>
                <Index />
                <User />
            </App>
        </Router>
    )
}