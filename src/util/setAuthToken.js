import axios from 'axios'

const setAuthToken = token => {
  var result
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token
    result = true
  } else {
    delete axios.defaults.headers.common['x-auth-token']
    result = false
  }
  return result
}

export default setAuthToken
