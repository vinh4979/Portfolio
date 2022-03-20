import { motion } from 'framer-motion'
import React from 'react'
import ParticleComponent from 'src/subComponent/ParticleComponent'
import PowerButton from 'src/subComponent/PowerButton'
import TypedReactHooksDemo from 'src/util/Typed'
import styled, { ThemeProvider } from 'styled-components'
import FooterComponent from './Footer'
import ProjectSwiper from './ProjectSwiper'
import { darkTheme } from './Themes'

const Box = styled(motion.div)`
  display: block;
  width: 100%;
  height: auto;
  /* position: relative; */
  background-color: ${props => props.theme.body};
`

const Container = styled.div`
  display: block;
  width: 100%;
  /* background-color: white; */
  font-family: 'Roboto Mono', monospace;
  color: ${props => props.theme.text};
  padding-top: 6rem;
  position: relative;
`
const Title = styled.div`
  text-align: center;
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    font-weight: 700;
    padding-top: 0.7rem;
  }
`

export default function ProjectPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ParticleComponent theme="dark" />
        <PowerButton />
        <Container>
          <Title>
            <TypedReactHooksDemo string="some of my recent work" />
            <h2>PROJECT</h2>
          </Title>
          <ProjectSwiper />
        </Container>
      </Box>
      <FooterComponent />
    </ThemeProvider>
  )
}
