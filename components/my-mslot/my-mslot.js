// components/my-mslot/my-mslot.js
Component({
  /**
   * 组件的属性列表
   * 让使用者可以给组件传入数据
   */
  properties: {

  },

  /**
   * 组件的初始数据
   * 定义组件内部的初始化数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   * 用于定义组件内部的函数
   * 
   */
  methods: {

  },

  /*
   * 定义组件的配置选项
   * multipleSlots: 在使用多插槽的时候需要设置为true
   * styleIsolation:设置样式的隔离方式
   */
  options: {
    multipleSlots: true
  },
  /*
   * 外界给组件传入额外的样式
   */
  externalClasses: [],
  /*
   * 可以监听properties/data的改变
   */
  observers: {
    counter: function(newval) {
      console.log(newval)
    }
  },
  //-------- 组件中监听生命周期函数
  /*
   *  1.监听组件本身的生命周期
   * 
   */
  lifetimes: {
    created(){
      console.log('self组件被创建出来')
    },
    attached(){
      console.log('self组件被添加到页面')
    },
    ready(){
      console.log('self组件被渲染出来')
    },
    move(){
      console.log('self组件被移动到另外一个节点')
    },
    detached(){
      console.log('self组件被移除掉')
    }
  },
  /*
   *  2.监听所在页面的生命周期
   */
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来时')
    },
    hide() {
      console.log('监听组件所在页面隐藏起来时')
    },
    resize() {
      console.log('监听页面尺寸的改变')
    }
  }

})