import React,{Component} from 'react';

class LazyCom extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h3>此组件间为懒加载组件</h3>
            </div>
        );
    }

}

export default LazyCom;
