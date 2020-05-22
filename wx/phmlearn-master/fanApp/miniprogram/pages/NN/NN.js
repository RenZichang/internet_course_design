// pages/NN/NN.js
var util = require('../../util/util.js');
var app = getApp();
Page({
  data: {

  },
  onLoad: function (options) {

  },
  formsubmit(e) {
    util.reqFunc("https://api.phmlearn.com/component/ML/classify/13",
      {
        "access_token": app.globalData.access_token,
        "file_name": app.globalData.featured_fileName,
        "lay1": e.detail.value.inputValue1,
        "sim1": e.detail.value.inputValue2,
        "lay2": e.detail.value.inputValue3,
        "sim2": e.detail.value.inputValue4,
        "drot": e.detail.value.inputValue5
      },'result', function(res){
        app.globalData.resultArray = [res.data.data.machine_name, res.data.data.machine_state, res.data.data.machine_precision];
        //这个地方的返回结果应该不是一个标准的数组，看情况修改这里吧
        console.log(app.globalData.resultArray);
      })
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