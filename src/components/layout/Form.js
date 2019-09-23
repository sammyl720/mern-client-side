import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const LongCard = styled.form`
  color: ${props => props.color || 'black'};
  box-sizing: border-box;
  box-shadow: 2px 2px 14px -10px black;
  height: ${50 * 1.34}vw;
  width: 500px;
  max-height: ${500 * 1.34}px;
  padding: ${props => props.padding || '15px'};
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 600px) {
    width: 98%;
  }
`
const Longcard = props => {
  const fadeIn = useSpring({
    from: {
      opacity: 0,
      background: '#fafafa',
      width: '98%',
      margin: '5px auto'
    },
    to: { opacity: 1, background: 'white', width: '80%', margin: '5px auto' }
  })
  return (
    <animated.div style={fadeIn}>
      <LongCard {...props}>{props.children}</LongCard>
    </animated.div>
  )
}

export default Longcard
