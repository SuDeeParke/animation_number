import axios from 'axios'
const BASEURL = '/baseurl'

export function request(api: string) {
  return axios
    .get(BASEURL + api)
    .then((res) => res)
    .catch((err) => err)
}
