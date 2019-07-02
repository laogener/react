import React,{Component} from 'react';
// 父子，兄弟组件传值
import Child from './Child';
import Child2 from './Child2';

// 事件监听
import observer from '../../tool/observer';

class Parent extends Component{
    constructor(props){
        super(props);
        observer.$on('up',(data) => {
            this.setState({name:data})
        });
        this.state = {
            name:null
        }
    }
    getChildData(item){
        this.setState({name:item})
    }
    render(){
        return (
            <div>
                {this.state.name}
                {/*<Child cb={(item)=>this.getChildData(item)}/>*/}
                {/*<Child2 name={this.state.name}/>*/}
                <Child />
            </div>
        );
    }

}

export default Parent;
