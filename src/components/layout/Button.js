import React from 'react'
import styled from 'styled-components'

const Button = props => {
  const Btn = styled.button`
    background: ${props => props.bg || 'green'};
    color: ${props => props.color || 'white'};
    font-size: ${props => props.fontSize || '0.9rem'};
    ${props => (props.block ? 'display: block ' : '')}
    padding: ${props => props.padding || '4px 8px'};
    border: none;
    outline: none;
    box-shadow: 1px 1px 10px -8px black;
    margin: auto 6px;
    text-align: center;
    & :hover {
      opacity: 0.8;
    }
    & :active {
      box-shadow: inset 1px 1px 10px -8px black;
    }
  `
  return <Btn {...props}>{props.children}</Btn>
}

export default Button
