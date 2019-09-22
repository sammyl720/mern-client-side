import React, { useEffect, useState, useContext } from 'react'
import stringToDecimal from '../../util/pricing/addDecimals'
import UserContext from '../../context/User/UserContext'
import LoadinGif from '../../loading.gif'
import Card from '../layout/Card'
import FlexBox from '../layout/FlexBox'
import ProductContext from '../../context/Product/productContext'
import Btn from '../layout/Button'
const Products = () => {
  const userContext = useContext(UserContext)
  const productContext = useContext(ProductContext)
  const { products, getProducts, loading } = productContext
  const { isAuthenticated, isAdmin } = userContext
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='product-list'>
      {loading ? (
        <img src={LoadinGif} alt='loading' />
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
              <FlexBox column>
                <small>${stringToDecimal(product.price)}</small>
                {isAdmin && <Btn>Edit</Btn>}
                {isAuthenticated && <Btn> Add to Basket</Btn>}
              </FlexBox>
            </Card>
          )
        })
      )}
    </div>
  )
}

export default Products
