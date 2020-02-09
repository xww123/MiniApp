// pages/home/home.js
// getApp()获取App()产生的示例对象
const app = getApp()

const name = app.globalData.name
const age = app.globalData.age
console.log(name)
Page({
  data: {
    message: '哈哈',
    list: [],
    counter: 0
  },
  handleGetUserInfo(e){
    console.log('--------')
    console.log(e)
  },
  // 监听页面的生命周期函数
  // 页面被加载出来
  onLoad(){
    console.log('onLoad')
    const _this = this
    // 异步调用
    wx.request({
      url: 'http://123.207.32.32:8000/api/hy/recommend',
      // 1.第一种传统写法
      success: function(res){
        console.log(res)
        const data = res.data.data.list
        // this.data.list = data
        _this.setData({
          list: data
        })
      }

      // 2.第二种函数使用，es6增强型写法
      // success(){}

      // 3.第三种箭头函数
      // success:(res)=>{
      //     console.log(res)
      //     const data = res.data.data.list
      //     // this.data.list = data
      //     this.setData({
      //       list: data
      //     })
      // }
    })
  },
  // 页面显示出来时会回调
  onShow(){
    console.log('onShow')
  },
  // 页面初次渲染完成时，只会执行一次
  onReady(){
    console.log('onReady')
  },
  // 页面隐藏时回调
  onHide(){
    console.log('onHide')
  },
  // 页面之间返回按钮点击时回调
  onUnload(){
    console.log('onUnload')
  },
  handleViewClick(){
    console.log('哈哈被点击了')
  },
  // ----------------其他事件--------------------------
  // 监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log('滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  },
  handleIncrement(e){
    console.log('in+++++',e)
    this.setData({
      counter: this.data.counter + 1
    })
  }

})
