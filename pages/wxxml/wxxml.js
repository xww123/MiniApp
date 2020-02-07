// pages/wxxml/wxxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '你好小程序',
    lastname: 'bryant',
    firstname: 'kobe',
    age:12,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: false,
    score: 50
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor(){
    this.setData({
      isActive : !this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score: this.data.score + 6
    })
  }

})