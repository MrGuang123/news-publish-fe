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
        <a-form-item label="新闻标题：" name="title">
          <a-input placeholder="请输入新闻标题" />
        </a-form-item>
        <a-form-item label="新闻摘要：" name="summary">
          <a-input placeholder="请输入新闻摘要" />
        </a-form-item>
      </a-form>
      <div class="editor">
        <div id="editorDom"></div>
      </div>
      <div class="content-footer">
        <a-button type="primary" class="btn-control" ghost shape="round">发布新闻</a-button>
        <a-button type="primary" class="btn-control" shape="round">暂存新闻</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import wangEditor from 'wangeditor'
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
      },
      editor: null,
      editorContent: '',
    }
  },
  mounted() {
    this.initEditor()
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
      this.editor.create()
    },
    getEditorData() {
      // 通过代码获取编辑器内容
      let data = this.editor.txt.html()
      alert(data)
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
}
</style>