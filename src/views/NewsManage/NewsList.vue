<template>
  <div class="news-list">
    <div class="news-header">
      <h3 class="list-title">{{ $t('newsList.title') }}</h3>
      <a-input-search class="list-search" v-model="searchValue" :placeholder="$t('newsList.placeholder')" :enter-button="$t('newsList.searchBtn')" @search="onSearch" />
    </div>
    <div class="search-content">
      <div class="control-group">
        <a-button type="primary" ghost shape="round" @click="download">{{ $t('newsList.download') }}</a-button>
        <a-button type="primary" shape="round" @click="download('all')">{{ $t('newsList.downloadAll') }}</a-button>
      </div>
      <a-table :row-selection="rowSelection()" :data-source="newsList" :pagination="false">
        <a-table-column key="title" :title="$t('newsList.newsTitle')" data-index="title" />
        <a-table-column key="author" :title="$t('newsList.author')" data-index="author" />
        <a-table-column key="publishTime" :title="$t('newsList.publishDate')" data-index="publishTime"></a-table-column>
        <a-table-column key="readCount" :title="$t('newsList.readCount')" data-index="readCount" width="160px"></a-table-column>
        <a-table-column key="action" :title="$t('newsList.action')" align="center" width="160px">
          <template slot-scope="text, record">
            <span class="list-action" @click="findDetail(record)">{{ $t('newsList.view') }}</span>
          </template>
        </a-table-column>
      </a-table>
      <a-pagination class="pagination" show-quick-jumper :current="pageInfo.pageIndex" :pageSize="pageInfo.pageSize" :total="pageInfo.total" @change="onChange" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data() {
    return {
      searchValue: '',
      newsList: [
        {
          title: 'test1',
          author: 'tom',
          publishTime: '2021-1-1',
          readCount: 20,
          key: 1,
        },
      ],
      pageInfo: {
        pageIndex: 1,
        pageSize: 10,
        total: 500,
      },
    }
  },
  computed: {},
  mounted() {},
  methods: {
    onSearch() {},
    handleChange() {},
    findDetail(record) {
      console.log(record)
    },
    download(flag) {
      if (flag === 'all') {
        // 下载全部新闻
      } else {
        // 根据表格选项进行多项下载
      }
    },
    onChange(pageIndex) {
      this.pageInfo.pageIndex = pageIndex
      console.log(pageIndex)
    },
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
          )
        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.news-list {
  .news-header,
  .search-content {
    padding: 20px 16px;
    background: #fff;
    margin-bottom: 20px;
    border-radius: 6px;
  }
  .control-group {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
    button + button {
      margin-left: 10px;
    }
  }

  .list-title {
    font-size: 16px;
    margin-bottom: 16px;
  }
  .list-search {
    width: 50%;
  }
  .list-action {
    padding: 5px;
    color: #1890ff;
    cursor: pointer;
    & + .list-action {
      margin-left: 5px;
    }
  }
  .pagination {
    margin-top: 16px;
  }

  ::v-deep .ant-pagination {
    display: flex;
    justify-content: flex-end;
  }
}
</style>