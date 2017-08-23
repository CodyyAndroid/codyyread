// login.js
const Api = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    userName: '',
    passwd: '',
    auto: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var name = wx.getStorageSync('userid');
    var passwd = wx.getStorageSync('passwd');
    this.setData({
      userName: name,
      passwd: passwd
    })
    //已经登录则自动登录
    if (name && passwd) {
      this.loginCodyy({});
    }
  },
  //获取用户名
  inputUserName: function (e) {
    // console.log(e);
    this.setData({
      userName: e.detail.value
    })
  },
  //获取密码
  inputPasswd: function (e) {
    // console.log(e);
    this.setData({
      passwd: e.detail.value
    })
  },
  //捕获是否自动登录
  autoSave: function (e) {
    // console.log(e);
    this.setData({
      auto: e.detail.value
    })
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
  loginCodyy: function (e) {
    console.log('begin login ...');
    //show progress .
    this.setData({
      hidden: true
    })


    var param = {
      userId: this.data.userName,
      password: this.data.passwd,
      deviceType: 1
    }

    //send post request .
    var that = this;
    wx.request({
      url: Api.login(),
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: param,
      success: function (res) {
        console.log(res);
        that.setData({
          hidden: false
        })
        // do action .
        var data = res.data;
        if ("0000" == data.code) {
          // 保存用户信息
          if (that.data.auto) {
            wx.setStorageSync('userid', param.userId);
            wx.setStorageSync('passwd', param.password);
          }

          // jump to main page .
          that.golatest({
            currentTarget: {
              id: ''
            }
          });
        } else {
          wx.showToast({
            title: data.msg,
          })
        }
      }
    }
    )

    //跳转到主页面.
    // this.golatest();
  },
  // 登录成功跳转到首页
  golatest: function (e) {

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