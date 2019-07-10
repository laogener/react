import React, {Component} from 'react';
import Popup from  '../css/popup.module.css';
import Observer from '../../../tool/observer'


export default class extends Component{
    constructor(props){
        super(props);
        this.state = {
            state:1
        }
    }
    changeStateFn(state){
        let obj = {};
        if(this.props.type == 'redpack'){
            console.log(222);
            if(state == 'ok'){
                obj = {
                    redpacketState:2
                }
                sessionStorage.setItem('redpacketState',2);
            }else{
                obj = {
                    redpacketState:3
                }
            }
            obj ={
                signState:1,
                ...obj
            }
        }else{
            console.log(111);
            if(state == 'ok'){
                obj = {
                    signState:2
                }
            }else{
                obj = {
                    signState:3
                }
            }
            sessionStorage.setItem('signState',2);
            obj ={...obj}
        }
        Observer.$emit('change',obj);
    }
    render() {
        return (
            <div className={Popup.popup}>
                <h3>{this.props.msg}</h3>
                <p>
                    <button onClick={() => this.changeStateFn('ok')}>确定</button>
                    <button onClick={() => this.changeStateFn('no')}>取消</button>
                </p>
            </div>
        )
    }
}