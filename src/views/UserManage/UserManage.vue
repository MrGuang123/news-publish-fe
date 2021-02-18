<template>
  <div class="user-manage">
    <div class="user-header">
      <h3 class="list-title">用户列表</h3>
      <a-input-search class="list-search" v-model="searchValue" placeholder="请输入用户名称" enter-button="搜索" @search="onSearch" />
      <a-button type="primary" @click="createUser" style="float:right;">新建用户</a-button>
    </div>
    <div class="search-content">
      <a-table :data-source="newsList" rowKey="id" :pagination="false">
        <a-table-column key="userName" title="用户名称" data-index="userName" />
        <a-table-column key="rolesName" title="角色类别" data-index="rolesName" />
        <a-table-column key="createdAt" title="创建日期" data-index="createdAt" />
        <a-table-column key="updatedAt" title="更新日期" data-index="updatedAt" />
        <!-- TODO: 创建人和状态需要后面添加到接口 -->
        <!-- <a-table-column key="publishTime" title="创建人" data-index="publishTime"></a-table-column>
        <a-table-column key="readCount" title="状态" data-index="readCount" width="80px"></a-table-column> -->
        <a-table-column key="action" title="操作" align="center" width="240px">
          <template #default="{ record }">
            <span class="list-action" @click="findDetail(record)">查看</span>
            <span class="list-action" @click="editNews(record)">编辑</span>
            <span class="list-action" @click="deleteNews(record)">删除</span>
            <span class="list-action" @click="findDetail(record)">密码重置</span>
          </template>
        </a-table-column>
      </a-table>
      <a-pagination class="pagination" show-quick-jumper :current="pageInfo.pageIndex" :pageSize="pageInfo.pageSize" :total="pageInfo.total" @change="onChange" />
    </div>
  </div>
</template>

<script>
import { getUserList } from '../../apis/methods'

export default {
  name: 'UserManage',
  data() {
    return {
      searchValue: '',
      // data
      newsList: [],
      roles: ['管理员', '作者', '浏览者'],
      pageInfo: {
        pageIndex: 1,
        pageSize: 10,
        total: 500,
      },
    }
  },
  computed: {},
  mounted() {
    // console.log(getUserList)
    this.getUserList()
  },
  methods: {
    async getUserList() {
      const result = await getUserList()
      const { data } = result
      if (data && data.length > 0) {
        data.forEach(item => {
          item.rolesName = this.handleRoles(item.roleIds)
        })
      }
      this.newsList = data
      this.pageInfo.total = data.length
    },
    handleRoles(roleIds) {
      let roles = roleIds.split(',')
      let rolesName = roles.map(roleId => this.roles[roleId])
      return rolesName.join(',')
    },
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
.user-manage {
  .user-header,
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

  // ::v-deep(.ant-pagination) {
  //   display: flex;
  //   justify-content: flex-end;
  // }
  ::v-deep .ant-pagination {
    display: flex;
    justify-content: flex-end;
  }
}
</style>