//逻辑功能
import Base from '../axios/base.js'
class Index extends Base {
  constructor(){
    super()
  }
  //获取首页数据
  getIndexPosts(cb){
    this.axios('get','/web/post/list?status=open')
      .then((res)=>{
        cb(res.data)
      }).catch((err)=>{
        wx.showToast({
          //err.errMsg
          title:"数据请求失败！",
          icon:"none",
          duration:1500
        })
      })
  }
  //获取文章详情
  getDetailPost(pid,cb){
    this.axios('post',`/web/post/item/${pid}`)
      .then((res)=>{
        cb(res.data)
      }).catch((err)=>{
        wx.showToast({
          //err.errMsg
          title:"数据请求失败！",
          icon:"none",
          duration:1500
        })
      })
  }
  //获取所有归档
  getArchives(cb){
    this.axios('get',`/web/archives/list`)
    .then((res)=>{
      cb(res.data)
    }).catch((err)=>{
      wx.showToast({
        //err.errMsg
        title:"数据请求失败！",
        icon:"none",
        duration:1500
      })
    })
   
  }
   //获取归档所有文章
   getArchivePosts(cid,cb){
    this.axios('post',`/web/archives/item/${cid}`)
    .then((res)=>{
      cb(res.data)
    }).catch((err)=>{
      wx.showToast({
        //err.errMsg
        title:"数据请求失败！",
        icon:"none",
        duration:1500
      })
    })
  }
}
export default new Index()