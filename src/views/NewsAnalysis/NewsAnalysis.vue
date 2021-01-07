<template>
  <div class="news-analysis">
    <h3 class="list-title">统计图表</h3>
    <a-row class="analysis-row">
      <a-col :span="24">
        <WordCloudChart></WordCloudChart>
      </a-col>
    </a-row>
    <a-row class="analysis-row" :gutter="[0, 16]">
      <a-col :span="12">
        <LineChart></LineChart>
      </a-col>
      <a-col :span="12">zhexian</a-col>
    </a-row>
  </div>
</template>
<script>
import WordCloudChart from './WordCloud'
import LineChart from './line'

export default {
  name: 'NewsAnalysis',
  components: {
    WordCloudChart,
    LineChart,
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
  }
}
</style>