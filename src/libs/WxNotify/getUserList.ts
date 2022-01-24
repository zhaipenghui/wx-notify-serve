/*
 * @Descripttion:
 * @Author: Zhai Penghui
 * @Date: 2022-01-24 13:37:09
 */
import axios from 'axios'

/**
 * 获取用户列表
 */
const BASE_URL = 'https://qyapi.weixin.qq.com'
const phone = '13137657727'

const getIdByPhone = async (accessToken: String, mobile: String) => {
  const response = await axios({
    url: `${BASE_URL}/cgi-bin/user/getuserid?access_token=${accessToken}`,
    method: 'POST',
    data: {
      mobile: mobile,
    },
  })
  return response.data
}

const readUser = async (accessToken: String, mobile: String) => {
  const response = await axios({
    url: `${BASE_URL}/cgi-bin/user/getuserid?access_token=${accessToken}`,
    method: 'POST',
    data: {
      mobile: mobile,
    },
  })
  return response.data
}

export const getUserList: FnReqPostMsg = async (accessToken, config) => {
  const res = await getIdByPhone(accessToken, phone)
  console.log(res)


  return res

  // const response = await axios({
  //   url: `${BASE_URL}/cgi-bin/message/send?access_token=${accessToken}`,
  //   method: 'POST',
  //   data: {
  //     touser: config.touser || '@all',
  //     ...config,
  //   },
  // })
  // return response.data
}
