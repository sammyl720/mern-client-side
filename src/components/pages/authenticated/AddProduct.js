import React, { useContext, useEffect, useState } from 'react'
import GIF from '../../../loading.gif'
import Form from '../../layout/Form'
import Submit from '../../layout/Submit'
import UserContext from '../../../context/User/UserContext'
import ProductContext from '../../../context/Product/productContext'
import InputGroup from '../../layout/InputGroup'

const AddProduct = props => {
  const userContext = useContext(UserContext)

  const productContext = useContext(ProductContext)
  const { addProd, setLoading } = productContext
  const [product, setProduct, loading] = useState({
    name: '',
    price: 0,
    description: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    // send to dispatch for api post
    setLoading()
    addProd(product)
  }
  const handleChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }
  if (loading) {
    return <img src={GIF} alt='loading' />
  } else {
    return (
      <Form onSubmit={handleSubmit}>
        <h3>Add a Product</h3>
        <InputGroup>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={handleChange}
            value={product.name}
            required
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            min='0'
            name='price'
            id='price'
            onChange={handleChange}
            value={product.price}
            required
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor='desc'>Description</label>
          <textarea
            name='description'
            id='description'
            value={product.description}
            onChange={handleChange}
          />
        </InputGroup>
        <Submit value='ADD' />
      </Form>
    )
  }
}

export default AddProduct
