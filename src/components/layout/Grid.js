import React from 'react'
import styled from 'styled-components'
const Box = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fill, calc(40vw - 35px));
  grid-gap: ${props => props.gap || '15px'};
  margin: ${props => props.margin || '10px auto'};
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
  & > .card {
    width: 35vw;
  }
`
const Grid = props => {
  return <Box>{props.children}</Box>
}

export default Grid
