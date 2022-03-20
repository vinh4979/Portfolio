import React, { useEffect, useState } from 'react'
import AnchorComponent from 'src/subComponent/AnchorComponent'
import LogoComponent from 'src/subComponent/LogoComponent'
import PowerButton from 'src/subComponent/PowerButton'
import SocialIcon from 'src/subComponent/SocialIcon'
import styled from 'styled-components'
import img from '../assets/images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import { Blogs } from '../data/BlogData'
import BlogComponent from './BlogComponent'

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  /* background: black; */
`
export default function BlogPage() {
  const [numbers, setNumbers] = useState(0)

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30
    setNumbers(parseInt(num))
  }, [])
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcon />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {Blogs.map((Blog, index) => {
              return <BlogComponent key={Blog.id} blog={Blog} />
            })}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  )
}
