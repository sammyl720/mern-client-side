import React from 'react'
import styled from 'styled-components'
const LongCard = props => {
  const LongCard = styled.section`
    background: ${props => props.background || 'white'};
    color: ${props => props.color || 'black'};
    box-sizing: border-box;
    box-shadow: 2px 2px 14px -10px black;
    width: 40vw;
    min-height: ${40 * 1.34}vw;
    padding: ${props => props.padding || '15px'};
    height: 500px;
    display: flex;
    margin: 5px auto;
    justify-content: space-evenly;
    align-items: center;
  `
  return <LongCard>{props.children}</LongCard>
}

export default LongCard
