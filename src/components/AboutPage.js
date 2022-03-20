import React from 'react'
import ParticleComponent from 'src/subComponent/ParticleComponent'
import PowerButton from 'src/subComponent/PowerButton'
import SocialIcon from 'src/subComponent/SocialIcon'
import { skillGrids } from 'src/util/Constant'
import FadeInWhenVisible from 'src/util/InViewHelper'
import styled, { ThemeProvider } from 'styled-components'
import Footer from './Footer'
import Introduce from './Introduce'
import Qualification from './Qualification'
import TechniqueSkills from './TechniqueSkills'
import { darkTheme } from './Themes'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: auto;
  position: relative;
  /* overflow: hidden; */
`
const Container = styled.div`
  color: ${props => props.theme.text};
  margin: 0 auto;
  display: block;
  width: 80%;
  height: 100%;
  padding-top: 7rem;
`
const Title = styled.div`
  text-align: center;

  h2 {
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    font-weight: 700;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
`
const FristSection = styled.div`
  display: flex;
  margin-top: 5rem;
  overflow: hidden;
`
const SecondSection = styled.div`
  display: block;
  padding: 2rem 0;
  margin-top: 2rem;
  div {
    padding: 1rem 0;
  }
  span {
    font-size: 1.5rem;
    padding: 0;
  }
`
const SecondSectionTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
`

export default function AboutPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <SocialIcon theme="dark" />
        <ParticleComponent theme="dark" />
        <PowerButton />
        <Container>
          <Title>
            <h2>About me</h2>
          </Title>
          <FadeInWhenVisible>
            <FristSection>
              <Introduce />
              <Qualification />
            </FristSection>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <SecondSection>
              <SecondSectionTitle>My Skill</SecondSectionTitle>
              <TechniqueSkills skillGrids={skillGrids} />
            </SecondSection>
          </FadeInWhenVisible>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  )
}
