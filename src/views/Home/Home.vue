<template>
  <div class="container">
    <div class="home-carousel-wrap">
      <a-carousel class="carousel" effect="fade" autoplay>
        <div class="carousel-item">
          <span>1</span>
        </div>
        <div class="carousel-item">
          <span>2</span>
        </div>
        <div class="carousel-item">
          <span>3</span>
        </div>
        <div class="carousel-item">
          <span>4</span>
        </div>
      </a-carousel>
    </div>
    <div class="home-list">
      <h3 class="title"><span>最新新闻</span><span class="more">更多</span></h3>
      <a-list item-layout="horizontal" :data-source="newestNewsList">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta :description="item.content">
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
    <div class="home-list">
      <h3 class="title"><span>热点新闻</span><span class="more">更多</span></h3>
      <a-list item-layout="horizontal" :data-source="hotNewsList">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta :description="item.content">
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>
<script>
import api from '../../apis/methods'

export default {
  name: 'Home',
  data() {
    return {
      newestNewsList: [],
      hotNewsList: [],
    }
  },
  mounted() {
    // console.log('api', api)
    this.getNewestList()
    this.getHotNewsList()
  },
  methods: {
    async getNewestList() {
      const { getNewestList } = api
      let { data } = await getNewestList()
      this.newestNewsList = data.data
      console.log('result', data)
    },
    async getHotNewsList() {
      const { getHotNewsList } = api
      let { data } = await getHotNewsList()
      this.hotNewsList = data.data
      console.log('result', data)
    },
  },
}
</script>
<style lang="scss" scoped>
// .ant-carousel >>> .slick-slide {
//   height: 300px;
//   color: #fff;
//   overflow: hidden;
// }
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
.container {
  .home-carousel-wrap {
    background: #1890ff;
    margin-bottom: 20px;
  }
  .home-list {
    margin-bottom: 20px;
    background: #fff;
    padding: 16px;
    border-radius: 5px;
    .title {
      font-size: 18px;
      padding-left: 16px;
      line-height: 32px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      .more {
        padding: 0 10px;
        font-size: 14px;
        background: #1890ff;
        color: #fff;
        border-radius: 6px;
      }
    }
  }
}
</style>