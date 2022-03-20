import React, { useState } from 'react'
import styled from 'styled-components'
import { FaGraduationCap, FaBusinessTime } from 'react-icons/fa'
import { educationalList, worksList } from 'src/util/Constant'
import { motion } from 'framer-motion'

const parentVariants = {
  hidden: {
    opacity: 0,
    x: 200
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  }
}

const childrenVariants = {
  hidden: {
    opacity: 0,
    x: 200
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4
    }
  }
}

const Container = styled.div`
  display: block;
  width: 50%;
  height: auto;
  letter-spacing: 0.1rem;
  padding-left: 2rem;
  font-family: 'Roboto Mono', monospace;

  .qualification__part {
    display: grid;
    grid-template-columns: max-content 1fr;
    margin: 3rem 0;
  }

  .qualification__part__divide {
    display: flex;
    flex-direction: row;
    .qualification__btn {
      background-color: transparent;
      outline: none;
      border: none;
      margin-right: 1rem;
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-right: 3rem;
      opacity: 0.5;
      transition: var(--transition);
      span {
        display: inline;
        svg {
          color: white;
          margin-right: 1rem;
          width: 3rem;
          height: 3rem;
        }
      }
    }
    .btn__active {
      color: var(--white);
      position: relative;
      opacity: 1;
      transition: all 1s linear;
      &::after {
        content: '';
        position: absolute;
        top: -100%;
        left: 50%;
        width: 0.3rem;
        height: 420%;
        background-color: var(--gray-1);
        transform: rotate(90deg);
      }
    }
  }
  .qualification__data {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 2rem;
    margin-bottom: 3rem;
    .data2 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .qualification__date {
        line-height: 2rem;
        letter-spacing: 0.2em;
        font-weight: 300;
        font-size: 1rem;
      }
      .qualification__title {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.5rem;
        margin-top: 1rem;
      }
      .qualification__subTitle {
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.5rem;
        margin: 1rem 0;
      }
    }
  }
  .qualification__rounder {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background-color: var(--gray-1);
  }
  .qualification__line {
    height: 160%;
    width: 0.3rem;
    background-color: var(--gray-1);
    transform: translate(150%, -5%);
  }
`
const SubTitle = styled.div`
  text-align: center;
  font-size: 2rem;
  margin: 0 auto;
  font-weight: bold;
`
export default function Qualification() {
  const [btnActive, setBtnActive] = useState(true)
  const content = educationalList.map(index => {
    return (
      <div className="qualification__data" key={index.id}>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="qualification__rounder" />
          <div className="qualification__line" />
        </motion.div>
        <motion.div
          className="data2"
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="qualification__date" variants={childrenVariants}>
            {index.date}
          </motion.p>
          {index.title?.map((item, index) => {
            return (
              <>
                <motion.h2
                  className="qualification__title"
                  variants={childrenVariants}
                >
                  {item.itemTile}
                </motion.h2>
                <motion.div variants={childrenVariants}>
                  {item.subTitle?.map(sub => {
                    return <p className="qualification__subTitle">{sub}</p>
                  })}
                </motion.div>
              </>
            )
          })}

          <motion.div variants={childrenVariants}>
            <p className="qualification__subTitle">{index.subTitlt}</p>
            {index.sub && (
              <p className="qualification__subTitle">{index?.sub}</p>
            )}
            <p className="qualification__subTitle">{index?.subTitlt2}</p>
            <p className="qualification__subTitle">{index?.subTitlt3}</p>
            <p className="qualification__subTitle">{index?.subTitlt4}</p>
            <p className="qualification__subTitle">{index?.subTitlt5}</p>
            <p className="qualification__subTitle">{index?.subTitlt6}</p>
          </motion.div>
        </motion.div>
      </div>
    )
  })

  let content2
  if (!btnActive) {
    content2 = worksList.map(item => (
      <div className="qualification__data">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="qualification__rounder" />
          <div className="qualification__line" />
        </motion.div>
        <motion.div
          className="data2"
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="qualification__date" variants={childrenVariants}>
            {item.date}
          </motion.p>
          <motion.h2
            className="qualification__title"
            variants={childrenVariants}
          >
            {item.title}
          </motion.h2>
          <motion.div variants={childrenVariants}>
            <p className="qualification__subTitle">{item.subTitlt}</p>
            {item.sub && <p className="qualification__subTitle">{item.sub}</p>}
          </motion.div>
        </motion.div>
      </div>
    ))
  }
  return (
    <Container>
      <SubTitle>Qualification</SubTitle>
      <div className="qualification">
        <div className="qualification__part">
          <div className="qualification__part__divide">
            <button
              className={`${
                btnActive
                  ? 'qualification__btn btn__active'
                  : 'qualification__btn'
              }`}
              type="button"
              onClick={() => {
                setBtnActive(true)
              }}
            >
              <span>
                <FaGraduationCap />
              </span>
              Education
            </button>
            <button
              className={`${
                !btnActive
                  ? 'qualification__btn btn__active'
                  : 'qualification__btn'
              }`}
              type="button"
              onClick={() => {
                setBtnActive(false)
              }}
            >
              <span>
                <FaBusinessTime />
              </span>
              Works
            </button>
          </div>
        </div>
        {btnActive && content}
        {!btnActive && content2}
      </div>
    </Container>
  )
}
