//app.js
App({
  onLaunch: function () {
    console.log('小程序初始化完成了: onLaunch')
    
  },
  onShow: function (options) {
    console.log('界面显示出来：onShow')
    // 判断小程序的进入场景
    console.log(options)
    switch (options.scene) {
      case 1001:
        break;
    }
    // 2.获取用户信息，并且获取到用户信息之后，将用户的信息传递给服务器
    wx.getUserInfo({
      success: function (res) {
        console.log('getUserInfo:success')
        console.log(res)
      }
    })
  },
  globalData:{
    name: 'codewhy',
    age:19
  }
})