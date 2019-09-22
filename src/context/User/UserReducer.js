import {
  LOGIN_USER,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  LOAD_USER,
  LOGOUT_USER
} from './Types'
import setAuthToken from '../../util/setAuthToken'
export default (state, action) => {
  console.log(`State: ${state.user}\nAction:${action.type}`)
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem('token', action.payload.token)
      setAuthToken(action.payload.token)
      return {
        ...state,
        token: localStorage.getItem('token'),
        isAuthenticated: true,
        loading: false
      }
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        token: localStorage.getItem('token'),
        user: { ...action.payload },
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case LOGOUT_USER:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false
      }
    case SET_ALERT:
      return {
        ...state,
        alert: { ...action.payload },
        loading: false
      }
    case REMOVE_ALERT:
      return {
        ...state,
        alert: null
      }
    default:
      return {
        ...state
      }
  }
}
