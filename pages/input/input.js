// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleInput(event){
    console.log('用户输入内容:', event.detail)
  },
  handleFocus(event){
    console.log('input获取输入焦点:',event.detail)
  },
  handleBlur(event){
    console.log('input失去焦点:',event)
  }

})