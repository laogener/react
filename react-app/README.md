rcc快捷键创建class

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

有时候我们的应用只是整个系统中的一个模块，比如一个使用了ASPNET MVC中的area的后台管理模块，应用中的URL总是以 http://localhost/admin/ 开头。这种情况下我们总不能每次定义Link和Route的时候都带上admin吧？react-router已经考虑到了这种情况，所以为我们提供了一个basename属性。为BrowserRouter设置了basename之后，Link中就可以省略掉admin了，而最后渲染出来的URL又会自动带上admin。