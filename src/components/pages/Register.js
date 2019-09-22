import React, { useState, useContext, useEffect } from 'react'
import Form from '../layout/Form'
import axios from 'axios'
import InputGroup from '../layout/InputGroup'
import Submit from '../layout/Submit'
import UserContext from '../../context/User/UserContext'
const Register = props => {
  const userContext = useContext(UserContext)
  const { isAuthenticated } = userContext
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }
  }, [isAuthenticated])
  const [info, setInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const onChange = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = e => {
    e.preventDefault()

    // register user
    axios
      .post('/user/register', JSON.stringify(info), {
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => {
        // api response
        console.log(res)
        // redirect to login page
        props.history.push('/login')
      })
      .catch(err => {
        // api error
        console.error(err)
      })
    //display error if any
    // redirect
  }
  return (
    <Form onSubmit={onSubmit}>
      <h2>Account Register</h2>
      <InputGroup>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={info.name}
          onChange={onChange}
          required
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          name='email'
          id='email'
          value={info.email}
          onChange={onChange}
          required
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          autoComplete='off'
          id='password'
          value={info.password}
          onChange={onChange}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor='confirmpassword'>Confirm </label>
        <input
          type='password'
          name='confirmPassword'
          id='confirmpassword'
          value={info.confirmPassword}
          autoComplete='off'
          onChange={onChange}
        />
      </InputGroup>
      <Submit value='Register' />
    </Form>
  )
}

export default Register
