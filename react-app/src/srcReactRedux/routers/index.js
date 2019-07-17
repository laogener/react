import React,{Component} from "react";
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";

// Index直接抛路由
import Index from '../components/index';


export default ()=>{
    return (
        <Router>
                <Index />
        </Router>
    )
}