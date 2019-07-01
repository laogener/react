import React,{Component} from 'react';
class Com extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'请输入名字',
            sex:'男',
            sport:[],
            city:'上海'
        }
    }
    changeModule(e){
        // 针对checkbox的操作，只有一个时是boolean，多个时为数组
        var checkBoxHandle = () =>{
            // dom筛选
            let $elall =document.getElementsByTagName('*');
            let domFilter = [...$elall].filter((i) =>{
                if(i.name == e.target.name){
                    return true
                }else {
                    return false
                }
            })
            console.log(domFilter);
            // 判断为数组还是boolean
            if(domFilter.length > 1){
                var sports = [...this.state.sport];
                if(!e.target.checked){
                    sports.splice(sports.indexOf(e.target.value,1))
                }else {
                    sports.push(e.target.value);
                }
            }else{
                var sports = e.target.checked;
            }
            return sports
        }


        this.setState({[e.target.name]:e.target.type == 'checkbox' ?  checkBoxHandle() : e.target.value},()=>{
            console.log(this.state.sport)
        });

    }
    formeD(){
        console.log(this.state)
    }
    render(){
        return (
            <div>
                <ul>
                    <li>
                        <label htmlFor="username">
                            用户名：
                            {/*<input id="username" type="text" name='username' defaultValue={this.state.username} onChange={(e) => this.changeModule(e)}/>*/}
                            {/*手动双向绑定*/}
                            <input id="username" name='username' type="text" value={this.state.username} onChange={(e) => this.changeModule(e)}/>
                        </label>


                    </li>
                    <li>
                        <label htmlFor="sex">
                            性别：
                            男
                            <input id="sex" name='sex' type="radio" value="男" checked={this.state.sex == '男'} onChange={(e) => this.changeModule(e)}/>
                            女：
                            <input id="sex" name='sex' type="radio" value="女" checked={this.state.sex == '女'} onChange={(e) => this.changeModule(e)}/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="sport">
                            运动：
                            足球：
                            {/*<input name='sport' type="checkbox" checked={this.state.sport.indexOf('足球') > -1} onChange={(e) => this.changeModule(e)}/>*/}
                            <input name='sport' type="checkbox" value="足球" checked={typeof (this.state.sport) != "boolean" ? this.state.sport.some((i)=>{if(i == '足球'){return true}else{return false}}): this.state.sport} onChange={(e) => this.changeModule(e)}/>
                            篮球：
                            <input name='sport' type="checkbox" value="篮球" checked={typeof (this.state.sport) != "boolean" ? this.state.sport.some((i)=>{if(i == '篮球'){return true}else{return false}}): this.state.sport} onChange={(e) => this.changeModule(e)}/>
                            羽毛球：
                            <input name='sport' type="checkbox" value="羽毛球" checked={typeof (this.state.sport) != "boolean" ? this.state.sport.some((i)=>{if(i == '羽毛球'){return true}else{return false}}): this.state.sport} onChange={(e) => this.changeModule(e)}/>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="city">
                            城市：
                            <select name="city" id="city" defaultValue={this.state.city}  onChange={(e) => this.changeModule(e)}>
                                <option value="北京">北京</option>
                                <option value="上海">上海</option>
                                <option value="广州">广州</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <button onClick={() =>this.formeD()}>提交</button>
                    </li>
                </ul>
            </div>
        );
    }

}

export default Com;
