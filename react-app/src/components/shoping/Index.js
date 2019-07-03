import React,{Component} from 'react';
import observer from '../../tool/observer';
import '../../mock/index'
import axios from 'axios';
import AllCount from './AllCount';
import Commodity from './Commodity';
class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            allState:true
        }
        axios.post('/postdata1',  {
        // axios.post('/getJoke',  {
        //     params: {
        //         page: 1,
        //         count: 10,
        //         type: 'video',
        //     }
        }).then((res) => {
            this.setState({data:res.data.list.map((i) => {
                    i.state = true;
                    return i
                })},() =>{console.log(this.state.data)})
        })
        this.eventListener();
    }
    allStateFn(){
        this.setState({
            allState:!this.state.allState,
            data:this.state.data.map((i) => {
                i.state = !this.state.allState;
                return i
            })
        });
    }
    eventListener(){
        observer.$on('changeState',(item)=>{
            this.setState({
                data:this.state.data.map((i) => {
                    if(i.name == item.name){
                        i.state = !i.state;
                    }
                    return i
                }),
                allState:this.state.data.every((i) => i.state)
            });
        })
        observer.$on('changeNum',(num,item)=>{
            console.log(num);
            console.log(item);
            this.setState({
                data:this.state.data.map((i) => {
                    if(i.name == item.name){
                        i.num = num;
                    }
                    return i
                }),
            });
        })
    }
    render(){
        return (
            <div>
                <nav>
                    <h4>购物车</h4>
                    全选 <input type="checkbox" checked={this.state.allState} onChange={() => {this.allStateFn()}}/>
                </nav>
                <ul>
                    {this.state.data.map((i,index) => {
                        return   <Commodity key={index} item={i}/>
                    })}
                </ul>
                <AllCount  data={this.state.data}/>
            </div>
        );
    }

}

export default Index;
