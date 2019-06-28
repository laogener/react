import React,{Component,Fragment} from 'react';
import style from '../../css/style1.css';
class Style1 extends Component{
    constructor(props){
        super(props);
    }
    render(){

        return (
            <Fragment>
                <p className={style.pp}>测试css样式1</p>
            </Fragment>
        );
    }
}
export default Style1;