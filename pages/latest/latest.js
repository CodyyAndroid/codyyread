// latest.js
var Api = require("../../utils/api.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'最新消息',
    latest:[],
    hidden:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData();
  },
  onPullDownRefresh: function(){
    this.fetchData();
    console.log("onPullDownRefresh",new Date());
  },
  redictDetail: function(e){
    var id = e.currentTarget.id,url = '../detail/detail?id='+id;

    wx.navigateTo({
      url: url,
    })
  },
  /**
   * 获取网络数据.
   */
  fetchData: function () {
    var that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: Api.getLatestTopic({
        p: 1
      }),
      success: function (res) {
        console.log(res);
        that.setData({
          latest: res.data
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  scan:function(){
    wx.scanCode({
      success:(res)=>{
        console.log(res);
      }

    })
  }
})