// register.js
const Api = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    department:["平台部","人工智能实验室","产品研究部","测试部","总经办"],
    progress: false,
    index:0,
    userno:'',
    mail:'',
    passwd:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  showTip: function(e){
    console.log('showTip()~');
    var value = this.data.hidden;
    this.setData({
      hidden: !value
    })
  },
  //获取用户名/邮箱
  inputUserNo: function (e) {
    // console.log(e);
    this.setData({
      userno: e.detail.value
    })
  },
  //获取用户名/邮箱
  inputUserName: function (e) {
    // console.log(e);
    this.setData({
      mail: e.detail.value
    })
  },
  //获取密码
  inputPasswd: function (e) {
    // console.log(e);
    this.setData({
      passwd: e.detail.value
    })
  },
  choose: function(e){
    console.log(e);
    var select =  e.detail.value;
    var str = this.data.department[select];
    this.setData({
      index:select
    })
  },
  //注册用户
  register: function(e){

    //show progress .
    this.setData({
      progress: true
    })

    var userNo = this.data.userno;
    var mail = this.data.mail;
    var passwd = this.data.passwd;
    var department = this.data.department[this.data.index];

    var param = {
      userId: userNo,
      mail: mail,
      password: passwd,
      department: department,
    }

    console.log(param);

    var that = this;
    //发送注册请求.
    wx.request({
      url: Api.register(),
      header:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      method:'POST',
      data: param,
      success: function(res) {
        console.log(res);
        that.setData({
          progress: false
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
    })

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