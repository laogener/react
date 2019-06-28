import React,{Component,Fragment} from 'react';
import '../../css/style2.modules.css';
class Style2 extends Component{
    constructor(props){
        super(props);
    }
    render(){

        return (
            <Fragment>
                <p className={'pp'}>测试css样式2</p>
            </Fragment>
        );
    }
}
export default Style2;