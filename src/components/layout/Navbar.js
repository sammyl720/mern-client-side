import React, { useContext, Fragment, useEffect } from 'react'
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
  @media (max-width: 600px) {
    width: 100%;
  }
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
const Navbar = props => {
  const userContext = useContext(UserContext)
  const { isAuthenticated, isAdmin, loadUser } = userContext

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])
  const AuthLinks = props => {
    if (isAuthenticated) {
      if (isAdmin) {
        return (
          <Fragment>
            <Link to='/user'>Admin</Link>
            <Link to='/logout'>Logout</Link>
          </Fragment>
        )
      }
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
