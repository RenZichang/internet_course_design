//index.js
var util = require('../../util/util.js')
var app = getApp()
Page (
  {
    
    data: {
      Machine_ID_list: [100, 108, 121, 133, 147, 160, 172, 188, 200, 212, 225, 237, 249, 261],
      Machine_No: 0,
      bearing_id_list: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
      [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
      [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
      [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
      [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
      [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
      [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
      [101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
      [111, 112, 113, 114, 115, 116, 117, 118, 119, 120],
      [121, 122, 123, 124, 125, 126, 127, 128, 129, 130],
      [131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142]],
      bearing_no: 0
    },
    onLoad: function (options) {},
    toResult: function (e) {
      let page = this
      // 点下按钮后，首先根据相应的文件获取相应的特征提取结果文件
      util.reqFunc(
        'https://api.phmlearn.com/component/upload/1/133', 
        {
          "access_token": app.globalData.access_token,
          "file_name": app.globalData.input_fileName[page.data.bearing_id_list[page.data.Machine_No][page.data.bearing_no]],
        }, 
        function (res) {
          let output_fileName = res.data.data.file_name
          // 获取预测结果
          util.reqFunc(
            'https://api.phmlearn.com/component/upload/ML/model/71/141',
            {
              "access_token": app.globalData.access_token,
              "file_name": output_fileName
            },
            function (res) {
              app.globalData.resultArray = res.data.data.predict
              wx.navigateTo(
                {
                  url: '/pages/' + 'result' + '/' + 'result'
                }
              )
            }
          )
          // 获取模型输出的第一维
          util.reqFunc(
            'https://api.phmlearn.com/component/upload/ML/model/87/163',
            {
              "access_token": app.globalData.access_token,
              "file_name": output_fileName
            },
            function (res) {
              app.globalData.ans_0 = res.data.data.predict
            }
          )
          // 获取模型输出的第二维
          util.reqFunc(
            'https://api.phmlearn.com/component/upload/ML/model/88/164',
            {
              "access_token": app.globalData.access_token,
              "file_name": output_fileName
            },
            function (res) {
              app.globalData.ans_1 = res.data.data.predict
            }
          )
          // 获取模型输出的第三维
          util.reqFunc(
            'https://api.phmlearn.com/component/upload/ML/model/89/165',
            {
              "access_token": app.globalData.access_token,
              "file_name": output_fileName
            },
            function (res) {
              app.globalData.ans_2 = res.data.data.predict
            }
          )
          // 获取模型输出的第四维
          util.reqFunc(
            'https://api.phmlearn.com/component/upload/ML/model/90/166',
            {
              "access_token": app.globalData.access_token,
              "file_name": output_fileName
            },
            function (res) {
              app.globalData.ans_3 = res.data.data.predict
            }
          )
        }
      )
    },
    bindPickerChange1: function (e) {
      this.setData (
        {
          Machine_No: e.detail.value
        }
      )
    },
    bindPickerChange2: function (e) {
      this.setData (
        {
          bearing_no: e.detail.value
        }
      )
    }
  }
)