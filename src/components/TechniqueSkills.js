import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const btnVariants = {
  hover: {
    scale: 1.5,
    transition: {
      yoyo: Infinity
    }
  }
}
const Container = styled.div`
  display: block;
  padding: 1rem;
  font-family: 'Roboto Mono', monospace;
  font-weight: 300;
`
const SkillGrid = styled.ul`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 3rem;
`
const SkillGridItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  border-radius: var(--radius);
  transition: var(--transition);
  /* box-shadow: 0px 4px 8px rgb(134 151 168 / 30%); */
  border: 1px solid #eee;
  cursor: pointer;
  padding: 1rem 0 0 0;
  img {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
  }
  p {
    margin-top: 5px;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  z-index: 3;
`
export default function TechniqueSkills({ skillGrids, styleGrid }) {
  return (
    <Container>
      <SkillGrid>
        {skillGrids.map(index => {
          return (
            <SkillGridItem
              variants={btnVariants}
              whileHover="hover"
              key={index.id}
            >
              {index.svg}
              <p>{index.text}</p>
            </SkillGridItem>
          )
        })}
      </SkillGrid>
    </Container>
  )
}
