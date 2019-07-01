import React,{Component} from 'react';
class IfElseMap extends Component{
    constructor(props){
        super(props);
        this.state = {
            state:false,
            list:[1,2,3,4,5]
        }
    }

    render(){
        // 如果state的对象数组里面有唯一性的属性，如id。就用id做key的值，减少重绘

        let lis = this.state.list.map((i,index) => {
            return <li key={index}>{i}</li>
        })
        let el1 = <div>这是一个true</div>;
        let el2 = <div>这是一个false</div>;
        // let el = null;
        // if(this.state){
        //     el =  el1
        // }else {
        //     el =  el2
        // }
        // return (
        //     <div>
        //         {el}
        //     </div>
        // );

        return (
            <div>
                {/*{this.state ? el1 : el2}*/}
                {this.state &&el1}
                <ul>{lis}</ul>
            </div>
        );
    }

}

export default IfElseMap;
