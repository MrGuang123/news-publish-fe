<template>
  <div class="my-news">
    <div class="news-header">
      <h3 class="list-title">全部新闻</h3>
      <a-input-search class="list-search" v-model:value="searchValue" placeholder="请输入新闻标题" enter-button="搜索" @search="onSearch" />
      <div class="control-group">
        <a-button>下载新闻</a-button>
        <a-button type="primary">新建新闻</a-button>
      </div>
    </div>
    <div class="search-content">
      <a-table :row-selection="rowSelection" :data-source="data" :pagination="false">
        <a-table-column key="title" title="新闻标题" data-index="title" />
        <a-table-column key="author" title="作者" data-index="author" />
        <a-table-column key="publishTime" title="发布时间" data-index="publishTime"></a-table-column>
        <a-table-column key="readCount" title="阅读数" data-index="readCount" width="80px"></a-table-column>
        <a-table-column key="action" title="Action" align="center" width="200px">
          <template #default="{ record }">
            <span class="list-action" @click="findDetail(record)">查看</span>
            <span class="list-action" @click="editNews(record)">编辑</span>
            <span class="list-action" @click="deleteNews(record)">删除</span>
            <span class="list-action" @click="download(record)">下载</span>
          </template>
        </a-table-column>
      </a-table>
      <a-pagination class="pagination" show-quick-jumper :current="pageInfo.pageIndex" :pageSize="pageInfo.pageSize" :total="pageInfo.total" @change="onChange" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyNews',
  data() {
    return {
      searchValue: '',
      // data
      data: [
        {
          title: 'test1',
          author: 'tom',
          publishTime: '2021-1-1',
          readCount: 20,
          key: 1
        }
      ],
      pageInfo: {
        pageIndex: 1,
        pageSize: 10,
        total: 500
      }
    }
  },
  computed: {},
  mounted() {
    console.log(this.$route)
  },
  methods: {
    onSearch() {},
    findDetail(record) {
      console.log(record)
    },
    editNews(record) {
      console.log(record)
    },
    deleteNews(record) {
      console.log(record)
    },
    download(record) {
      console.log(record)
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
          name: record.name
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-news {
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

  ::v-deep(.ant-pagination) {
    display: flex;
    justify-content: flex-end;
  }
}
</style>