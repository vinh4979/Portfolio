import React from 'react'
import { darkTheme } from 'src/components/Themes'
import styled from 'styled-components'

const Logo = styled.h1`
  display: inline-block;
  color: ${props => (props.color === 'dark' ? darkTheme.text : darkTheme.body)};
  font-family: 'Pacifico', cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;

  /* text-transform: uppercase; */
`

export default function LogoComponent(props) {
  return <Logo color={props.theme}>Portfolio</Logo>
}
