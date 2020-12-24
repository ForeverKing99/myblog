import {request} from './request'
export function articleUpload(obj){
  return request({
    url:'/articleUpload',
    method:"post",
    data:{...obj}
  })
}
