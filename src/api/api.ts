import { request } from '../utils/initAxios'

function getStudentInfo() {
  return request('/api/student')
}

export { getStudentInfo }
