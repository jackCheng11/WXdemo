// pages/movieDetail/movieDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.loadMovieDetail(e);
  },
  loadMovieDetail: function(e){
    var page = this;
    wx.request({
      url: "http://t.yushu.im/v2/movie/subject/" + e.id,
      header: {
        "Content-Type": 'json'
      },
      success: function(res){
        // console.log(res);
        var subject = res.data;
        // console.log(subject)
        var movie = new Object();
        movie.name = subject.title;
        movie.pic = subject.images.large;
        var directors = subject.directors;
        var dir = '';
        for(var j = 0; j < directors.length; j++){
          dir += directors[j].name + " "
        }
        movie.dir = dir;
        var casts = subject.casts;
        var cast = "";
        for(var j = 0; j < casts.length; j++){
          cast += casts[j].name + " ";
        }
        movie.cast = cast;
        movie.id = subject.id;
        movie.year = subject.year;

        var genres = subject.genres;
        var gen = "";
        for(var j = 0; j < genres.length; j++){
          gen += genres[j]+ " ";
        }
        movie.type = gen;
        movie.summary = subject.summary;
        movie.country = subject.countries[0];
        console.log(movie)
        page.setData({
          movie: movie
        }),
        wx.setNavigationBarTitle({
          title: movie.name,
        })
      }
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