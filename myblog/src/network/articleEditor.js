import {request} from './request'
export function articleUpload(content){
  return request({
    url:'/articleUpload',
    method:"post",
    data:{
      title:'测试标题',
      content,
    }
  })
}
