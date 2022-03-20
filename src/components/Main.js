import React, { useState } from 'react'
import PowerButton from 'src/subComponent/PowerButton'
import LogoComponent from 'src/subComponent/LogoComponent'
import styled, { keyframes } from 'styled-components'
import SocialIcon from 'src/subComponent/SocialIcon'
import { NavLink } from 'react-router-dom'
import { YinYang } from './AllSvg'
import Intro from './Intro'
import { motion } from 'framer-motion'

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`
const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 3;
  text-decoration: none;
`

const BLOG = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 3;
  text-decoration: none;
`

const WORK = styled(NavLink)`
  color: ${props => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: rotate(-90deg) translate(-50%, -50%);
  z-index: 3;
  text-decoration: none;
`

const BottomBar = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  width: 100%;
  /* font-size: 3rem; */
  display: flex;
  justify-content: space-evenly;
`
const Btn = styled(motion.button)`
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
`
const ABOUT = styled(NavLink)`
  color: ${props => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  border: 1px solid ${props => props.theme.body};
  border-radius: var(--radius);
`
const PROJECT = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
  border: 1px solid ${props => props.theme.text};
  border-radius: var(--radius);
`

const rotate = keyframes`
  from{
    transform: rotate(0); 
  } 
  to{
    transform: rotate(360deg);
  }
`
const Center = styled.button`
  position: absolute;
  left: ${props => (props.click ? '92%' : '50%')};
  top: ${props => (props.click ? '85%' : '50%')};
  transform: translate(-50%, -50%);
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    padding-top: 1rem;
    display: ${props => (props.click ? 'none' : 'block')};
  }
`

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: #000;
  display: block;
  height: ${props => (props.click ? '100%' : '0')};
  width: ${props => (props.click ? '100%' : '0')};
  z-index: 0;
  transition: height 0.5s ease, width 1s ease 0.5s;
`

export default function Main() {
  const [click, setClick] = useState(true)
  const handleClick = () => {
    setClick(!click)
  }

  return (
    <MainContainer>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container>
          <LogoComponent theme={click ? 'dark' : 'light'} />
          <PowerButton />
          <SocialIcon theme={click ? 'dark' : 'light'} click={click} />
          {/* <Center click={click}>
          <YinYang
            onClick={() => handleClick()}z
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>Click Here</span>
        </Center> */}
          <DarkDiv click={click} />
          {/* <Contact to="/">
          <motion.button whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
            Say hi...
          </motion.button>
        </Contact> */}
          {/* <BLOG to="/blog" click={click}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Blog
          </motion.button>
        </BLOG> */}
          {/* <WORK to="/work" click={click}>
          <motion.h2
            theme={click ? 'dark' : 'light'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK> */}
          <BottomBar>
            <ABOUT to="/about" click={click}>
              <Btn whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                About Me
              </Btn>
            </ABOUT>
            <PROJECT to="/project">
              <Btn whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                My Works
              </Btn>
            </PROJECT>
          </BottomBar>
        </Container>
        {click ? <Intro click={click} /> : null}
      </motion.main>
    </MainContainer>
  )
}
