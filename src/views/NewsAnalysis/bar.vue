<template>
  <div>
    <h4 class="chart-title">{{ $t('newsAnalysisChart.day') }}</h4>
    <div class="bar-chart"></div>
  </div>
</template>

<script>
const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
import { throttle } from '../../utils/throttle'
export default {
  data() {
    return {
      barChart: null,
      barData: [],
      dateList: [],
      colorList: ['#9E87FF', '#9effff'],
      options: {},
    }
  },
  mounted() {
    this.barChart = echarts.init(
      document.querySelector('.bar-chart'),
      'macarons'
    )
    this.options = {
      backgroundColor: '#fff',
      grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%',
      },
      xAxis: [
        {
          type: 'category',
          color: '#59588D',
          data: [],
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#556677',
            },
            fontSize: 12,
            margin: 15,
          },
          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#556677',
            },
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#DCE2E8',
            },
          },
          axisTick: {
            show: false,
          },
        },
      ],
      series: [
        {
          type: 'bar',
          data: [],
          barWidth: '50px',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: this.colorList[0],
                  },
                  {
                    offset: 1,
                    color: this.colorList[1],
                  },
                ],
                false
              ),
              barBorderRadius: [30, 30, 0, 0],
            },
          },
          label: {
            normal: {
              show: true,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333',
              position: 'top',
            },
          },
        },
      ],
    }

    this.dateList = ['12-30', '12-31', '1-1', '1-2', '1-3', '1-4', '1-5']
    this.barData = [10, 10, 30, 12, 15, 3, 7]

    this.initChart()
  },
  methods: {
    initChart() {
      this.options.xAxis[0].data = this.dateList
      this.options.series[0].data = this.barData

      this.barChart.setOption(this.options)
      setTimeout(() => {
        this.barChart.resize()
      }, 100)
      window.addEventListener('resize', () => {
        throttle(this.barChart.resize(), 200)
      })
    },
  },
}
</script>

<style>
.chart-title {
  font-size: 16px;
  margin-bottom: 16px;
  padding-left: 32px;
  color: #1890ff;
}
.bar-chart {
  width: 100%;
  height: 360px;
}
</style>