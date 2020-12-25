import {request} from './request'
export function commitLogin(obj){
  return request({
    url:'/login',
    method:'post',
    data:{...obj}
  })
}