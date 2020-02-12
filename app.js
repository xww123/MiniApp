//app.js
const TOKEN = 'token'
App({
  //对象：小程序关闭掉
  globalData:{
    token: ''
  },
  onLaunch: function () {
    // console.log('小程序初始化完成了: onLaunch')

    // 1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)

    // 2.判断token是否有值
    if(token && token.length !== 0){
      //已经有token,只要验证token是否过期
      this.check_token(token) //验证token是否过期
    }else{
      this.login()
    }
  },
  check_token(token){
    console.log('执行了验证token的操作:'+token)
    wx.request({
      url:'http://123.207.32.32:3000/auth',
      method: 'post',
      header:{
        token
      },
      success:(res)=>{
        // console.log('登录:')
        // console.log(res)
        if(!res.data.errCode){
          // token是有效的
          this.globalData.token = token
        }else{
          // token无效，需要重新登录
          this.login()
        }
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  },
  login(){
    console.log('执行了登录操作')
    wx.login({
      success: (res) => {
        // console.log(res)
        // code只有5分钟的有效期
        // 1.获取code
        const code = res.code
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            // console.log(res)
            // 1.取出token
            const token = res.data.token;
            // 2.将token保存在globalData中
            this.globalData.token = token
            // 3.进行本地存储
            wx.setStorageSync('token', token)
          }
        })
      }
    })
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
