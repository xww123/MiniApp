// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  onUnload(){
    // console.log('页面退出')
    // getCurrentPages当前所有栈的页面
    const pages = getCurrentPages()
    // console.log(pages)
    const home=pages[pages.length-2]

    // 2.调用页面对象的setData
    home.setData({
      message: '呵呵呵'
    })
  },
  handleBackHome(){
    wx.navigateBack({
      delta:1
    })
  }

})