import request from '@/utils/request'

export function login(data) {
  return request({
    headers:{'Authorization' :'basic ZWM0NTIxOTNjMDhkNDIyNGIxYjVlMjgwYzZlZDllNWQ6aW5zZ2Vla1ZVRQ=='},
    url: process.env.VUE_APP_SERVER_API+'/platform/auc/v1/login',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    headers:{'Authorization':'123','Content-Type':'application/json'},
    url: process.env.VUE_APP_SERVER_API+'/platform/org/v1/users/list',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: process.env.VUE_APP_SERVER_API+'/platform/auc/v1/logout',
    method: 'post'
  })
}
