import React, { useEffect, useState, useContext } from 'react'
import stringToDecimal from '../../util/pricing/addDecimals'
import UserContext from '../../context/User/UserContext'
import Card from '../layout/Card'
import GIF from '../../loading.gif'
import axios from 'axios'
const Products = () => {
  const userContext = useContext(UserContext)
  const { isAuthenticated } = userContext
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (loading) {
      axios
        .get('/products/')
        .then(result => {
          setProducts(result.data)
          setLoading(false)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [products, loading])
  return (
    <div className='product-list'>
      {loading ? (
        <img src={GIF} alt='loading' />
      ) : (
        products.map(product => {
          return (
            <Card className='product' key={product._id}>
              <h4 className='product-name'>{product.name}</h4>
              {product.description !== '' ? (
                <p className='product-description'>{product.description}</p>
              ) : (
                ''
              )}
              <small>${stringToDecimal(product.price)}</small>
            </Card>
          )
        })
      )}
    </div>
  )
}

export default Products
