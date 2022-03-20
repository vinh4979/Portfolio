import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

  display: block;
  width: 50%;
  letter-spacing: 0.1rem;
  padding-right: 2rem;
  font-family: 'Roboto Mono', monospace;
  
  p:nth-of-type(2) {
      padding-top: 1.5rem;
      line-height: 2rem;
    }
  }
  h2 {
    font-size: 2.1rem;
    letter-spacing: 0.1rem;
    padding: 1rem 0;
    font-weight: 700;    
    font-family: 'Montserrat', sans-serif;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  
  p {
    line-height: 2.5rem;
    font-size: 1.3rem;
    font-weight: 200;
    padding-bottom: 1.5rem;
    
  }
`
const SubTitle = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.3rem;
`
const Name = styled.span`
  width: auto;
  display: inline-block;
  font-size: 1.3rem;
  padding: 0.5rem 0.5rem;
  border: 2px solid transparent;
  border-radius: var(--radius);
  background: var(--deep-dark);
`

export default function Introduce() {
  return (
    <Container>
      <SubTitle>
        Hi, i am <Name>Bui Vinh</Name>
      </SubTitle>
      <h2>A Front End Developer</h2>
      <p>I am from Long An province, Viet Nam.</p>
      <hr />
      <p>
        I graduated Electrical Technology engineering at Ton Duc Thang
        University. However, i based my career as a Developer, since my deep
        passion is coding.
      </p>
      <p>
        Highly adaptable, result-driven problem solver seeking to build website
        that make people's live easier...
      </p>
    </Container>
  )
}
