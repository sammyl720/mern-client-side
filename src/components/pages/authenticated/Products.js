import React, { useContext, useEffect } from 'react'
import UserContext from '../../../context/User/UserContext'
import GIF from '../../../loading.gif'
const Products = props => {
  const userContext = useContext(UserContext)
  const { user, loadUser, setLoading, loading } = userContext
  useEffect(() => {
    if (!user) {
      setLoading()
      loadUser()
      console.log(user)
    }
  }, [user])
  if (loading || !user) {
    return <img src={GIF} alt='loading' />
  } else {
    return (
      <div>
        <h3>Hi,{user.name}</h3>
        This is a protected route
      </div>
    )
  }
}

export default Products
