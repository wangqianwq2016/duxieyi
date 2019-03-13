// info.js
var data = require('../../utils/infomation.js')
var id_1 = -1,
  id_2 = -1
var content,title
Page({
  data: {
    splitView: false,
  },
  onLoad: function(options) {
    title = data.getAppList(1)
    content = data.getAppList(0)
    var terms = []
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#1976d2',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    });
    id_1 = options.id
    for (var x = 0; x <= 26; x += 1) {
      terms.push({
        title: title[x],
        content: content[options.id][x]
      });
      //console.log({ title: title[x], content: content[options.id][x] });
    }
    this.setData({
      appIcon: content[options.id]['appIcon'],
      appTitle: content[options.id]['name'],
      appTerms: terms
    })
  },
  addComp: function() {
    var appList = []
    for(var s in content)
    {
      if(s !=  id_1) appList.push(content[s])
    }
    this.setData({
      modalOn: true,
      appList: appList
    })
  },
  preventD: function() {},
  enterComp: function(event){
    var terms = []
    for (var x = 0; x <= 26; x += 1) {
      terms.push({
        title: title[x],
        content: content[id_1][x],
        content_2: content[event.currentTarget.id][x]
      });
      //console.log({ title: title[x], content: content[options.id][x] });
    }
    this.setData({
      appIconComp: content[event.currentTarget.id]['appIcon'],
      appTitleComp: content[event.currentTarget.id]['name'],
      appTerms: terms,
      splitView: true,
      modalOn: false,
    })
    id_2 = event.currentTarget.id
  },
  delComp: function(){
    this.setData({
      splitView:false
    })
  }
})