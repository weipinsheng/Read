//app.js
App({
    onLaunch: function () {
        wx.getSetting({
            success: res => {
                wx.getUserInfo({
                    success: res => {
                        this.globalData.userInfo = res.userInfo
                    }
                })
            }
        })

    },
    globalData: {
        userInfo: null
    }
})