// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    indicatorDots: true,
    autoPlay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [{
        url: "../../image/banner/购物1.png",
        id: "0"
      },
      {
        url: "../../image/banner/购物2.png",
        id: "1"
      },
      {
        url: "../../image/banner/购物3.png",
        id: "2"
      },
      {
        url: "../../image/banner/购物4.png",
        id: "3"
      },
      {
        url: "../../image/banner/新闻页22_19.jpg",
        id: "4"
      }
    ],
    flag: 0
  },
  switchNav: function (e) {
    console.log(e)
    var page = this
    // var id = e.target.id
    if (this.data.currentTab == e.target.dataset.current) {
      return false
    } else {
      page.setData({
        currentTab: e.target.dataset.current
      })
    }
    // page.setData({flag: id})
  },
  switchMonth: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.flag == id) {
      false
    } else {
      page.setData({
        flag: e.target.id
      })
    }
  },
  loadMovieDetail: function(e){
    console.log(e);
    var page = this;
    var id = e.currentTarget.id;
    console.log(id)
    wx.navigateTo({
      url: '../movieDetail/movieDetail?id=' + id,
    })
  },
  onShareAppMessage: function(){
    return {
      title: "电影列表",
      path: "../movie/movie"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovies();
  },
  loadMovies: function () {
    var page = this;
    wx.request({
      url: "http://t.yushu.im/v2/movie/in_theaters",
      method: "GET",
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var subjects = res.data.subjects;
        console.log(subjects)
        // console.log(subjects);
        var movies = new Array();
        var movieing = new Array();
        // console.log(movies)
        //前十条
        var subjected = subjects.slice(9, 14);
        // console.log(subjected)
        
        for (var h = 0; h < subjected.length; h++) {
          var subjecteds = subjected[h];
          var movieings = new Object()
          movieings.pic = subjecteds.images.large;
          movieings.name = subjecteds.title;
          movieings.type = subjecteds.genres;
          movieing.push(movieings)
          // console.log(movieings)
        }
        var length = subjects.length >= 10 ? 10 : subjects.length;
        for (var i = 0; i < length; i++) {
          var subject = subjects[i];
          var movie = new Object();
          movie.name = subject.title;
          movie.pic = subject.images.large;
          var directors = subject.directors;
          var dir = "";
          for (var j = 0; j < directors.length; j++) {
            dir += directors[j].name + " ";
          }
          movie.dir = dir
          // console.log(dir)
          // console.log(directors)
          // console.log(movie);
          //主演
          var casts = subject.casts;
          var cast = " ";
          for (var j = 0; j < casts.length; j++) {
            cast += casts[j].name + " ";
          }
          // console.log(cast)
          movie.cast = cast;
          var id = subject.id
          movie.id = id;
          var year = subject.year
          movie.year = year;
          //影片类型
          var genres = subject.genres;
          var gen = " ";
          for (var j = 0; j < genres.length; j++) {
            gen += genres[j] + " ";
          }
          movie.type = gen;
          console.log(movie)
          var sunmary = subject.summary;
          movie.sunmary = sunmary
          movies.push(movie)
          // console.log(movies)
        }
        page.setData({
          movies: movies,
          movieing: movieing
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