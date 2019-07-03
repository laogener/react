import React,{Component} from 'react';
class Commodity extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'lisi'
        }
    }

    render(){
        return (
            <ul>
                <li>
                    <input type="checkbox"/>
                    <span>商品1</span>
                    <span>价格1</span>
                    <span>数量：</span>
                    <button>-</button>
                    <button>+</button>
                </li>
            </ul>
        );
    }

}

export default Commodity;
