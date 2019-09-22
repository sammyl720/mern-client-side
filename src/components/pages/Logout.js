import React, { useContext, useEffect } from 'react'
import UserContext from '../../context/User/UserContext'
import GIF from '../../loading.gif'
const Logout = props => {
  const userContext = useContext(UserContext)
  const { isAuthenticated, loading, setLoading, logoutUser } = userContext
  useEffect(() => {
    if (isAuthenticated) {
      setLoading()
      logoutUser()
    }
  }, [isAuthenticated])
  if (loading || isAuthenticated) {
    return <img src={GIF} alt='loading' />
  } else {
    return <h3> You are logged out </h3>
  }
}

export default Logout
