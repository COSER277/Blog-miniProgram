//index.js
//获取应用实例
const app = getApp()
import api from "../../utils/api/index"
Page({
  data: {
    //模拟数据
    posts:[{
      pid:"asda312313dasda",
      background:"../../assets/images/bg.jpg",
      title:"VueJs开发路线"
    },{
      pid:"312312312asdsadsd",
      background:"../../assets/images/bg.jpg",
      title:"NodeJs开发路线"
    },{
      pid:"231213rsdffs3",
      background:"../../assets/images/bg.jpg",
      title:"全栈开发路线"
    }]
  },

  onLoad: function () {
    api.getIndexPosts((data)=>{
     console.log(data)
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
