// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '你好啊',
      duration:5000,
      icon:'success',
      // image: '/assets/icon/icon.png',
      mask:true,
      success:function(){
        console.log('success...')
      },
      fail:function(){
        console.log('show error...')
      },
      complete:function(){
        console.log('complete')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '真是的..',
      content: '这回是真的了呢',
      // showCancel:false,
      cancelText:'退出',
      cancelColor: 'red',
      success:function(res){
        console.log(res)
        if(res.cancel){
          console.log('点击了取消')
        }
        if(res.confirm){
          console.log('用户点击了确定按钮')
        }
      },
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: 'loading...',
      mask:true
      // 必须手动hideLoading才会让showLoading消失
    })
    setTimeout(()=>{
      wx.hideLoading()
    },3000)
  },
  handleActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: function(res){
        console.log(res)
      }
    })
  },
  onShareAppMessage:function(options){
    // console.log(options)
    return {
      title: '你好啊，李银河',
      path:'/pages/about/about',
      imageUrl: 'http://s11.mogucdn.com/mlcdn/c45406/171008_28ba9aade1cc95bjh1cfbb11c0ehi_640x960.jpg'
    }
  }
})
