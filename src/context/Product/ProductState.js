import React, { useReducer } from 'react'
import ProductContext from './productContext'
import productReducer from './productReducer'
import axios from 'axios'
import { SET_LOADING, GET_PRODUCTS } from './types'
const ProductState = props => {
  const initialState = {
    products: [],
    currentProduct: null,
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
        setLoading
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
