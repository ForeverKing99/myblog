import {request} from './request'
export function articleUpload(obj){
  return request({
    params:{
      reqpath:"articleupdate"
    },
    method:"post",
    data:{...obj}
  })
}
