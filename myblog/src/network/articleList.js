import { request } from './request'
export function getArticleList() {
  return request({
    params: {
      reqpath: "articlelist"
    }

  })
}
export function getArticleDetail(id) {
  return request({
    params: {
      reqpath: "articledetail",
      id
    }
  })
}
