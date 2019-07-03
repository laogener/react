import Mock from 'mockjs';


export default Mock.mock('/postdata1','post',{
    success: true,
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list': [
        {name:'商品1',price:10,num:0},
        {name:'商品2',price:20,num:1},
        {name:'商品3',price:30,num:0},
        {name:'商品4',price:40,num:0},
        {name:'商品5',price:50,num:0}
    ]
})