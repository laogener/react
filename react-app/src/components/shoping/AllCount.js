import React,{Component} from 'react';
class AllCount extends Component{
    constructor(props){
        super(props);
    }
    computerCount(){
        let count = 0;

        if(this.props.data.length>0){
            this.props.data.forEach((i)=>{
                if(i.state){
                    count += i.price * i.num
                }
            });
            return count
        }

    }
    render(){
        return (
            <div>
                总价：{this.computerCount()}
            </div>
        );
    }

}

export default AllCount;
