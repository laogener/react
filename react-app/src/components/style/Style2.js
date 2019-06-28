import React,{Component,Fragment} from 'react';
import style from '../../css/style2.css';
class Style2 extends Component{
    constructor(props){
        super(props);
    }
    render(){

        return (
            <Fragment>
                <p className={style.pp}>测试css样式2</p>
            </Fragment>
        );
    }
}
export default Style2;