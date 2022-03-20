import React from 'react'
import styled from 'styled-components'
import { FaBars, FaGlobe } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { links, socials } from 'src/util/Constant'

const socialsVariants = {
  hover: {
    scale: 1.3,
    transition: {
      duration: 0.3
    }
  }
}

const linksVariants = {
  hover: {
    scale: 1.5,
    transition: {
      duration: 0.3
    }
  }
}

const Wrapper = styled.footer`
  background-color: var(--deep-dark);
  font-family: 'Montserrat', sans-serif;

  .footer__link {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer__link__icon {
    width: 3rem;
    height: 3rem;
    border: 2px solid var(--white);
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      transform: rotate(-45deg);
      width: 2rem;
      height: 2rem;
      fill: var(--white);
    }
  }
  .footer__links {
    text-align: center;
    z-index: 3;
    padding: 3rem;
    h2 {
      text-align: center;

      color: var(--white);
      font-size: 2rem;
    }
    ul {
      display: flex;
      margin: 0 auto;
      margin-top: 2rem;
      justify-content: space-between;
      gap: 0.5rem;
      max-width: 33rem;
      font-family: 'Roboto Mono', monospace;

      a {
        text-transform: uppercase;
        font-size: 1.5rem;
        color: var(--white);
        font-weight: 400;
      }
      svg {
        width: 2rem;
        height: 2rem;
        fill: var(--white);
        font-weight: 400;
      }
    }
  }
  .footer__copy {
    text-align: center;

    padding-bottom: 1rem;
    color: white;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5;
  }
  @media (min-width: 920px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10rem;
      margin: 0 auto;
    }
  }
`

export default function FooterComponent() {
  return (
    <Wrapper>
      <div className="container">
        <div className="footer__links">
          <div className="footer__link">
            <span className="footer__link__icon">
              <FaBars />
            </span>
          </div>
          <h2>Links</h2>
          <ul>
            {links.map(link => (
              <motion.li
                key={link.id}
                variants={socialsVariants}
                whileHover="hover"
              >
                <Link to={link.url}>{link.text}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="footer__links">
          <div className="footer__link">
            <span className="footer__link__icon">
              <FaGlobe />
            </span>
          </div>
          <h2>Socials</h2>
          <ul>
            {socials.map(link => (
              <motion.li
                key={link.id}
                variants={linksVariants}
                whileHover="hover"
              >
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.image}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__copy">
        <h2>© 2022 - Portfolio | Developed By Bui Vinh</h2>
        <br />
        <h2>Made with passion and love</h2>
      </div>
    </Wrapper>
  )
}
