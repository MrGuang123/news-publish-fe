<template>
  <div class="label-manage">
    <div class="label-header">
      <h3 class="list-title">{{ $t('labelList.title') }}</h3>
      <a-input-search class="list-search" v-model="searchValue" :placeholder="$t('labelList.placeholder')" :enter-button="$t('labelList.searchBtn')" @search="onSearch" />
      <a-button type="primary" @click="createUser" style="float:right;">{{ $t('labelList.create') }}</a-button>
    </div>
    <div class="search-content">
      <a-table :data-source="labelList" rowKey="id" :pagination="false">
        <a-table-column key="labelName" :title="$t('labelList.labelName')" data-index="labelName" />
        <a-table-column key="labelDes" :title="$t('labelList.labelDes')" data-index="labelDes" />
        <a-table-column key="creatorName" :title="$t('labelList.creator')" data-index="creatorName"></a-table-column>
        <a-table-column key="updatedAt" :title="$t('labelList.updatedDate')" data-index="updatedAt" width="200px"></a-table-column>
        <a-table-column key="action" :title="$t('labelList.action')" align="center" width="240px">
          <template #default="{ id }">
            <span class="list-action" @click="findDetail(id)">{{ $t('labelList.view') }}</span>
            <span class="list-action" @click="editLabel(id)">{{ $t('labelList.edit') }}</span>
            <span class="list-action" @click="deleteLabel(id)">{{ $t('labelList.delete') }}</span>
          </template>
        </a-table-column>
      </a-table>
      <a-pagination class="pagination" show-quick-jumper :current="pageInfo.pageIndex" :pageSize="pageInfo.pageSize" :total="pageInfo.total" @change="onChange" />
    </div>
    <a-modal :title="modalTitle" :visible="visible" :confirm-loading="confirmLoading" @ok="submitLabel" @cancel="cancel">
      <a-form layout="horizontal">
        <a-form-item :label="$t('labelList.labelName') + '：'">
          <a-input :disabled="disabled" v-model="labelName" :placeholder="$t('labelList.pLabelName')" />
        </a-form-item>
        <a-form-item :label="$t('labelList.labelDes') + '：'">
          <a-textarea :disabled="disabled" :auto-size="{ minRows: 3, maxRows: 6 }" v-model="labelDes" :placeholder="$t('labelList.pLabelDes')" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import {
  getLabelList,
  createLabel,
  updateLabel,
  deleteLabel,
} from '../../apis/methods'

export default {
  name: 'LabelManage',
  data() {
    return {
      searchValue: '',
      // 弹框显隐
      visible: false,
      // 弹框loading显隐
      confirmLoading: false,
      // 弹框输入框的是否禁用
      disabled: false,
      // 是否是创建标签
      modalFlag: 0,
      // 当前编辑的标签id
      lableId: '',
      // 标签名称
      labelName: '',
      // 标签描述
      labelDes: '',
      // 标签列表
      labelList: [],
      // 分页信息
      pageInfo: {
        pageIndex: 1,
        pageSize: 10,
        total: 0,
      },
    }
  },
  computed: {
    modalTitle() {
      const modalTilePrefix = ['创建', '修改', '查看']
      return `${modalTilePrefix[this.modalFlag]}标签`
    },
  },
  mounted() {
    this.getLabelList()
  },
  methods: {
    // 获取标签列表
    async getLabelList() {
      const params = {
        pageIndex: this.pageInfo.pageIndex,
        pageSize: this.pageInfo.pageSize,
      }
      if (this.searchValue) {
        params.labelName = this.searchValue
      }

      const result = await getLabelList(params)
      const { data } = result
      data.forEach(item => {
        item.creatorName = item['user.creatorName']
      })

      this.labelList = data
      this.pageInfo.total = data.length
    },
    // 搜索框查询
    onSearch() {
      this.getLabelList()
    },
    onChange(pageIndex) {
      this.pageInfo.pageIndex = pageIndex
      console.log(pageIndex)
    },
    // 关闭弹框
    cancel() {
      this.visible = false
      this.confirmLoading = false
    },
    // 创建标签打开弹框
    createUser() {
      this.labelName = ''
      this.labelDes = ''
      this.visible = true
      this.disabled = false
      this.modalFlag = 0
    },
    // 查看详情
    findDetail(id) {
      const labelInfo = this.labelList.find(item => item.id === id)
      this.labelName = labelInfo.labelName
      this.labelDes = labelInfo.labelDes

      this.visible = true
      this.disabled = true
      this.modalFlag = 2
    },
    // 编辑标签
    editLabel(id) {
      const labelInfo = this.labelList.find(item => item.id === id)
      this.labelName = labelInfo.labelName
      this.labelDes = labelInfo.labelDes
      this.lableId = id

      this.visible = true
      this.disabled = false
      this.modalFlag = 1
    },
    // 删除标签
    async deleteLabel(id) {
      const params = { id }
      await deleteLabel(params)
      await this.getLabelList()
      this.$message.success('删除标签成功')
    },
    // 提交标签，创建或者更新
    async submitLabel() {
      if (this.labelName === '' || !this.labelDes === '') {
        return this.$message.error('请将内容填写完整')
      }

      const actions = [createLabel, updateLabel, '']
      const action = actions[this.modalFlag]
      if (!action) {
        return (this.visible = false)
      }

      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      const params = {
        labelName: this.labelName,
        labelDes: this.labelDes,
        createdUserId: userInfo.id,
      }
      if (this.modalFlag === 1) {
        params.id = this.lableId
      }

      this.confirmLoading = true
      await action(params)
      await this.getLabelList()
      this.confirmLoading = false
      const infoPrefix = this.modalFlag ? '修改' : '创建'
      this.$message.success(`${infoPrefix}标签成功`)

      this.visible = false
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

  ::v-deep .ant-pagination {
    display: flex;
    justify-content: flex-end;
  }
}
::v-deep .ant-modal-wrap {
  .ant-modal-footer {
    border-top: none;
  }
}
::v-deep .ant-form {
  .ant-form-item {
    display: flex;
  }
  .ant-form-item-control-wrapper {
    flex: 1;
  }
}
</style>