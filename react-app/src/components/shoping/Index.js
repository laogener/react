import React,{Component} from 'react';

import '../../mock/index'
import axios from 'axios';
import AllCount from './AllCount';
import Commodity from './Commodity';
class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
        axios.post('/postdata1',  {
        // axios.post('/getJoke',  {
        //     params: {
        //         page: 1,
        //         count: 10,
        //         type: 'video',
        //     }
        }).then((res) => {
            this.setState({data:res.data.list})
        })
    }

    render(){
        return (
            <div>
                <nav>
                    <h4>购物车</h4>
                    全选 <input type="checkbox"/>
                    <Commodity />
                    <AllCount />
                </nav>
            </div>
        );
    }

}

export default Index;
