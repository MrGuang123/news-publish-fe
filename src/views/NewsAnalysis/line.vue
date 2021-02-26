<template>
  <div>
    <h4 class="chart-title">{{ $t('newsAnalysisChart.week') }}</h4>
    <div class="line-chart"></div>
  </div>
</template>

<script>
const echarts = require('echarts/lib/echarts')
// require('echarts/lib/chart/line')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import { throttle } from '../../utils/throttle'
export default {
  data() {
    return {
      lineChart: null,
      lineData: [],
      colorList: ['#9E87FF', '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF'],
      dateList: [],
      options: {},
    }
  },
  mounted() {
    this.lineChart = echarts.init(
      document.querySelector('.line-chart'),
      'macarons'
    )
    this.options = {
      backgroundColor: '#fff',
      // title: {
      //   text: '近一周新闻发布总量',
      //   textStyle: {
      //     fontSize: 16,
      //     fontWeight: 400,
      //   },
      //   left: '50',
      //   top: '5%',
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          label: {
            show: true,
            backgroundColor: '#fff',
            color: '#556677',
            borderColor: 'rgba(0,0,0,0)',
            shadowColor: 'rgba(0,0,0,0)',
            shadowOffsetY: 0,
          },
          lineStyle: {
            width: 0,
          },
        },
        backgroundColor: '#fff',
        textStyle: {
          color: '#5c6c7c',
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
      },
      grid: {
        top: '15%',
      },
      xAxis: [
        {
          type: 'category',
          data: [],
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#556677',
            },
            fontSize: 12,
            margin: 15,
          },
          axisPointer: {
            label: {
              padding: [0, 10, 10, 10],
              // 这里的margin和axisLabel的margin要一致!
              margin: 15,
              // 移入时的字体大小
              fontSize: 12,
              backgroundColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#fff',
                  },
                  {
                    offset: 0.86,
                    color: '#fff',
                  },
                  {
                    offset: 0.86,
                    color: '#33c0cd',
                  },
                  {
                    offset: 1,
                    color: '#33c0cd',
                  },
                ],
                global: false,
              },
            },
          },
          boundaryGap: false,
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#DCE2E8',
            },
          },
          axisLabel: {
            textStyle: {
              color: '#556677',
            },
          },
        },
      ],
      series: [
        {
          name: '新闻',
          type: 'line',
          data: [],
          symbolSize: 1,
          symbol: 'circle',
          smooth: true,
          yAxisIndex: 0,
          showSymbol: false,
          lineStyle: {
            width: 5,
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 0,
                color: '#9effff',
              },
              {
                offset: 1,
                color: '#9E87FF',
              },
            ]),
            shadowColor: 'rgba(158,135,255, 0.3)',
            shadowBlur: 10,
            shadowOffsetY: 20,
          },
          itemStyle: {
            normal: {
              color: this.colorList[0],
              borderColor: this.colorList[0],
            },
          },
        },
      ],
    }
    this.dateList = ['12-30', '12-31', '1-1', '1-2', '1-3', '1-4', '1-5']
    this.lineData = [10, 10, 30, 12, 15, 3, 7]

    this.initChart()
  },
  methods: {
    initChart() {
      this.options.xAxis[0].data = this.dateList
      this.options.series[0].data = this.lineData

      this.lineChart.setOption(this.options)
      setTimeout(() => {
        this.lineChart.resize()
      }, 100)
      window.addEventListener(
        'resize',
        throttle(() => {
          this.lineChart.resize()
        }, 200)
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.chart-title {
  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 32px;
  color: #1890ff;
}
.line-chart {
  width: 100%;
  height: 360px;
}
</style>