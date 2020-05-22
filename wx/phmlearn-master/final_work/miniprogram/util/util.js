function reqFunc(url,data,callback){
  console.log("访问"+url)
  wx.showLoading({
    title: '正在访问'+url,
  })
  wx.request({
    url: url, 
    method: "POST", 
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }, 
    data:data, 
    complete(res){
      if(res.data.status == 0){
        wx.showToast({
          title: '访问成功！'
        })
      }else{
        wx.showToast({
          title: '访问失败！',
          icon:"none"
        })
      };
      setTimeout(
        function () {
        }, 
        2000)
    },
    success(res){
      callback(res)
    }
    })
}
module.exports = {
  reqFunc: reqFunc
}
