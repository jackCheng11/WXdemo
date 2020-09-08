// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  formSubmit: function(e){
    var user = e.detail.value;
    console.log(e)
    console.log(user);
    var name = user.name;
    var password = user.password;
    var users = wx.getStorageSync('users');
    for(var i = 0; i < users.length; i++){
      if(name == users[i].name && password == users[i].password){
        wx.setStorageSync('user', user);
        break;
      }
    }
    var u = wx.getStorageSync('user');
    if(u){
      wx.showToast({
        title: '登陆成功',
        icon: 'success',
        duration: 1000,
        success: function(res){
          wx.navigateBack({
            delta: 1,
          })
        }
      });
    }else{
      console.log("错误")
    }
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