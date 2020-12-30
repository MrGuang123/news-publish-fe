import urls from '../src/apis/urls'
import Mock from 'mockjs'
console.log(urls)
console.log(Mock)
const { Random } = Mock

Mock.mock(urls.newsList, 'get', {
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }]
})
Mock.mock(urls.newestNewsList, 'get', {
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'title': Random.title(1, 2)
  }]
})