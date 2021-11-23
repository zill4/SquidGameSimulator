import axios from 'axios'


export const postAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.post(`http://localhost:4200/api/${url}`, post, {
    withCredentials: true,
    headers: { Authorization: token }
  })

  return res;
}


export const getAPI = async (url: string, token?: string) => {
  const res = await axios.get(`http://localhost:4200/api/${url}`, {
    withCredentials: true,
    headers: { Authorization: token }
  })

  return res;
}

export const patchAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.patch(`http://localhost:4200/api/${url}`, post, {
    withCredentials: true,
    headers: { Authorization: token }
  })

  return res;
}

export const deleteAPI = async (url: string, token?: string) => {
  const res = await axios.delete(`http://localhost:4200/api/${url}`, {
    withCredentials: true,
    headers: { Authorization: token }
  })

  return res;
}