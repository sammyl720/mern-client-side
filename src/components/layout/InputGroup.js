import React from 'react'
import styled from 'styled-components'

const InputGroupEle = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
`
const InputGroup = props => {
  return <InputGroupEle>{props.children}</InputGroupEle>
}

export default InputGroup
