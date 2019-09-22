import React from 'react'
import styled from 'styled-components'

const Button = props => {
  const Btn = styled.button`
    background: green;
    color: white;
    font-size: 1.2rem;
    ${props => (props.block ? 'display: block ' : '')}
    padding: 5px 10px;
    border: none;
    outline: none;
    box-shadow: 1px 1px 10px -8px black;
    margin: 5px;
    text-align: center;
    & :active {
      box-shadow: inset 1px 1px 10px -8px black;
    }
  `
  return <Btn {...props}>{props.children}</Btn>
}

export default Button
