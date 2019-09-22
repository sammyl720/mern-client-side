import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const LongCard = styled.form`
  color: ${props => props.color || 'black'};
  box-sizing: border-box;
  box-shadow: 2px 2px 14px -10px black;
  height: ${50 * 1.34}vw;
  max-width: 500px;
  max-height: ${500 * 1.34}px;
  padding: ${props => props.padding || '15px'};
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
`
const Longcard = props => {
  const fadeIn = useSpring({
    from: {
      opacity: 0,
      background: '#fafafa',
      width: '50vw',
      margin: '5px auto'
    },
    to: { opacity: 1, background: 'white', width: '50vw', margin: '20px auto' }
  })
  return (
    <animated.div style={fadeIn}>
      <LongCard {...props}>{props.children}</LongCard>
    </animated.div>
  )
}

export default Longcard
