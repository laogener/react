import React,{Component,Fragment} from 'react';
import Style from './style1.css';
console.log(Style);
let inlineStyle = {
    backgroundColor:'blue'
}
class Style1 extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <Fragment>
                <p className={Style.pp}>测试css样式1</p>
                <p style={inlineStyle}>行內樣式</p>
            </Fragment>
        );
    }
}
export default Style1;