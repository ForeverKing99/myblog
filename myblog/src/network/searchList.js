import {request} from './request'
export function searchList(tab){
  return request({
    url:'/searchList/'+tab,
    
  })
}
