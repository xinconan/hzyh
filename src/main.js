import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/list/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#333',
      selectedColor: '#F15A4A',
      list: [{
        pagePath: 'pages/list/main',
        iconPath: 'static/img/info.png',
        selectedIconPath: 'static/img/info-active.png',
        text: '摇号信息'
      }, {
        pagePath: 'pages/lottery/main',
        iconPath: 'static/img/house.png',
        selectedIconPath: 'static/img/house-active.png',
        text: '摇号查询'
      }]
    }
  }
}
