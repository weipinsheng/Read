// pages/my/my.js

var app = getApp();
Page({
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    // wx.request({
    //     url: 'http://jisuwxwzjx.market.alicloudapi.com/weixinarticle/channel',
    //     data: {},
    //     header: { "X-Ca-Timestamp": "1505379330585", "gateway_channel": "http", "X-Ca-Request-Mode": "debug", "X-Ca-Key": "24624012", "X-Ca-Stage": "RELEASE", "Content-Type": "application/json; charset=utf-8", "Authorization": "APPCODE 4630550131e046949019db86abaea345" },
    //     success: function(res){
    //         console.log(res.data.result[0]);
    //     }
    // })



        this.setData({ 
                text: app.globalData.userInfo.nickName, 
                headshot: app.globalData.userInfo.avatarUrl 
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
        console.log('onShow');
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
    },

    /**
     * 页面的初始数据
     */
    data: {
        text: '您未授权，信息无法获取',
        headshot: '../../images/noshot.jpg',
        
    }
})