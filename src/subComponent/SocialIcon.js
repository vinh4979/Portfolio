import React from 'react'
import { Facebook, Github, Twitter, YouTube } from 'src/components/AllSvg'
import { darkTheme } from 'src/components/Themes'
import styled from 'styled-components'

export default function SocialIcon(props) {
  return (
    <Icons>
      <div>
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          href="https://github.com/vinh4979/"
          rel="noreferrer"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </a>
      </div>
      <div>
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          href="https://www.facebook.com/buivinh.1997/"
          rel="noreferrer"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </a>
      </div>
      <div>
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          href="https://github.com/vinh4979/"
          rel="noreferrer"
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </a>
      </div>
      <div>
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          href="https://github.com/vinh4979/"
          rel="noreferrer"
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </a>
      </div>
      <Line color={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
    </Icons>
  )
}

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`

const Line = styled.span`
  /* display: flex; */
  width: 2px;
  height: 8rem;
  background-color: ${props =>
    props.theme === 'dark' ? darkTheme.body : darkTheme.text};
`
