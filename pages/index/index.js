//index.js
//获取应用实例
const app = getApp()
var data = require('../../utils/infomation.js')
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    mp: {
      connectionError: "网络连接异常，请检查网络连接"
    },
    appListTitle: "选择一个平台",
    appList: data.getAppList(0)
  },
  //事件处理函数
  bindViewTap: function(event) {
    wx.navigateTo({
      url: "../info/info?id=" + event.currentTarget.id
    })
  },
  onLoad: function () {
  },
})
