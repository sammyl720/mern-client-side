import { SET_LOADING, GET_PRODUCTS } from './types'
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
    default:
      return {
        ...state
      }
  }
}
