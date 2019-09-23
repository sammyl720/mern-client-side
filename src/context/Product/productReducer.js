import { SET_LOADING, GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from './types'
export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      }
    case ADD_PRODUCT:
      return {
        ...state,
        current: action.payload,
        loading: false
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        loading: false,
        current: action.payload.product
      }
    default:
      return {
        ...state
      }
  }
}
