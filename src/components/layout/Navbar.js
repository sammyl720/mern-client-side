import React, { useContext, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'
import styled from 'styled-components'

const Navlist = styled.nav`
  display: flex;
  height: 50px;
  list-style-type: none;
  font-size: 1.2rem;
  background: #101419;
  margin: auto;
  align-items: center;
  justify-content: space-evenly;
  & > a {
    text-decoration: none;
    color: #476c9b;
    transition: 500ms;
  }
  & > a:hover {
    font-weight: 600;
    color: #468c98;
    font-size: 1.05em;
  }
  ${props => (props.side === 'right' ? 'width:30%;' : 'width:50%;')}
  ${props => (!props.side ? 'width:80%;' : '')}
`
const Navbar = () => {
  const userContext = useContext(UserContext)
  const { isAuthenticated } = userContext
  const AuthLinks = props => {
    if (isAuthenticated) {
      return <Link to='/logout'>Logout</Link>
    } else {
      return (
        <Fragment>
          <Link to='/login'>Login</Link>
          <Link to='/Register'>Register</Link>
        </Fragment>
      )
    }
  }
  return (
    <Navlist>
      <Navlist side='left'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/pricing'>Products</Link>
      </Navlist>
      <Navlist side='right'>
        <AuthLinks />
      </Navlist>
    </Navlist>
  )
}

export default Navbar
