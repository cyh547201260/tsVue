import request from '@/utils/request'

export function getFilterOptions(params) {
  return request({
    headers:{'Authorization':'123','Content-Type':'application/json'},
    url: process.env.VUE_APP_SERVER_API+'/claim/application/v1/list/search/show',
    method: 'get',
    params
  })
}

export function getTableDataList(data) {
  return request({
    headers:{'Authorization':'123','Content-Type':'application/json'},
    url: process.env.VUE_APP_SERVER_API+'/claim/claim/v1/case/list',
    method: 'post',
    data
  })
}
