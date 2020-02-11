// pages/home/home.js
// getApp()获取App()产生的示例对象
import request from '../../service/network.js'
const app = getApp()

const name = app.globalData.name
const age = app.globalData.age
console.log(name)
Page({
  data: {
    message: '哈哈',
    list: []
  },
  // 监听页面的生命周期函数
  // 页面被加载出来
  onLoad(){
    const _this = this
    // ------------------1.原生的方式发送网络请求-----------
    // this.get_data_origin()

    // ------------------2.使用封装的request发送网络请求----------
    // Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://123.207.32.32:8000/api/hy/recommend'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
  get_data_origin(){

    // 异步调用
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/hy/home/data',
    //   data:{
    //     type:'sell', 
    //     page:1
    //   },
    //   // 1.第一种传统写法
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
    // 2.post请求
    wx.request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'coderwhy',
        age: 18
      },
      // 1.第一种传统写法
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log('---')
        console.log(err)
      }
    })
  }
  
})
