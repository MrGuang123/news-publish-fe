<template>
  <div class="container">
    <!-- <div class="home-carousel-wrap">
      <a-carousel effect="fade">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </a-carousel>
    </div> -->
    <!-- 网站介绍 -->
    <section class="websit-des" :class="shrinkClass">
      <a-list :bordered="false" :data-source="desData">
        <a-list-item slot="renderItem" slot-scope="item, index">
          {{index + 1}} : {{ item }}
        </a-list-item>
        <div slot="header">
          <h3 class="title">{{ $t('home.des') }}</h3>
        </div>
      </a-list>
      <div class="des-control" @click="desControl">
        <a-icon :type="desControlIcon" />
      </div>
    </section>
    <!-- 数据展示 -->
    <section class="data-show">
      <a-row :gutter="36">
        <a-col span="6">
          <div class="show-card writer">
            <div class="card-icon">
              <a-icon type="file-word" />
            </div>
            <div class="card-content">
              <span class="card-title">{{ $t('home.authors') }}</span>
              <span class="card-count">6</span>
            </div>
          </div>
        </a-col>
        <a-col span="6">
          <div class="show-card today">
            <div class="card-icon">
              <a-icon type="funnel-plot" />
            </div>
            <div class="card-content">
              <span class="card-title">{{ $t('home.todayPublishCount') }}</span>
              <span class="card-count">6</span>
            </div>
          </div>
        </a-col>
        <a-col span="6">
          <div class="show-card total">
            <div class="card-icon">
              <a-icon type="dribbble-circle" theme="filled" />
            </div>
            <div class="card-content">
              <span class="card-title">{{ $t('home.allPublishCount') }}</span>
              <span class="card-count">16</span>
            </div>
          </div>
        </a-col>
        <a-col span="6">
          <div class="show-card total-read">
            <div class="card-icon">
              <a-icon type="eye" />
            </div>
            <div class="card-content">
              <span class="card-title">{{ $t('home.totalViews') }}</span>
              <span class="card-count">166</span>
            </div>
          </div>
        </a-col>
      </a-row>
    </section>
    <!-- 最新新闻列表 -->
    <section class="home-list">
      <h3 class="title"><span>{{ $t('home.newNews') }}</span><span class="more">{{ $t('home.more') }}</span></h3>
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
    </section>
    <!-- 热点新闻列表 -->
    <section class="home-list">
      <h3 class="title"><span>{{ $t('home.hotNews') }}</span><span class="more">{{ $t('home.more') }}</span></h3>
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
    </section>
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
      isShrink: true,
      shrinkClass: 'shrink',
      desControlIcon: 'down',
      desData: [
        '本站为新闻发布系统，包括：首页、新闻管理、用户管理、标签管理、新闻统计五大模块',
        '前端技术栈为Vue2+Vue-Router+Vuex+Axios+Antd-vue+WangEditor等',
        '服务端技术栈为Koa2+Koa-Router+AwilixMariaDB+Sequelize+TypeScript等',
        '安全验证为服务端根据用户信息签发token，有效期为2小时，除登陆所有请求头部须携带Bearer规范token',
        '目前标题、导航菜单、Logo、按钮支持中文和英文切换',
        '新闻上传支持文字、表情和图片',
      ],
    }
  },
  mounted() {
    // console.log('api', api)
    // this.getNewestList()
    // this.getHotNewsList()
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
    desControl() {
      this.shrinkClass = this.isShrink ? 'shrink' : ''
      this.desControlIcon = this.isShrink ? 'down' : 'up'
      this.isShrink = !this.isShrink
    },
  },
}
</script>
<style lang="scss">
// .slick-slide {
//   text-align: center;
//   height: 160px;
//   line-height: 160px;
//   background: #364d79;
//   overflow: hidden;
// }
</style>
<style lang="scss" scoped>
.ant-carousel {
  ::v-deep .slick-slide {
    text-align: center;
    height: 300px;
    line-height: 300px;
    background: #364d79;
    overflow: hidden;
  }
}
.slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.container {
  padding-bottom: 50px;
  .home-carousel-wrap {
    margin-bottom: 20px;
  }
  .websit-des {
    @extend .panel-common;
    overflow: hidden;
    position: relative;
    padding-bottom: 36px;
    height: 396px;
    transition: all 0.6s;
    .title {
      font-size: 18px;
      padding-left: 16px;
      line-height: 32px;
    }
    &.shrink {
      height: 120px;
      .des-control {
        box-shadow: 0 -10px 10px 0 rgba(99, 99, 99, 0.6);
      }
    }
    .des-control {
      position: absolute;
      left: 0;
      bottom: 3px;
      line-height: 36px;
      text-align: center;
      width: 100%;
      background: #fff;
      box-shadow: none;
      transition: all 0.6s;
    }
  }
  .data-show {
    margin-bottom: 20px;
    .show-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 6px;
      border: 1px solid;
      padding: 0 10px;
      &.writer {
        color: #40c9c6;
        background: #b8dad9;
      }
      &.today {
        color: #36a3f7;
        background: #b2cce0;
      }
      &.total {
        color: #f4516c;
        background: #deadb5;
      }
      &.total-read {
        color: #34bfa3;
        background: #9bc7be;
      }
      .card-icon {
        flex-basis: 100px;
        font-size: 50px;
      }
      .card-content {
        display: flex;
        flex: 1;
        padding-left: 10px;
        flex-direction: column;
        justify-content: center;
        .card-title {
          color: #fff;
          font-size: 14px;
        }
        .card-count {
          font-size: 28px;
          font-weight: bold;
        }
      }
    }
  }
  .home-list {
    @extend .panel-common;
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