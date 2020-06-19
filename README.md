1. 作品介绍
    1. 个人博客小程序，原本想使用知晓云的，但是知晓云的内容管理收费了呜呜呜，莫得办法，穷穷的coder，所以数据只能先模拟的（//(ㄒoㄒ)/~~）
    2. 小程序封装了像axios库的使用方法，在utils/api/base.js,因为后端接口没弄，加小程序上线的话，需要服务器等等呜呜呜，真头大
2. 作品预览
  1. 首页

![图片](https://uploader.shimo.im/f/xGoXKmyRAnaICnpr.png!thumbnail)

  2. 归档

![图片](https://uploader.shimo.im/f/WvLvnN3kaRLlUttf.png!thumbnail)

## c. 文章详情

![图片](https://uploader.shimo.im/f/SJQr0yxGY0xdwlde.png!thumbnail)

## d.归档详情

![图片](https://uploader.shimo.im/f/rDySclxNdrS181Rf.png!thumbnail)

3. 项目构建
  1. 创建项目-测试号
  2. 基本构建
    1. 删除log文件夹以及其他多余代码
    2. app.wxss
```css
/**app.wxss**/
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding:1rem;
  box-sizing: border-box;
} 

```
    3. 目录结构
      1. ![图片](https://uploader.shimo.im/f/JNYekearhZ2MzQDG.png!thumbnail)
  3. 下载图标文件-阿里图标
    1. 在根目录下新建assets\icons、assets\images分别存放图标、图片资源 
      1. ![图片](https://uploader.shimo.im/f/tMQsi1vxiwihBqk3.png!thumbnail)
4. 导航栏配置
  1. 在根目录 app.json配置（先创建好对应的页面模块）
```json
{
  "pages": [
    "pages/index/index",
    "pages/archives/index",
    "pages/details/index",
    "pages/posts/index"
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Coser的博客",
    "navigationBarTextStyle": "black"
  },
  "tabBar": {
    "selectedColor": "#1296db",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "文章",
        "iconPath": "./assets/icons/articles.png",
        "selectedIconPath": "./assets/icons/articles-selected.png"
      },
      {
        "pagePath": "pages/archives/index",
        "text": "归档",
        "iconPath": "./assets/icons/archives.png",
        "selectedIconPath": "./assets/icons/archives-selected.png"
      }
    ]
  },
  "plugins": {},
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```
5. 页面编写
  1. 文章
    1. 结构
```xml
<!--index.wxml-->
<view class="container">
  <view>
    <text>-全部文章-</text>
  </view>
  <view class="posts">
    <navigator url="/pages/details/index?pid={{item.pid}}" class="post" wx:for="{{posts}}" wx:for-item="item" wx:key="index">
      <image class="bg" src="{{item.background}}"></image>
      <view class="title">{{item.title}}</view>
    </navigator>
  </view>
  <view class="foot">我是有底线的</view>
</view>
```
    2. 逻辑
```javascript
//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
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

  onLoad: function () {
   
  }
 
})

```
    3. 样式
```css
/**index.wxss**/
.posts {
  width: 100%;
  
}
.posts .post{
  width: 100%;
  height: 10rem;
  margin: 2.5em 0;
  position: relative;
  border-radius: 0.5rem;
 
}
.posts .post .title{
  width: 100%;
  position: absolute;
  bottom: 15%;
  left: 0%;
  /* transform: scale(-50%,0); */
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
}

.posts .post .bg{
  width: 100%;
 height: 100%;
 border-radius: 0.5rem
}
.foot{
  color: rgb(209, 205, 205);
  font-size: 0.8rem;
}
.foot::before,.foot::after{
  content: "";
  width: 4rem;
  height: 1px;
  background: rgb(209, 205, 205);
  display: inline-flex;
  text-align: center;
  line-height: 1px;
}
```
    4. 配置-页面配置文件
```json
{}
```
  2. 归档
    1. 结构
```xml
<!--pages/archives/index.wxml 归档-->
<view class="container">
  <view>-全部归档-</view>
  <view class="categories">
    <navigator url="/pages/posts/index?cid={{item.cid}}" class="category" wx:for="{{categories}}" wx:for-item="item" wx:key="index">
      <image class="bg" src="{{item.background}}"></image>
      <view class="title">{{item.title}}</view>
    </navigator>
  </view>
  <view class="foot">我是有底线的</view>
</view>
```
    2. 逻辑
```javascript
// pages/archives/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //模拟数据
    categories:[{
      cid:"asda312313dasda",
      background:"../../assets/images/bg.jpg",
      title:"VueJs"
    },{
      cid:"312312312asdsadsd",
      background:"../../assets/images/bg.jpg",
      title:"NodeJs"
    },{
      cid:"231213rsdffs3",
      background:"../../assets/images/bg.jpg",
      title:"全栈"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
)}
```
    3. 样式
```css
/* pages/archives/index.wxss */
.categories {
  width: 100%;
}

.categories .category {
  width: 100%;
  height: 10rem;
  margin: 2.5em 0;
  position: relative;
  border-radius: 0.5rem
}

.categories .category .title {
  width: 100%;
  position: absolute;
  bottom: 15%;
  left: 0%;
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
}

.categories .category .bg {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem
}
.foot{
  color: rgb(209, 205, 205);
  font-size: 0.8rem;
}
.foot::before,.foot::after{
  content: "";
  width: 4rem;
  height: 1px;
  background: rgb(209, 205, 205);
  display: inline-flex;
  text-align: center;
  line-height: 1px;
}
```
    4. 配置-页面配置文件 index.josn
```json
{
  "usingComponents": {},
  "navigationBarTitleText": "归档"
}
```
  3. 文章详情
    1. 结构
```xml
<!--pages/details/index.wxml 文章详情-->
<view class="container">
  <view class="post">
    <view class="post-title">{{post.title}}</view>
    <view class="post-info">
      <view class="info-date">发布时间:{{post.date}}</view>
      <view class="info-views">阅读次数:{{post.views}}</view>
    </view>
    <image class="post-bg" src="{{post.background}}"></image>
    <view class="post-content">{{post.content}}</view>
    <view class="post-moreInfo"></view>
  </view>
</view>
```
逻辑
```javascript
// pages/details/index.js
import api from '../../utils/api/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //模拟数据
    post:{
      pid:"asdasdasdsad",
      title:"VueJs开发路线",
      background:"../../assets/images/bg.jpg",//主图地址
      content:"### 欢迎使用坚果云Markdow#### 新增图片上传功能现在可以在文章中插入图片，将更丰富的内容分享给朋友了！ 您可以插入外链图片，或上传本地图片到文档中。 从本地上传的图片不支持外链引用，您可以通过坚果云分享链接来发布图文预览。 可上传的单张图片最大20M，支持PNG、JPG格式，使用时请留意账号流量或空间是否充足。 若有其他疑问，欢迎咨询官网在线客服。## Welcome to the Nutstore Markdown#### New feature! Insert pictures in your articles now!ou can insert pictures from external links, or upload ones.he pictures in the articles can not be used through external links. Please share your articles with the Nutstore share link.he maximum size of the picture to upload is 20M. PNG and JPG are better. Be sure that your traffic and space are enough if you want to add a lot of pictures in your article.Have any other questions, please contact our official customer service.",//内容 一般使用md格式
      views:3,//阅读次数
      date:"2020-06-19"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("文章"+options.pid)
  },
 
})
```
样式
```css
/* pages/details/index.wxss */
.post{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
/* =====文章头部信息开始========= */
.post-title{
  font-size: 1.2rem;
  text-align: center;
}
.post-info{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 0.8rem;
  margin: 0.1rem 0;
}
.post-info .info-date{
  margin-left: 1rem;
}
.post-info .info-views{
  margin-left: 1rem;
}
/* ========文章头部信息结束======== */
.post-bg{
  width: 100%;
  margin: 0.1rem 0;
}
.post-content{
 font-family: Arial, Helvetica, sans-serif;
}
.post-moreInfo{

}
```
页面配置
```json
{
  "navigationBarTitleText": "文章详情"
}
```
  4. 归档详情
    1. 结构
```xml
<!--pages/archives/index.wxml 归档-->
<view class="container">
  <view>-全部归档-</view>
  <view class="categories">
    <navigator url="/pages/posts/index?cid={{item.cid}}" class="category" wx:for="{{categories}}" wx:for-item="item" wx:key="index">
      <image class="bg" src="{{item.background}}"></image>
      <view class="title">{{item.title}}</view>
    </navigator>
  </view>
  <view class="foot">我是有底线的</view>
</view>
```
    2. 逻辑
```javascript
// pages/posts/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
   category:{
     cid:"sdsdsdsds",
     name:"VueJs",
    posts:[{
      pid:"asda312313dasda",
      background:"../../assets/images/bg.jpg",
      title:"VueJs开发路线"
    }]
   }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("归档"+options.cid)
   
  },
  },
})
```
    3. 样式
```css
/* pages/posts/index.wxss */
.posts {
  width: 100%;
  
}
.posts .post{
  width: 100%;
  height: 10rem;
  margin: 2.5em 0;
  position: relative;
  border-radius: 0.5rem;
 
}
.posts .post .title{
  width: 100%;
  position: absolute;
  bottom: 15%;
  left: 0%;
  /* transform: scale(-50%,0); */
  text-align: center;
  font-size: 1.2rem;
  color: #fff;
}

.posts .post .bg{
  width: 100%;
 height: 100%;
 border-radius: 0.5rem
}
.foot{
  color: rgb(209, 205, 205);
  font-size: 0.8rem;
}
.foot::before,.foot::after{
  content: "";
  width: 4rem;
  height: 1px;
  background: rgb(209, 205, 205);
  display: inline-flex;
  text-align: center;
  line-height: 1px;
}
```
    4. 配置-页面配置文件 index.josn
```json
{
  "usingComponents": {},
  "navigationBarTitleText": "归档详情"
}
```
