constructor里面做数据相关的操作  

render()纯函数：  
1.不能调用setstate进行数据的改变  
2.不做数据的产生和保存  
3.返回数据和拼接好的jsx结构  

this.setState():
是异步执行的，视图是同步；vue是同步的视图是异步的  

componentDidMount():  
编译完成，并且渲染到真时的dom中,可以做dom的处理,可以做具体的事件监听,某些插件的实例
 
生命周期：https://blog.csdn.net/qq_34134278/article/details/81328464

[]单独使用时默认的是引用地址，为true；运算符比较时被转换为0，false  

react router英文官方文档：https://reacttraining.com/react-router/web/guides/quick-start  

