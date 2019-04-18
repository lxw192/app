//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    url:' wwwwwwwwwwwqqq12',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    num:0,
    message: wx.getSystemInfo()
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  minus: function(){
    // console.log(this.data.num, this.data.num--)
    this.setData({
      num: this.data.num - 1
    })
  },
  add: function(){
    // console.log(this.data.num, this.data.num++)
    this.setData({
      num: this.data.num + 1
    })
  },
  scanCode:()=>{
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
      }
    })
  },
  vibrateShort: () => {
    wx.vibrateLong({
      success(res) {
        console.log(res)
      }
    })
  },
  stopGyroscope: () => {
    wx.stopGyroscope({
      success(res) {
        console.log(res)
      }
    })
  },
  startGyroscope: () => {
    wx.startGyroscope({
      success(res) {
        console.log(res)
      },
      interval(res){
        console.log(res)
      }
    })
  },

  startDeviceMotionListening: (game) => {
    wx.startDeviceMotionListening({
      success(res) {
        console.log(res)
      },
      interval: game
    })
  },
  stopDeviceMotionListening: () => {
    wx.stopDeviceMotionListening({
      success(res) {
        console.log(res)
      },
      interval(res) {
        console.log(res)
      }
    })
  },
  makePhoneCall: () => {
    wx.makePhoneCall({
      phoneNumber: '1340000'
    })
  },
  getBatteryInfo: () => {
    wx.getBatteryInfo({
      success(res) {
        console.log(res)
      },
    })
  },
  startBluetoothDevicesDiscovery: () => {
    wx.startBluetoothDevicesDiscovery({
      services: ['FEE7'],
      success(res) {
        console.log(res)
      },
    })
  },
  stopBluetoothDevicesDiscovery: () => {
    wx.stopBluetoothDevicesDiscovery({
      success(res) {
        console.log(res)
      },
    })
  },
  addPhoneContact: () => {
    wx.addPhoneContact({
      success(res) {
        console.log(res)
      },
    })
  },
  stopWifi: () => {
    wx.stopWifi({
      success(res) {
        console.log(res)
      },
    })
  },
  startWifi: () => {
    wx.stopWifi({
      success(res) {
        console.log(res)
      },
    })
  },
})
