import React, { useEffect, Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import stringToDecimal from '../../util/pricing/addDecimals'
import UserContext from '../../context/User/UserContext'
import LoadinGif from '../../loading.gif'
import Grid from '../layout/Grid'
import Card from '../layout/Card'
import FlexBox from '../layout/FlexBox'
import ProductContext from '../../context/Product/productContext'
import Btn from '../layout/Button'
const Products = props => {
  const userContext = useContext(UserContext)
  const productContext = useContext(ProductContext)
  const { products, getProducts, loading, deleteProduct } = productContext
  const { isAuthenticated, isAdmin } = userContext
  useEffect(() => {
    getProducts()
  }, [])
  const handleDelete = (id, name) => {
    const youSure = window.confirm(`Are you sure you want to delete ${name}?`)
    console.log(`You sure? ${youSure ? 'Yes' : 'No'}`)
    if (youSure) {
      deleteProduct(id)
    }
    // deleteProduct(id)
    // handle delete
  }
  return (
    <Grid>
      <div>
        {loading ? (
          <img src={LoadinGif} alt='loading' />
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
                  {isAdmin && (
                    <Fragment>
                      <Link to='/user'>Edit</Link>
                      <Btn
                        onClick={() => {
                          handleDelete(product._id, product.name)
                        }}
                      >
                        Delete
                      </Btn>
                    </Fragment>
                  )}
                  {isAuthenticated && !isAdmin && (
                    <Btn>
                      {' '}
                      <i className='fas fa-plus' />
                    </Btn>
                  )}
                </FlexBox>
              </Card>
            )
          })
        )}
      </div>
      <div className='card'>CART AREA</div>
    </Grid>
  )
}

export default Products
