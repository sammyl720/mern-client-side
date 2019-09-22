import React, { useReducer } from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import axios from 'axios'
import setAuthToken from './../../util/setAuthToken'
import {
  LOGIN_USER,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
  LOAD_USER,
  LOGOUT_USER
} from './Types'
const UserState = props => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    token: null,
    alert: null,
    loading: false
  }
  const [state, dispatch] = useReducer(UserReducer, initialState)
  // load user
  const loadUser = () => {
    setLoading()
    setAuthToken(localStorage.getItem('token'))
    axios
      .get('/user')
      .then(res => {
        dispatch({ type: LOAD_USER, payload: res.data })
      })
      .catch(err => {
        console.log('Could not load user', err)
      })
  }
  // set loading to true
  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }
  // login user
  const loginUser = creds => {
    setLoading()
    axios
      .post('/user/login', JSON.stringify(creds), {
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json'
        }
      })
      .then(res => {
        // api response
        dispatch({ type: LOGIN_USER, payload: res.data })
        // console.log(res.data)
        // redirect to products page
      })
      .catch(err => {
        // api error
        console.log(err)
        setAlert({
          message: 'Invalid Credentails',
          type: 'danger'
        })
      })
  }
  const setAlert = ({ message, type }) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        type
      }
    })
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT })
    }, 5000)
  }

  // logout user
  const logoutUser = () => {
    setLoading()
    dispatch({ type: LOGOUT_USER })
  }
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        token: state.token,
        alert: state.alert,
        setLoading,
        loginUser,
        setAlert,
        loadUser,
        logoutUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
