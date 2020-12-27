import {request} from './request'
export function getArticleList(){
  return request({
    url:'/articlelist',
    
  })
}
export function getArticleDetail(id){
  return request({
    url:'/articlepage/'+id,
  })
}