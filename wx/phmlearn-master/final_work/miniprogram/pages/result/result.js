// pages/result/result.js
var util = require('../../util/util.js')
import * as echarts from '../../ec-canvas/echarts'
var app = getApp()

// 图表属性生成器
function makeOptions (y_list) {
  var options = {
    title: {
      left: 'center'
    },
    color: ["#37A2DA"],
    grid: {
      top: 20,
      right: 20,
      bottom: 20
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    yAxis: {
      x: 'center',
      type: 'value',
      max: 1,
      min: 0,
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    legend: {//图例信息
      data: ['NORMAL', 'BALL', 'OR', 'IR'],
    },
    series: [
      {
        name: 'NORMAL',
        type: 'line',
        smooth: true,
        color: '#32CD32',
        data: y_list[0]
      }, {
        name: 'BALL',
        type: 'line',
        smooth: true,
        color: '#FF4500',
        data: y_list[1]
      }, {
        name: 'OR',
        type: 'line',
        smooth: true,
        color: '#8470FF',
        data: y_list[2]
      }, {
        name: 'IR',
        type: 'line',
        smooth: true,
        color: '#FFA500',
        data: y_list[3]
      }
    ]
  }
  return options
}
// 初始化图表
let chart

// 页面构建
Page(
  {
    data: {
      // 网站返回结果信息
      resultArray: [],
      type: [],
      // 定时器相关
      index: 0,
      timer: '',
      // 图表相关
      ec: {
        onInit: function (canvas, width, height) {
          chart = echarts.init (canvas, null, {
            width: width,
            height: height
          })
          canvas.setChart(chart)
          let options = makeOptions(
            [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
          )
          chart.setOption(options)
        }
      }
    },
    onLoad: function (options) {
      // 初始化一些基础变量
      this.setData(
        {
          resultArray: app.globalData.resultArray,
          type: ['无故障', '球芯', '外环', '内环'],
          index: 0
        }
      )
      let page = this
      // 初始化定时器
      this.setData (
        {
          timer: setInterval(
            function () {
              // 首先是循环变量的变化控制
              if (page.data.index >= page.data.resultArray.length) {
                page.setData(
                  {
                    index: 0
                  }
                )
              } else {
                page.setData(
                  {
                    index: page.data.index + 1
                  }
                )
              }
              // 然后是图表的显示
              let L = app.globalData.resultArray.length
              let array = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
              for (let i = 0; i < 10; i++) {
                array[0][i] = app.globalData.ans_0[(page.data.index + i) % L]
                array[1][i] = app.globalData.ans_1[(page.data.index + i) % L]
                array[2][i] = app.globalData.ans_2[(page.data.index + i) % L]
                array[3][i] = app.globalData.ans_3[(page.data.index + i) % L]
              }
              let options = makeOptions(array)
              chart.setOption(options)
            },
            1000
          )
        }
      )
    },
    onUnload: function () {
      clearInterval(this.data.timer)
    }
  }
)