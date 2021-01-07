<template>
  <div class="news-map">
    <h3 class="list-title">总量地图</h3>
    <div class="map-content"></div>
  </div>
</template>

<script>
// import GeoJson from '../../assets/js/geo'
import { generateData, mockData } from './mapUtil'
const echarts = require('echarts')
// require('echarts/lib/chart/map')
// require('echarts/lib/chart/lines')
// require('echarts/lib/component/geo')
// require('echarts/lib/chart/effectScatter')
// require('echarts/lib/action/geoRoam')
// require('echarts/lib/action/roamHelper')
export default {
  name: 'NewsMap',
  data() {
    return {
      mapChart: null,
      mapData: [],
      mapOptions: {
        tooltip: {
          trigger: 'item',
          backgroundColor: 'rgba(166, 200, 76, 0.82)',
          borderColor: '#FFFFCC',
          showDelay: 0,
          hideDelay: 0,
          enterable: true,
          transitionDuration: 0,
          extraCssText: 'z-index:100',
          formatter: function (params) {
            var res = ''
            var name = params.name
            var value = params.value[2] || 0
            res =
              "<span style='color:#fff;'>" + name + '</span><br/>数据：' + value
            return res
          },
        },
        backgroundColor: '#013954',
        geo: {
          map: 'china',
          zoom: 1.2,
          aspectScale: 0.75,
          label: {
            emphasis: {
              show: false,
            },
          },
          //是否允许缩放
          roam: true,
          itemStyle: {
            normal: {
              //地图背景色
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: '#9E87FF',
                  },
                  {
                    offset: 1,
                    color: '#9effff',
                  },
                ],
                globalCoord: true,
              },
              // 边界线颜色
              borderColor: '#516a89',
              borderWidth: 1,
              shadowColor: 'rgb(255,255,255)',
              shadowOffsetX: 1,
              shadowOffsetY: 1,
            },
            emphasis: {
              //悬浮背景色
              color: 'rgba(37, 43, 61, .5)',
            },
          },
          regions: [
            {
              name: '南海诸岛',
              itemStyle: {
                areaColor: 'rgba(0, 10, 52, 1)',

                borderColor: 'rgba(0, 10, 52, 1)',
                normal: {
                  opacity: 0,
                  label: {
                    show: false,
                    color: '#009cc9',
                  },
                },
              },
            },
          ],
        },
        series: [
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            showEffectOn: 'render',
            zlevel: 1,
            rippleEffect: {
              period: 15,
              scale: 4,
              brushType: 'fill',
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                offset: [15, 0],
                color: '#1DE9B6',
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: '#1DE9B6',
                shadowBlur: 10,
                shadowColor: '#333',
              },
            },
            symbolSize: 12,
            data: [],
          },
          {
            //地图线的动画效果
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              //箭头指向速度，值越小速度越快
              period: 4,
              //特效尾迹长度[0,1]值越大，尾迹越长重
              trailLength: 0.4,
              //箭头图标
              symbol: 'arrow',
              //图标大小
              symbolSize: 7,
            },
            lineStyle: {
              normal: {
                color: '#1DE9B6',
                //线条宽度
                width: 1,
                //尾迹线条透明度
                opacity: 0.1,
                //尾迹线条曲直度
                curveness: 0.3,
              },
            },
            data: [],
          },
        ],
      },
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      this.mapChart = echarts.init(document.querySelector('.map-content'))
      let { pointData, lineData } = generateData(mockData)
      console.log(pointData, lineData)
      const test1 = [
        { value: [118.8062, 31.9208, 1], itemStyle: { color: '#4ab2e5' } },
        { value: [127.9688, 45.368, 1], itemStyle: { color: '#4fb6d2' } },
        { value: [110.3467, 41.4899, 1], itemStyle: { color: '#52b9c7' } },
        { value: [125.8154, 44.2584, 1], itemStyle: { color: '#5abead' } },
        { value: [116.4551, 40.2539, 1], itemStyle: { color: '#f34e2b' } },
        { value: [123.1238, 42.1216, 1], itemStyle: { color: '#f56321' } },
        { value: [114.4995, 38.1006, 1], itemStyle: { color: '#f56f1c' } },
        { value: [117.4219, 39.4189, 1], itemStyle: { color: '#f58414' } },
        { value: [112.3352, 37.9413, 1], itemStyle: { color: '#f58f0e' } },
        { value: [109.1162, 34.2004, 1], itemStyle: { color: '#f5a305' } },
        { value: [103.5901, 36.3043, 1], itemStyle: { color: '#e7ab0b' } },
        { value: [106.3586, 38.1775, 1], itemStyle: { color: '#dfae10' } },
        { value: [101.4038, 36.8207, 1], itemStyle: { color: '#d5b314' } },
        { value: [103.9526, 30.7617, 1], itemStyle: { color: '#c1bb1f' } },
        { value: [108.384366, 30.439702, 1], itemStyle: { color: '#b9be23' } },
        { value: [113.0823, 28.2568, 1], itemStyle: { color: '#a6c62c' } },
        { value: [102.9199, 25.46639, 1], itemStyle: { color: '#96cc34' } },
        { value: [119.4543, 25.9222, 1] },
      ]
      const test2 = [
        {
          coords: [
            [118.8062, 31.9208],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#4ab2e5' },
        },
        {
          coords: [
            [127.9688, 45.368],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#4fb6d2' },
        },
        {
          coords: [
            [110.3467, 41.4899],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#52b9c7' },
        },
        {
          coords: [
            [125.8154, 44.2584],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#5abead' },
        },
        {
          coords: [
            [116.4551, 40.2539],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#f34e2b' },
        },
        {
          coords: [
            [123.1238, 42.1216],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#f56321' },
        },
        {
          coords: [
            [114.4995, 38.1006],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#f56f1c' },
        },
        {
          coords: [
            [117.4219, 39.4189],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#f58414' },
        },
        {
          coords: [
            [112.3352, 37.9413],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#f58f0e' },
        },
        {
          coords: [
            [109.1162, 34.2004],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#f5a305' },
        },
        {
          coords: [
            [103.5901, 36.3043],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#e7ab0b' },
        },
        {
          coords: [
            [106.3586, 38.1775],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#dfae10' },
        },
        {
          coords: [
            [101.4038, 36.8207],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#d5b314' },
        },
        {
          coords: [
            [103.9526, 30.7617],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#c1bb1f' },
        },
        {
          coords: [
            [108.384366, 30.439702],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#b9be23' },
        },
        {
          coords: [
            [113.0823, 28.2568],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#a6c62c' },
        },
        {
          coords: [
            [102.9199, 25.46639],
            [119.4543, 25.9222],
          ],
          lineStyle: { color: '#96cc34' },
        },
      ]
      this.mapOptions.series[0].data = test1
      this.mapOptions.series[1].data = test2
      this.mapChart.setOption(this.mapOptions, true)
    },
  },
}
</script>

<style lang="scss">
.news-map {
  .list-title {
    font-size: 16px;
    margin-bottom: 16px;
  }
  .map-content {
    height: 720px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
  }
}
</style>