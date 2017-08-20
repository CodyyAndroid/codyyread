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
  goMain: function (e) {
    // this.setData({
    //   hidden: true
    // })
    console.log(e);
    var id = e.currentTarget.id;
    var url = "../latest/latest?id=" + id;
    console.log(url);
    wx.navigateTo({
      url: url,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})