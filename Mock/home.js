import urls from '../src/apis/urls'
import Mock from 'mockjs'

const { Random } = Mock

Mock.mock(urls.newestNewsList, 'get', {
  'data|1-6': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'title': Random.title(1, 2),
    'content': Random.csentence(6, 10)
  }]
})

Mock.mock(urls.hotNewsList, 'get', {
  'data|1-6': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'title': Random.title(1, 2),
    'content': Random.csentence(6, 10)
  }]
})