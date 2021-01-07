<template>
  <div class="word-cloud"></div>
</template>

<script>
import { throttle } from '../../utils/throttle'
const echarts = require('echarts/lib/echarts')
require('echarts/lib/component/title')
require('echarts-wordcloud')
require('echarts/theme/macarons')
export default {
  data() {
    return {
      wordCloudChart: null,
      wordCloudData: [],
      options: {
        backgroundColor: '#fff',
        tooltip: {
          show: true,
        },
        title: {
          text: '各标签新闻数量',
          textStyle: {
            fontSize: 16,
            fontWeight: 400,
          },
          left: '5%',
          top: '5%',
        },
        series: [
          {
            type: 'wordCloud',
            // 默认circle为圆形
            // cardioid (apple or heart shape curve, the most known polar equation), diamond (
            // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
            shape: 'circle',
            // 可以自选图片 var maskImage = new Image(); maskImage.src = data.image
            // maskImage: maskImage,
            // 词云位置默认 center 宽高 75% x 80%.
            left: 'center',
            top: 'center',
            width: '70%',
            height: '80%',
            right: null,
            bottom: null,
            // 词云文字大小，默认12px-60px.
            sizeRange: [12, 60],
            // 文字旋转角度，每步45度
            rotationRange: [-90, 90],
            rotationStep: 45,
            // size of the grid in pixels for marking the availability of the canvas
            // the larger the grid size, the bigger the gap between words.
            gridSize: 8,
            // 允许将词绘制到画布之外
            drawOutOfBound: false,
            // 全局文本样式
            textStyle: {
              normal: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: function () {
                  // Random color
                  return (
                    'rgb(' +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                    ].join(',') +
                    ')'
                  )
                },
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333',
              },
            },
            data: [],
            // Data is an array. Each array item must have name and value property.
            // data: [
            //   {
            //     name: 'Farrah Abraham',
            //     value: 366,
            //     // Style of single text
            //     textStyle: {
            //       normal: {},
            //       emphasis: {},
            //     },
            //   },
            // ],
          },
        ],
      },
    }
  },
  mounted() {
    this.wordCloudChart = echarts.init(
      document.querySelector('.word-cloud'),
      'macarons'
    )
    this.wordCloudData = [
      {
        name: '体育',
        value: 10,
      },
      {
        name: '修仙',
        value: 20,
      },
      {
        name: '军事',
        value: 16,
      },
      {
        name: '娱乐',
        value: 30,
      },
      {
        name: '文体',
        value: 22,
      },
      {
        name: '教育',
        value: 80,
      },
      {
        name: '时政',
        value: 60,
      },
      {
        name: '文化',
        value: 16,
      },
      {
        name: '游戏',
        value: 25,
      },
    ]
    this.initChart()
  },
  methods: {
    initChart() {
      this.options.series[0].data = this.wordCloudData
      this.wordCloudChart.setOption(this.options)
      setTimeout(() => {
        this.wordCloudChart.resize()
      }, 100)
      window.addEventListener('resize', () => {
        throttle(this.wordCloudChart.resize(), 200)
      })
    },
  },
}
</script>

<style>
.word-cloud {
  width: 100%;
  height: 360px;
  border-radius: 6px;
  overflow: hidden;
}
</style>