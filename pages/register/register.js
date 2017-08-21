// register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    department:["平台部","人工智能实验室","产品研究部","测试部","总经办"],
    progress: false,
    index:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  choose: function(e){
    console.log(e);
    var select =  e.detail.value;
    this.setData({
      index:select
    })
  },
  //注册用户
  register: function(e){

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})