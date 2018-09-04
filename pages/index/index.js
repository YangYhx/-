//index.js
//获取应用实例

import {fetch} from '../../utils/util.js';
const app = getApp()

Page({
  data: {
    
    swiperData:[],
    mainContent:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad(){
    this.getData()
    this.getcontent()
  },
  getData(){
    fetch.get('/swiper').then( res => {
      this.setData({
        swiperData:res.data.data
      })
    })
  },
  getcontent(){
    fetch.get('/category/books').then(res =>{
      console.log(res.data.data)
      this.setData({
         mainContent:res.data.data
      })
    })
  }
})
  