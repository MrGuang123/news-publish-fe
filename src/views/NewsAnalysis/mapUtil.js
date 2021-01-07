// 地图上省和直辖市的坐标
export const chinaGeoCoordMap = {
  黑龙江: [127.9688, 47.368],
  内蒙古: [115.3467, 43.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [96.4038, 35.8207],
  新疆: [86.9236, 40.5883],
  西藏: [91.11, 29.97],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [118.1582, 35.8701],
  河南: [113.4668, 34.6234],
  江苏: [119.8062, 32.9208],
  安徽: [117.29, 32.0581],
  湖北: [113.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  福建: [117.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [112.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [101.9199, 24.4663],
  广东: [114.12244, 24.009505],
  广西: [108.479, 23.1152],
  海南: [109.3893, 18.8516],
  上海: [121.4648, 31.2891]
};

// 模拟后端接口数据
export const mockData = [
  {
    name: '上海',
    value: 100
  },
  {
    name: '黑龙江',
    value: 50
  },
  {
    name: '北京市',
    value: 60
  },
  {
    name: '四川',
    value: 10
  },
  {
    name: '海南',
    value: 15
  },
  {
    name: '内蒙古',
    value: 26
  },
  {
    name: '山东',
    value: 36
  },
  {
    name: '河北',
    value: 23
  },
  {
    name: '河南',
    value: 78
  },
  {
    name: '湖南',
    value: 56
  },
]

// 生成随机颜色
function randomColor() {
  return '#' +('00000'+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6)
}

// 生成地图的点和线的数据
export const generateData = function(data) {
  const origin = chinaGeoCoordMap['北京市']

  const pointData = data.map(item => {
    return {
      value: [...chinaGeoCoordMap[item.name], item.value],
      name: item.name,
      itemStyle: {
        color: randomColor()
      }
    }
  })

  const lineData = data.map((item, index) => {
    return {
      coords: [chinaGeoCoordMap[item.name],origin],
      lineStyle:{
        color: pointData[index].itemStyle.color
      }
    }
  })

  return {
    pointData,
    lineData
  }
}