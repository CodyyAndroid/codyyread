// login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  register: function (e) {
    // this.setData({
    //   hidden: true
    // })
    console.log(e);
    var id = e.currentTarget.id;
    var url = "../register/register?id=" + id;
    console.log(url);
    wx.navigateTo({
      url: url,
    })
  },
  // 登录成功跳转到首页
  golatest: function(e){

    console.log(e);
    var id = e.currentTarget.id;
    var url = "/pages/latest/latest";
    console.log(url);

    wx.switchTab({
      url: url,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})