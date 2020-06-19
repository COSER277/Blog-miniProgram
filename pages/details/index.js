// pages/details/index.js
import api from '../../utils/api/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //模拟数据
    post:{
      pid:"asdasdasdsad",
      title:"VueJs开发路线",
      background:"../../assets/images/bg.jpg",//主图地址
      content:"### 欢迎使用坚果云Markdow#### 新增图片上传功能现在可以在文章中插入图片，将更丰富的内容分享给朋友了！ 您可以插入外链图片，或上传本地图片到文档中。 从本地上传的图片不支持外链引用，您可以通过坚果云分享链接来发布图文预览。 可上传的单张图片最大20M，支持PNG、JPG格式，使用时请留意账号流量或空间是否充足。 若有其他疑问，欢迎咨询官网在线客服。## Welcome to the Nutstore Markdown#### New feature! Insert pictures in your articles now!ou can insert pictures from external links, or upload ones.he pictures in the articles can not be used through external links. Please share your articles with the Nutstore share link.he maximum size of the picture to upload is 20M. PNG and JPG are better. Be sure that your traffic and space are enough if you want to add a lot of pictures in your article.Have any other questions, please contact our official customer service.",//内容 一般使用md格式
      views:3,//阅读次数
      date:"2020-06-19"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("文章"+options.pid)
    api.getDetailPost(options.pid,()=>{})
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