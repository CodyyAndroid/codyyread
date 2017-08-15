// my.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto:'test',
    userInfo: {},
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  if(app.globalData.userInfo){
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    })
  }else{
    //请求用户数据callback
    app.userInfoReadyCallBack = res=>{
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  //获取用户头像信息
  getUserInfo: function (e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

    console.log(e.detail.userInfo);
  }
  
})