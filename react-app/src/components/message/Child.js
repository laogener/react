import React,{Component} from 'react';
import observer from '../../tool/observer';
class Child extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'lisi'
        };
        // this.props.cb(this.state.name);
    }
    componentDidMount() {
        observer.$emit('up',this.state.name)
    }

    render(){
        return (
            <div>
                子组件
            </div>
        );
    }

}

export default Child;
