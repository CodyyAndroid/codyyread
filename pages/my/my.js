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
  //跳转到借阅图书列表
  goRecord:function(e){
    console.log("go record function involved !");
    var id = e.currentTarget.id;
    var url = "../bookList/bookList?id="+id;
    console.log(url);
    wx.navigateTo({
      url: url,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  //跳转到设置页面
  navigate2Setting:function(e){
     var id = e.currentTarget.id;
     var url = "../setting/setting?id=" + id;
     wx.navigateTo({
       url: url,
     })
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