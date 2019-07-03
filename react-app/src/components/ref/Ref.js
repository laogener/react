import React,{Component} from 'react';
import Child from './Child'
class Ref extends Component{
    constructor(props){
        super(props);
    }
    getData(){
        console.log(this.refs)
    }
    render(){
        return (
            <div>
                <button onClick={() => this.getData()}>点击</button>
                <p ref='aa'>被获取的dom节点</p>
                <Child ref='child'/>
            </div>
        );
    }

}

export default Ref;
