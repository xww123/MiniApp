// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服','裤子', '鞋子']
  },

  handleBtnClick(){
    console.log('按钮发生点击!')
  },
  handleTouchStart (){
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd(e) {
    console.log('handleTouchEnd:',e)
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongpress() {
    console.log('handleLongpress')
  },
  handleEventClick(e){
    console.log('-----',e)
  },
  handleInner(e){
    console.log('inner:',e)
  },
  handleOuter(e) {
    console.log('outer:', e)
  },
  handleItemClick(e){
    // console.log(e)
    const dataset = e.currentTarget.dataset
    const title = dataset.item
    const index = dataset.index
    console.log(title,index)
  },

  // --------------事件的冒泡和捕获
  handleCaptureView1(){
    console.log('handleCaptureView1:捕获')
  },
  handleBindView1(){
    console.log('handleBindView1:冒泡')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2:捕获')
  },
  handleBindView2() {
    console.log('handleBindView2:冒泡')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3:捕获')
  },
  handleBindView3() {
    console.log('handleBindView3:冒泡')
  },
})