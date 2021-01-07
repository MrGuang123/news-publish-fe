<template>
  <div class="my-news">
    <div class="news-header">
      <h3 class="list-title">我的新闻</h3>
      <a-input-search class="list-search" v-model="searchValue" placeholder="请输入新闻标题" enter-button="搜索" @search="onSearch" />
      <a-button type="primary" @click="createNews" style="float:right;">新建新闻</a-button>
    </div>
    <div class="search-content">
      <div class="control-group">
        <a-button type="primary" ghost shape="round" @click="download">下载新闻</a-button>
        <a-button type="primary" shape="round" @click="download('all')">全部下载</a-button>
      </div>
      <a-table :row-selection="rowSelection()" :data-source="data" :pagination="false">
        <a-table-column key="title" title="新闻标题" data-index="title" />
        <a-table-column key="author" title="作者" data-index="author" />
        <a-table-column key="publishTime" title="发布时间" data-index="publishTime"></a-table-column>
        <a-table-column key="readCount" title="阅读数" data-index="readCount" width="100px"></a-table-column>
        <a-table-column key="action" title="操作" align="center" width="200px">
          <template slot-scope="record">
            <span class="list-action" @click="findDetail(record)">查看</span>
            <span class="list-action" @click="editNews(record)">编辑</span>
            <span class="list-action" @click="deleteNews(record)">删除</span>
          </template>
        </a-table-column>
      </a-table>
      <!-- <a-table :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }" :data-source="data">
        <a-table-column key="name"></a-table-column>
      </a-table> -->
      <a-pagination class="pagination" show-quick-jumper :current="pageInfo.pageIndex" :pageSize="pageInfo.pageSize" :total="pageInfo.total" @change="onChange" />
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    title: 'test1',
    author: 'tom',
    publishTime: '2021-1-1',
    readCount: 20,
    key: i,
  })
}
export default {
  name: 'MyNews',
  data() {
    return {
      searchValue: '',
      data,
      columns,
      selectedRowKeys: [],
      // data: [
      //   {
      //     title: 'test1',
      //     author: 'tom',
      //     publishTime: '2021-1-1',
      //     readCount: 20,
      //     key: 1,
      //   },
      // ],
      pageInfo: {
        pageIndex: 1,
        pageSize: 10,
        total: 500,
      },
    }
  },
  computed: {},
  mounted() {
    console.log(this.$route)
  },
  methods: {
    onSearch() {},
    createNews() {},
    findDetail(record) {
      console.log(record)
    },
    editNews(record) {
      console.log(record)
    },
    deleteNews(record) {
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
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
    rowSelection() {
      return {
        onChange: selectedRowKeys => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`)
        },
        selectedRowKeys: [],
      }
    },
  },
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