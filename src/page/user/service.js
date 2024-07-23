import request from '@/utils/request'

export const getUserList = () => {
  return request({
    url: '/api/user/list'
  })
}

export const getUserDetail = (data) => {
  return request({
    url: '/api/user/detail',
    params: data
  })
}

export const addUser = (data) => {
  return request({
    url: '/api/user/add',
    method: 'post',
    data
  })
}

export const editUser = (data) => {
  return request({
    url: '/api/user/edit',
    method: 'post',
    data
  })
}

export const deleteUser = (id) => {
  return request({
    url: `/api/user/delete/${id}`,
    method: 'delete',
  })
}