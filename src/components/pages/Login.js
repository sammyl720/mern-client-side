import React, { useState, useContext, useEffect } from 'react'
import Form from '../layout/Form'
import InputGroup from '../layout/InputGroup'
import Submit from '../layout/Submit'
import UserContext from '../../context/User/UserContext'
import LoadinGif from '../../loading.gif'
const Login = props => {
  const userContext = useContext(UserContext)
  const { isAuthenticated, loginUser, alert, loading, setLoading } = userContext
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }
    // eslint-disable-next-line
  }, [isAuthenticated])
  const [credentials, setCredentails] = useState({
    email: '',
    password: ''
  })
  const handleSubmit = e => {
    e.preventDefault()
    setLoading()
    // login with the api
    loginUser(credentials)
    // store response JWT token
    // handle errors redirect
  }
  const onChangeHandler = e => {
    setCredentails({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }
  if (loading) {
    return <img src={LoadinGif} alt='loading' />
  }
  return (
    <Form onSubmit={handleSubmit}>
      {alert && <p>{alert.message}</p>}
      <h1>Account Login</h1>
      <InputGroup credentials={credentials}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={credentials.email}
          onChange={onChangeHandler}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={credentials.password}
          onChange={onChangeHandler}
          required
        />
      </InputGroup>
      <Submit value='Login' />
    </Form>
  )
}

export default Login
