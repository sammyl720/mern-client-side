import React, { useContext, useEffect } from 'react'
import UserContext from '../../../context/User/UserContext'
import ProductContext from '../../../context/Product/productContext'
import GIF from '../../../loading.gif'
import Grid from '../../layout/Grid'
import Card from '../../layout/Card'
import FlexBox from '../../layout/FlexBox'
import Btn from '../../layout/Button'
import stringToDecimal from '../../../util/pricing/addDecimals'
import AddProduct from './AddProduct'
const Products = props => {
  const userContext = useContext(UserContext)
  const productContext = useContext(ProductContext)
  const { user, loadUser, setLoading, loading, isAdmin } = userContext
  const { products, getProducts } = productContext

  useEffect(() => {
    if (!isAdmin) {
      props.history.push('/pricing')
    }
  }, [isAdmin])
  useEffect(() => {
    getProducts()
  }, [getProducts])
  useEffect(() => {
    if (!user) {
      setLoading()
      loadUser()
      console.log(user)
    }
    getProducts()
  }, [user])
  if (loading) {
    return <img src={GIF} alt='loading' />
  } else {
    return (
      <Grid>
        <div>
          {loading ? (
            <img src={GIF} alt='loading' />
          ) : (
            products.map(product => {
              return (
                <Card width='80%' className='product' key={product._id}>
                  <h4 className='product-name'>{product.name}</h4>
                  {product.description !== '' ? (
                    <p className='product-description'>{product.description}</p>
                  ) : (
                    ''
                  )}
                  <FlexBox column>
                    <small>${stringToDecimal(product.price)}</small>
                    {isAdmin && <Btn>Edit</Btn>}
                  </FlexBox>
                </Card>
              )
            })
          )}
        </div>
        <AddProduct {...props} />
      </Grid>
    )
  }
}

export default Products
