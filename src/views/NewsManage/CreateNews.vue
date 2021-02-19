<template>
  <div class="create-news">
    <div class="create-header">
      <h3 class="header-title">创建新闻</h3>
      <div class="header-content">
        <a-row :gutter="24">
          <a-col :offset="2" :span="6">
            <a-select v-model="formData.areaId" placeholder="选择地区" @change="areaChange">
              <a-select-option v-for="item in geoMap" :value="item.value" :key="item.name">{{item.name}}</a-select-option>
            </a-select>
          </a-col>
          <a-col :span="6">
            <a-select v-model="formData.labelIds" mode="multiple" placeholder="选择标签" @change="labelChange">
              <a-select-option v-for="item in labelData" :value="item.id" :key="item.id">{{item.labelName}}</a-select-option>
            </a-select>
          </a-col>
          <a-col :span="3" :offset="3">
            <a-button type="primary" class="btn-control" ghost shape="round">下载模板</a-button>
          </a-col>
          <a-col :span="3">
            <a-button type="primary" class="btn-control" shape="round">上传新闻</a-button>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="create-content">
      <a-form :form="formData" label-align="right" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <a-form-item label="新闻标题：" name="title" :validate-status="validate.titleStatus" :help="validate.titleHelp">
          <a-input v-model="formData.title" placeholder="请输入新闻标题" />
        </a-form-item>
        <a-form-item label="新闻摘要：" name="summary" :validate-status="validate.summaryStatus" :help="validate.summaryHelp">
          <a-input v-model="formData.summary" placeholder="请输入新闻摘要" />
        </a-form-item>
      </a-form>
      <div class="editor">
        <div id="editorDom" :class="{'editor-error': validate.editorError}"></div>
        <div v-if="validate.editorError" style="color:#f5222d;">{{validate.editorError}}</div>
      </div>
      <div class="content-footer">
        <a-button type="primary" class="btn-control" ghost shape="round" @click="submitNews(1)">发布新闻</a-button>
        <a-button type="primary" class="btn-control" shape="round" @click="submitNews(0)">暂存新闻</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import wangEditor from 'wangeditor'
import { geoMap } from '../../assets/js/geoMap'
import urls from '../../apis/urls'
import { getLabelList } from '../../apis/methods'

const { uploadImage } = urls

export default {
  name: 'NewsDetail',
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 12 },
      },
      formData: {
        title: '',
        summary: '',
        areaId: 0,
        labelIds: [],
      },
      validate: {
        titleStatus: '',
        titleHelp: '',
        summaryStatus: '',
        summaryHelp: '',
        areaIdStatus: '',
        areaIdHelp: '',
        labelIdsStatus: '',
        labelIdsHelp: '',
        editorError: '',
      },
      editor: null,
      editorContent: '',
      // 地图数据
      geoMap,
      // 标签数据
      labelData: [],
    }
  },
  watch: {
    'formData.labelIds': function (value) {
      console.log(value)
      if (value.length > 3) {
        const last = value[value.length - 1]
        const prev = value.slice(0, 2)
        this.formData.labelIds = prev.concat(last)
      }
    },
  },
  mounted() {
    this.initLableSelect()
    this.initEditor()
    console.log(uploadImage)
  },
  methods: {
    async initLableSelect() {
      const params = {
        pageIndex: 1,
        pageSize: 10000,
      }
      const { data } = await getLabelList(params)
      this.labelData = data
      console.log(data)
    },
    initEditor() {
      this.editor = new wangEditor(`#editorDom`)
      this.editor.config.onchange = html => {
        this.editorContent = html
      }
      this.editor.config.menus = [
        // 菜单配置
        'head', // 标题
        'bold', // 粗体
        'fontSize', // 字号
        'fontName', // 字体
        'italic', // 斜体
        'underline', // 下划线
        'strikeThrough', // 删除线
        'foreColor', // 文字颜色
        'backColor', // 背景颜色
        'link', // 插入链接
        'list', // 列表
        'justify', // 对齐方式
        'quote', // 引用
        'emoticon', // 表情
        'image', // 插入图片
        'table', // 表格
        'code', // 插入代码
        'undo', // 撤销
        'redo', // 重复
      ]
      // 设置图片上传地址
      this.editor.config.uploadImgServer = uploadImage
      // 设置图片允许上传的类型
      this.editor.config.uploadImgAccept = ['jpg', 'jpeg', 'png', 'gif']
      // 设置请求头
      const token = localStorage.getItem('token')
      // 请求头添加token
      this.editor.config.uploadImgHeaders = {
        authorization: `Bearer ${token}`,
      }
      // 定义文件的名称
      this.editor.config.uploadFileName = 'imageFile'
      // 隐藏插入网络图片功能
      this.editor.config.showLinkImg = false
      // 插入图片监听
      this.editor.config.uploadImgHooks = {
        fail: function (xhr, editor, result) {
          console.log(result)
        },
        success: function () {},
      }
      this.editor.debug = true
      this.editor.create()
    },
    getEditorData() {
      // 通过代码获取编辑器内容
      let data = this.editor.txt.html()
      console.log(data)
      return data
    },
    areaChange(value) {
      console.log(value)
    },
    labelChange(value) {
      console.log(value)
    },
    // 表单手动校验
    checkData() {
      let flag = true
      const errorInfo = {
        title: '请填写标题',
        summary: '请填写摘要',
        areaId: '请选择一个地址',
        labelIds: '请选择1-3个标签',
      }
      for (let key in this.formData) {
        this.validate[`${key}Status`] = ''
        this.validate[`${key}Help`] = ''
        if (this.formData[key] === '' || this.formData[key].length === 0) {
          this.validate[`${key}Status`] = 'error'
          this.validate[`${key}Help`] = errorInfo[key]
          flag = false
        }
      }

      const content = this.getEditorData()
      this.validate.editorError = ''
      if (!content) {
        this.validate.editorError = '请输入新闻内容'
        flag = false
      }

      return flag
    },
    submitNews(isPublished) {
      const valid = this.checkData()
      if (!valid) return

      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      const params = {
        newsTitle: this.formData.title,
        summary: this.formData.summary,
        creatorId: userInfo.id,
        labelIds: this.formData.labelIds.join(','),
        content: this.getEditorData(),
        isPublished,
        readCount: 0,
      }
      // TODO: 等待对接接口
      console.log(params)
    },
  },
  beforeDestroy() {
    this.editor.destroy()
    this.editor = null
  },
}
</script>

<style lang="scss" scoped>
::v-deep .ant-select {
  min-width: 200px;
}
.create-news {
  .btn-control:not(:first-child) {
    margin-left: 20px;
  }
  .create-header {
    @extend .panel-common;
    .header-title {
      font-size: 16px;
    }
    .header-content {
      // display: flex;
      // justify-content: flex-end;
    }
  }
  .create-content {
    @extend .panel-common;
    padding-bottom: 50px;
    .editor {
      margin: 60px 0 20px;
    }
    .content-footer {
      display: flex;
      justify-content: center;
    }
  }

  .editor-error {
    .w-e-toolbar,
    .w-e-text-container {
      border-color: #f5222d !important;
    }
  }
}
</style>