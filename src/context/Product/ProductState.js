import React, { useReducer } from 'react'
import ProductContext from './productContext'
import productReducer from './productReducer'
import setAuthToken from '../../util/setAuthToken'
import axios from 'axios'
import { SET_LOADING, GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from './types'
const ProductState = props => {
  const initialState = {
    products: [],
    current: null,
    loading: false
  }
  const [state, dispatch] = useReducer(productReducer, initialState)

  // get products from api
  const getProducts = () => {
    axios
      .get('/products/')
      .then(result => {
        setLoading()
        dispatch({ type: GET_PRODUCTS, payload: result.data })
      })
      .catch(err => {
        console.log(err)
      })
  }
  // add a product with api call
  const addProd = prod => {
    setLoading()
    const result = setAuthToken(localStorage.getItem('token'))
    if (result) {
      axios
        .post('/products', JSON.stringify(prod), {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          dispatch({ type: ADD_PRODUCT, payload: res.data })
          console.log(res.data)
        })
        .catch(err => {
          // something went wrong
          // handle error
          console.log(err)
        })
    }
  }
  // delete a product by id
  // require authetication
  const deleteProduct = id => {
    setLoading()
    const token = window.localStorage.getItem('token')
    console.log(`Token: ${token}`)
    const result = setAuthToken(token)
    if (result) {
      axios
        .delete(`/products/${id}`, {
          headers: {
            Accept: 'application/json'
          }
        })
        .then(res => {
          dispatch({ type: DELETE_PRODUCT, payload: res.data })
          console.log(res.data)
        })
        .catch(err => {
          // something went wrong
          // handle error
          console.log(err)
        })
    }
  }
  // set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        current: state.current,
        loading: state.loading,
        getProducts,
        setLoading,
        addProd,
        deleteProduct
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
