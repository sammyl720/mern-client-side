import React from 'react'
import styled from 'styled-components'
const Btn = styled.input`
  background: green;
  color: white;
  font-size: 1.2rem;
  padding: 6px 12px;
  border: none;
  outline: none;
  box-shadow: 2px 2px 10px -8px black;
  margin: 5px auto;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: 500ms;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 1px 1px 10px -8px black;
    border-radius: 6px;
    background: blue;
  }
`
const Submit = props => {
  return <Btn type='submit' value={props.value} />
}

export default Submit
