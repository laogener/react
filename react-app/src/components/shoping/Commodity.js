import React,{Component} from 'react';
import observer from '../../tool/observer';
class Commodity extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:this.props.item
        }
    }
    changeFn(i){
        observer.$emit('changeState',this.state.data)
    }
    changeNum(item){
        if(item == 'jia'){
            observer.$emit('changeNum',this.state.data.num+1,this.state.data)
        }else{
            if(this.state.data.num > 0){
                observer.$emit('changeNum',this.state.data.num-1,this.state.data)
            }
        }
    }
    render(){
        return (
                <li>
                    <input type="checkbox" checked={this.state.data.state} onChange={()=>{this.changeFn()}}/>
                    <span>  商品名：{this.state.data.name}  </span>
                    <span>  价格：{this.state.data.price}  </span>
                    <span>  数量：{this.state.data.num}  </span>
                    <button onClick={(e) => this.changeNum('jian',e)}>-</button>
                    <button onClick={(e) => this.changeNum('jia',e)}>+</button>
                </li>
        );
    }

}

export default Commodity;
