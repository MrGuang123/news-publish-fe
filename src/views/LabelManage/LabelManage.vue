<template>
  <div class="label-manage">
    <div class="label-header">
      <h3 class="list-title">全部新闻</h3>
      <a-input-search class="list-search" v-model="searchValue" placeholder="请输入标签名称" enter-button="搜索" @search="onSearch" />
      <a-button type="primary" @click="createUser" style="float:right;">新建标签</a-button>
    </div>
    <div class="search-content">
      <a-table :data-source="data" :pagination="false">
        <a-table-column key="title" title="标签名称" data-index="title" />
        <a-table-column key="author" title="标签描述" data-index="author" />
        <a-table-column key="publishTime" title="创建人" data-index="publishTime"></a-table-column>
        <a-table-column key="readCount" title="更新时间" data-index="readCount" width="80px"></a-table-column>
        <a-table-column key="action" title="操作" align="center" width="240px">
          <template #default="{ record }">
            <span class="list-action" @click="findDetail(record)">查看</span>
            <span class="list-action" @click="editNews(record)">编辑</span>
            <span class="list-action" @click="deleteNews(record)">删除</span>
          </template>
        </a-table-column>
      </a-table>
      <a-pagination class="pagination" show-quick-jumper :current="pageInfo.pageIndex" :pageSize="pageInfo.pageSize" :total="pageInfo.total" @change="onChange" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LabelManage',
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
  mounted() {
    console.log(this.$route)
  },
  methods: {
    onSearch() {},
    createUser() {},
    findDetail(record) {
      console.log(record)
    },
    editNews(record) {
      console.log(record)
    },
    deleteNews(record) {
      console.log(record)
    },
    onChange(pageIndex) {
      this.pageInfo.pageIndex = pageIndex
      console.log(pageIndex)
    },
  },
}
</script>

<style lang="scss" scoped>
.label-manage {
  .label-header,
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

  ::v-deep(.ant-pagination) {
    display: flex;
    justify-content: flex-end;
  }
}
</style>