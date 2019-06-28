import React,{Component} from 'react';
// import LifeCycle from './LifeCycle';
import Style1 from './style/Style1';
import Style2 from './style/Style2';
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'lisi'
        }
        setTimeout(() => {
            this.setState({name:'zhangsan'})
        },3000);
    }

    render(){
        return (
            <div>
                {/*数据相关*/}
               {/*<LifeCycle name={this.state.name}/>*/}
               {/*样式相关*/}
                <Style1 />
                <Style2 />
            </div>
        );
    }

}

export default App;
