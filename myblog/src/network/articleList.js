import { request } from './request'
export function getArticleList() {
  return request({
    params: {
      reqpath: "articlelist"
    }

  })
}
export function getArticleDetail(_id) {
  return request({
    params: {
      reqpath: "articledetail",
      _id
    }
  })
}
