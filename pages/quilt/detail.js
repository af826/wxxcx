// pages/quilt/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    good_id:null,
    good_name: "春秋被棉絮",
    good_desc: "蓄热保暖",
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    goodsPicsInfo:[
      {url:'../../static/img/TB2sfIRcyRnpuFjSZFCXXX2DXXa_!!728825094.jpg'},
      {url:'../../static/img/TB2sfIRcyRnpuFjSZFCXXX2DXXa_!!728825094.jpg'},
      {url:'../../static/img/TB2sfIRcyRnpuFjSZFCXXX2DXXa_!!728825094.jpg'}
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this=this
    _this.setData({
      good_id: options.id
    })
    console.log(options.id)
    console.log(_this.data.good_id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
