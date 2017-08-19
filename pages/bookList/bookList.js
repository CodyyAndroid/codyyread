// bookList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:true,
    datas:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '图书列表'
    })
    this.mocData();
  },
  //跳转到图书详情
  goDetail: function(e){
    var id = e.currentTarget.id;
    var url = "../bookdetail/bookdetail?id="+id;
    
    wx.navigateTo({
      url: url,
    })
  },
  // 模拟数据
  mocData: function(){
    //show progress 
    var that = this;
    var data = [
      {title: '金瓶梅',
       avatar: '',
       author: '兰陵笑笑生',
       isStore: true,
       publish:'南京邮电大学出版社'
      },
      {
        title: '西游记',
        avatar: '',
        author: '兰陵笑笑生',
        isStore: true,
        publish: '南京邮电大学出版社'
      },
      {
        title: '水浒传',
        avatar: '',
        author: '兰陵笑笑生',
        isStore: false,
        publish: '南京邮电大学出版社'
      },
      {
        title: '三国传',
        avatar: '',
        author: '兰陵笑笑生',
        isStore: false,
        publish: '南京邮电大学出版社'
      }, {
        title: '红楼梦',
        avatar: '',
        author: '兰陵笑笑生',
        publish: '南京邮电大学出版社'
      },
      {
        title: '金瓶梅',
        avatar: '',
        isStore: false,
        author: '兰陵笑笑生',
        publish: '南京邮电大学出版社'
      },
      {
        title: '西游记',
        avatar: '',
        author: '兰陵笑笑生',
        publish: '南京邮电大学出版社'
      }
    ];

    that.setData({
      datas: data
    })
    //dismiss the progress dialog .
    setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})