// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  handleChooseAlbum(){
    // console.log('-----')
    const _this = this
    wx.chooseImage({
      success: function(res) {
        console.log(res)
        // 1.取出路径
        const path = res.tempFilePaths[0]

        // 2.设置imagePath
        _this.setData({
          imagePath: path
        })
      },
    })
  },
  handleImageLoad(){
    console.log('图片加载完成')
  }
})