import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: auto;
  margin-bottom: auto;
  ${props => (props.column ? 'flex-direction: column;' : '')}
  padding: '4px';
`
const FlexBox = props => {
  return <Box>{props.children}</Box>
}

export default FlexBox
