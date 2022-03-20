import React from 'react'
import styled from 'styled-components'
import Me from '../assets/images/profile-img.png'
import { motion } from 'framer-motion'
import TypedReactHooksDemo from 'src/util/Typed'

const Box = styled(motion.div)`
  /* padding: 2rem 1rem; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};
  z-index: 1;
`

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`

const Text = styled.div`
  font-size: calc(1rem + 1vw);
  color: ${props => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h3 {
    width: 10rem;
    margin: 2rem auto;
    display: block;
    font-size: 1.7rem;
    padding: 0.5rem 0.5rem;
    border: 2px solid transparent;
    border-radius: var(--radius);
    background: var(--deep-dark);
  }

  p {
    color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
    font-size: calc(0.3rem + 1vw);
    font-weight: 300;
    line-height: 2rem;
    /* letter-spacing: 0.5px; */
    font-family: 'Roboto Mono', monospace;
    /* text-align: left !important; */
    text-indent: 2rem;
  }
  p:last-child {
    padding-top: 0.7rem;
  }
`

export default function Intro({ click }) {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Text>
            <TypedReactHooksDemo string="Hello, This is  " ele={true} />
            <h3>Bui Vinh</h3>

            <div>
              {/* <p>
              I graduated Electrical Technology engineering at Ton Duc Thang
              University. However, i based my career as a Developer, since my
              deep passion is coding.
            </p> */}
              <p>See my previous work history on Project page or my Github.</p>
            </div>
          </Text>
        </motion.div>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  )
}
