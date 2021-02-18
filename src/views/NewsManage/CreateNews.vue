<template>
  <div class="create-news">
    <div class="create-header">
      <h3 class="header-title">创建新闻</h3>
      <div class="header-content">
        <a-button type="primary" class="btn-control" ghost shape="round">下载模板</a-button>
        <a-button type="primary" class="btn-control" shape="round">上传新闻</a-button>
      </div>
    </div>
    <div class="create-content">
      <a-form :form="formData" label-align="right" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <a-row :gutter="24">
          <a-col :offset="2" :span="9">
            <a-form-item label="选择地区：" name="areaId" :validate-status="validate.areaIdStatus" :help="validate.areaIdHelp">
              <a-select v-model="formData.areaId" @change="areaChange">
                <a-select-option v-for="item in geoMap" :value="item.value" :key="item.name">{{item.name}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="9">
            <a-form-item label="选择标签：" name="labelIds" :validate-status="validate.labelIdsStatus" :help="validate.labelIdsHelp">
              <a-select v-model="formData.labelIds" mode="multiple" @change="labelChange">
                <a-select-option v-for="item in geoMap" :value="item.value" :key="item.name">{{item.name}}</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
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
        title: 'aaa',
        summary: 'aaa',
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
    }
  },
  mounted() {
    this.initEditor()
    console.log(uploadImage)
  },
  methods: {
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
        }
      }

      const content = this.getEditorData()
      this.validate.editorError = ''
      if (!content) {
        this.validate.editorError = '请输入新闻内容'
      }
    },
    submitNews() {
      this.checkData()
      console.log(this.formData)
    },
  },
  beforeDestroy() {
    this.editor.destroy()
    this.editor = null
  },
}
</script>

<style lang="scss">
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
      display: flex;
      justify-content: flex-end;
    }
  }
  .create-content {
    @extend .panel-common;
    padding-bottom: 50px;
    .editor {
      margin-bottom: 20px;
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