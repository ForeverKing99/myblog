import {request} from './request'
export function commitLogin(obj){
  return request({
    params:{
      reqpath:"login"
    },
    method:'post',
    data:{...obj}
  })
}