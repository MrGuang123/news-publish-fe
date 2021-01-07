<template>
  <div class="news-analysis">
    <h3 class="list-title">统计图表</h3>
    <a-row class="analysis-row">
      <a-col :span="24">
        <WordCloudChart></WordCloudChart>
      </a-col>
    </a-row>
    <div class="analysis-row">
      <div class="chart-item">
        <LineChart></LineChart>
      </div>
      <div class="chart-item">
        <BarChart></BarChart>
      </div>
    </div>
  </div>
</template>
<script>
import WordCloudChart from './WordCloud'
import LineChart from './line'
import BarChart from './bar'

export default {
  name: 'NewsAnalysis',
  components: {
    WordCloudChart,
    LineChart,
    BarChart,
  },
  mounted() {
    console.log(this.$echarts)
  },
}
</script>
<style lang="scss">
.news-analysis {
  .list-title {
    font-size: 16px;
    margin-bottom: 16px;
  }
  .analysis-row {
    margin-bottom: 16px;
    width: 100%;
    .chart-item {
      border-radius: 6px;
      overflow: hidden;
      width: 49%;
      float: left;
      & + .chart-item {
        margin-left: 2%;
      }
    }
  }
}
</style>