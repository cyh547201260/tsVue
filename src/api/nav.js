import request from '@/utils/request'

export function getApps(data) {
  return request({
    headers:{'Authorization':'123','Content-Type':'application/json'},
    url: process.env.VUE_APP_SERVER_API+'/platform/org/v1/resources/apps/list',
    method: 'post',
    data
  })
}


export function getMenusList(data) {
  console.log('312333aaaaaaaaaaaaaaaaaaaaaa')
  return request({
    headers:{'Authorization':'123','Content-Type':'application/json'},
    url: process.env.VUE_APP_SERVER_API+'/platform/org/v1/resources/menus/123/actions/belong_app/show',
    method: 'post',
    data
  })
}
