import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
const Card = props => {
  const effects = useSpring({
    from: { opacity: 0, background: 'moccasin', margin: '0px auto' },
    opacity: 1,
    background: 'white',
    margin: '12px auto'
  })
  const WideCard = styled.section`
    color: ${props => props.color || 'black'};
    box-sizing: border-box;
    box-shadow: 2px 2px 14px -10px black;
    width: ${props => props.width || '80%'};
    height: ${props => (props.width ? `${props.width / 2}%` : '40%')};
    padding: ${props => props.padding || '15px'};
    display: flex;
    ${props => (props.direction ? `flex-direction: ${props.direction}` : '')}
    margin: 5px auto;
    justify-content: space-evenly;
    & > div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  `
  return (
    <animated.div style={effects}>
      <WideCard {...props}>{props.children}</WideCard>
    </animated.div>
  )
}

export default Card
